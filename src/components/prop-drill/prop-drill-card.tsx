import React from "react";

import { Box, Typography } from "@mui/material";
import { PropDrillChip } from "./prop-drill-chip";
import { PropDrillCount } from "./prop-drill-count";
import { PropDrillDecButton } from "./prop-drill-dec-button";
import { PropDrillIncButton } from "./prop-drill-inc-button";
import { BigBox } from "../big-box";
import { DummyButton } from "../dummy-button";

export function PropDrillCard() {
  const [count, setCount] = React.useState(0);
  return (
    <BigBox>
      <Typography variant="h2">Prop-Drill example</Typography>
      <Box display="flex" flexDirection="row" gap={4}>
        <PropDrillCount count={count} />
        <PropDrillChip count={count} />
      </Box>
      <Box display="flex" flexDirection="row" gap={4} paddingTop={2}>
        <PropDrillDecButton count={count} setCount={setCount} />
        <PropDrillIncButton count={count} setCount={setCount} />
        <DummyButton />
      </Box>
    </BigBox>
  );
}
