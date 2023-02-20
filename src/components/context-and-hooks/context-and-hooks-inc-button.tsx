import { Button } from "@mui/material";
import React from "react";
import { useCount } from "./count-context";

export function ContextAndHooksIncButton(): React.ReactElement {
  const { count, setCount } = useCount();
  const handleClick = React.useCallback(
    () => setCount(count + 1),
    [count, setCount]
  );
  return (
    <Button variant="contained" onClick={handleClick}>
      +
    </Button>
  );
}
