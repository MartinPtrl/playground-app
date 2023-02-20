import { Box, Paper } from "@mui/material";
import React from "react";

export function BigBox({
  children,
}: React.PropsWithChildren): React.ReactElement {
  return (
    <Box paddingY={8} paddingX={16}>
      <Paper elevation={12}>
        <Box padding={4}>{children}</Box>
      </Paper>
    </Box>
  );
}
