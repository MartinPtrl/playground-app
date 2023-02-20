import { Button } from "@mui/material";
import React from "react";

export function PropDrillIncButton({
  count,
  setCount,
}: {
  count: number;
  setCount: (count: number) => void;
}): React.ReactElement {
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
