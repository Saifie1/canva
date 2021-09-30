// components/Topbar.js
import React from "react";
import { Box, FormControlLabel, Switch, Grid, Button as MaterialButton } from "@material-ui/core";
import { useEditor } from "@craftjs/core";

export const Topbar = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled
  }));

  return (
    <Box  bgcolor="#777">
      <Grid   container alignItems="center">
        <Grid item xs>
        
        </Grid>
      
      </Grid>
    </Box>
  )
};