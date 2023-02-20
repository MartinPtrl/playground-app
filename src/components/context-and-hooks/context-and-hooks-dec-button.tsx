import { Button } from "@mui/material";
import React from "react";
import { useCount } from "./count-context";

export function ContextAndHooksDecButton(): React.ReactElement {
  const { count, setCount } = useCount();
  const handleClick = React.useCallback(() => {
    if (count <= -5) {
      return;
    }
    setCount(count - 1);
  }, [count, setCount]);
  return (
    <Button variant="contained" onClick={handleClick}>
      -
    </Button>
  );
}
