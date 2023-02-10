import * as React from "react";
import Box from "@mui/material/Box";
import GridCard from "./GridCard";

export default function BoxSx() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "89vh",
        mt: "3vh",
        backgroundColor: " #cfd8dc",
        p: "2vw",
        "&:hover": { backgroundColor: "#b0bec5" },
      }}
    >
      <GridCard />
    </Box>
  );
}
