import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Nav from "./components/Nav";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";

const App = () => {
  const [mode, setMode] = useState("light");
  const DarkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Nav />
        <Stack spacing={2} direction="row" justifyContent="space-between">
          <SideBar mode={mode} setMode={setMode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
