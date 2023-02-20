import { Chip } from "@mui/material";
import React from "react";

export function PropDrillChip({count}:{count: number}): React.ReactElement {
    return <Chip label={count > 0 ? "Positive" : "Negative"} color={count > 0 ? "success" : "error"}/>;
}