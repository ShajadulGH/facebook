import { Box } from "@mui/material";
import React from "react";

function SideBar() {
  return (
    <Box
      bgcolor="pink"
      p={2}
      flex={1}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      SideBar
    </Box>
  );
}

export default SideBar;
