import { Box, Stack } from "@mui/material";
import React from "react";
import Feed from "./components/Feed";
import Nav from "./components/Nav";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <Box>
      <Nav />
      <Stack spacing={2} direction="row" justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
};

export default App;
