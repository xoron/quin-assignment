import React, { FC, useMemo } from "react";
import Popover from "@mui/material/Popover";
import styled from "styled-components";
import LaunchInfo from "./LaunchInfo";

const StyledLaunchPin = styled.div`
  font-size: 50px;

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font-size: 50px;
    cursor: pointer;
    outline: inherit;
  }
`;

const LaunchPin = ({ text, lat, lng }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledLaunchPin>
      <button onClick={handleClick}>🚀</button>
      <Popover
        // id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <LaunchInfo />
      </Popover>
    </StyledLaunchPin>
  );
};

export default LaunchPin;
