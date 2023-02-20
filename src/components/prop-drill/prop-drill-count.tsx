import { Typography } from "@mui/material";
import React from "react";

export function PropDrillCount({
  count,
}: {
  count: number;
}): React.ReactElement {
  return <Typography variant="h4">Count: {count}</Typography>;
}
