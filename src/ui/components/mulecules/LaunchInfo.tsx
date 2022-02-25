import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";

const LaunchInfo = () => {
  return (
    <Paper elevation={3}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">{"Launch info"}</Typography>

        <Table sx={{ width: 300 }} aria-label="simple table">
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography variant="subtitle2">{"name"}</Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography variant="subtitle1">{"row.name"}</Typography>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography variant="subtitle2">{"time of launch"}</Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography variant="subtitle1">{"row.name"}</Typography>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography variant="subtitle2">
                  {"name of launchpad"}
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography variant="subtitle1">{"row.name"}</Typography>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography variant="subtitle2">
                  {"colabborating agencies"}
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography variant="subtitle1">{"row.name"}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
};

export default LaunchInfo;
