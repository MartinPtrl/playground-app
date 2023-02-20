import React from "react";
import { PropDrillCard } from "./components/prop-drill/prop-drill-card";
import { ContextAndHooksCard } from "./components/context-and-hooks/context-and-hooks-card";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <PropDrillCard />
      <ContextAndHooksCard />
    </Box>
  );
}

export default App;
