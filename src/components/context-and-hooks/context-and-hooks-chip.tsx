import { Chip } from "@mui/material";
import React from "react";
import { useCount } from "./count-context";

export function ContextAndHooksChip(): React.ReactElement {
  const { count } = useCount();
  return (
    <Chip
      label={count > 0 ? "Positive" : "Negative"}
      color={count > 0 ? "success" : "error"}
    />
  );
}
