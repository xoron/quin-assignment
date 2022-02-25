import Typography from "@mui/material/Typography";
import styled from "styled-components";
import React from "react";

const StyledHome = styled.div`
  img {
    max-width: 100%;
    max-height: 500px;
  }
`;

const Home = (): JSX.Element => (
  <StyledHome>
    <Typography variant="h3">Welcome to the Moonshot Calendar Inc.</Typography>
    <img src="https://source.unsplash.com/random/?rocket" />
  </StyledHome>
);

export default Home;
