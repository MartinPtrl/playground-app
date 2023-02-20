import { Typography } from "@mui/material";
import React from "react";
import { useCount } from "./count-context";

export function ContextAndHooksCount(): React.ReactElement {
  const { count } = useCount();
  return <Typography variant="h4">Count: {count}</Typography>;
}
