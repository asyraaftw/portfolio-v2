import { Box } from "@mui/material";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

export default function AppBar({ children }: IProps) {
  return (
    <Box
      sx={{
        border: 1,
        borderRadius: 0,
        borderColor: "red",
        mx: { xs: 2, sm: 5, md: 60 },
        my: 5,
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
}
