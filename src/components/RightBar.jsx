import { Box } from "@mui/material";
import React from "react";

function RightBar() {
  return (
    <Box
      bgcolor="pink"
      p={2}
      flex={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      SideBar
    </Box>
  );
}

export default RightBar;
