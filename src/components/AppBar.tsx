import { Box } from "@mui/material";
import React from "react";

interface IProps {
  children: React.ReactNode;
}
export default function AppBar({ children }: IProps) {
  return (
    <>
      <Box
        sx={{
          border: 1,
          borderRadius: 0,
          borderColor: "red",
          marginLeft: 50,
          marginRight: 50,
          marginBottom: 5,
          marginTop: 5,
          minHeight: "90vh", // full height
          display: "flex", // optional: helps with layout
          flexDirection: "column",
        }}
      >
        {children}
      </Box>
    </>
  );
}
