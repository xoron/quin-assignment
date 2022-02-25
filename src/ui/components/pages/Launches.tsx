import React, { useState, useMemo, useEffect } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import DateRangePicker, { DateRange } from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CircularProgress from "@mui/material/CircularProgress";
import { formatDistance, addMonths,  } from "date-fns";
import GoogleMapReact from "google-map-react";
import LaunchPin from "../mulecules/LaunchPin";
import useAsync from "../hooks/useAsync";

const Launches = (): JSX.Element => {
  const [dateRange, setDateRange] = useState<DateRange<Date>>([
    new Date(),
    addMonths(new Date(), 3),
  ]);
  const [mapCenter, setMapCenter] = useState({
    lat: 10.99835602,
    lng: 77.01502627,
  });

  const [agenciesFilter, setAgenciesFilter] = useState([]);
  const [launchSuccessFilter, setLaunchSuccessFilter] = useState(null);

  const {
    execute: fetchLaunches,
    status,
    error,
    value,
  } = useAsync(
    () => window.fetch("https://lldev.thespacedevs.com/2.2.0/launch/?limit=1000&offset=100")
      .then(r => r.json()),
    false
  );

  useEffect(() => {
    if (status === 'idle') {
      fetchLaunches();
    }
  }, [status]);

  console.log({
    status,
    error,
    value,
  });

  const listOfLaunches = useMemo(() => value?.results
    .sort((a, b) => b.window_start - a.window_start)
    .map(launch => ({
      id: launch.id,
      lat: parseFloat(launch.pad.latitude),
      lng: parseFloat(launch.pad.longitude),
      name: launch.name,
      timeOfLaunch: new Date(launch.window_start),
      nameOfLaunchPad: launch.pad.name
    })), [value]);

    useEffect(() => {
      if (listOfLaunches?.length) {
        setMapCenter({
          lat: listOfLaunches[0].lat,
          lng: listOfLaunches[0].lng
        })
      }
    }, [listOfLaunches])

  console.log({ listOfLaunches })

  const listOfAgencies = [];

  const dateRangeMessage = useMemo(
    () =>
      dateRange[0] && dateRange[1]
        ? `Selected range: ${formatDistance(dateRange[0], dateRange[1])}`
        : "Please select a date range",
    [dateRange]
  );

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <FormGroup>
          <Box sx={{ mb: 2 }}>
            <DateRangePicker
              calendars={3}
              startText="Launches from:"
              endText="launches to:"
              value={dateRange}
              onChange={(newValue) => {
                setDateRange(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <>
                  <TextField
                    {...startProps}
                    data-testid="launch-from-date-input"
                  />
                  <Box sx={{ m: 2 }}> to </Box>
                  <TextField {...endProps} data-testid="launch-to-date-input" />
                </>
              )}
            />
            <Typography variant="body2">{dateRangeMessage}</Typography>
          </Box>
        </FormGroup>
      </LocalizationProvider>

      {error && <Typography variant="body2">{error}</Typography>}

      {status === "pending" && !error ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress data-testid="circular-progress" />
        </Box>
      ) : (
        <>
          <div style={{ height: "500px", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              center={mapCenter}
              defaultZoom={11}
            >
              {listOfLaunches?.map((launch) => (
                <LaunchPin lat={launch.lat} lng={launch.lng} text="My Marker" />
              ))}
            </GoogleMapReact>
          </div>

          <Box sx={{ m: 1 }}>
            <Typography variant="subtitle2">Upcomming launches by date (click on row to select on map)</Typography>
          </Box>

          <Table sx={{ width: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Time of launch</TableCell>
                <TableCell align="right">Name of launchpad</TableCell>
                <TableCell align="right">Agencies</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listOfLaunches?.map((launch) => (
                <TableRow
                  key={launch.id}
                  onClick={() => setMapCenter(launch)}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography variant="subtitle2">{launch.name}</Typography>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography variant="subtitle1">{launch.timeOfLaunch.toString()} or {formatDistance(launch.timeOfLaunch, new Date(), { addSuffix: true })}</Typography>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography variant="subtitle1">{launch.nameOfLaunchPad}</Typography>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography variant="subtitle1">{"agency placeholder"}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </>
  );
};

export default Launches;
