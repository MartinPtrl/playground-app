import React from "react";

import { Box, Typography } from "@mui/material";
import { ContextAndHooksChip } from "./context-and-hooks-chip";
import { ContextAndHooksCount } from "./context-and-hooks-count";
import { ContextAndHooksDecButton } from "./context-and-hooks-dec-button";
import { ContextAndHooksIncButton } from "./context-and-hooks-inc-button";
import { CountProvider } from "./count-context";
import { BigBox } from "../big-box";
import { DummyButton } from "../dummy-button";

export function ContextAndHooksCard() {
  return (
    <CountProvider>
      <BigBox>
        <Typography variant="h2">Context example</Typography>
        <Box display="flex" flexDirection="row" gap={4}>
          <ContextAndHooksCount />
          <ContextAndHooksChip />
        </Box>
        <Box display="flex" flexDirection="row" gap={4} paddingTop={2}>
          <ContextAndHooksDecButton />
          <ContextAndHooksIncButton />
          <DummyButton />
        </Box>
      </BigBox>
    </CountProvider>
  );
}
