import { Box, Fab } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
function Add() {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
    </>
  );
}

export default Add;
