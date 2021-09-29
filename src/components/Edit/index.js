// pages/index.js

import React from 'react';
import {Typography, Paper, Grid} from '@material-ui/core';

import { Toolbox } from '../users/Toolbox';
import { SettingsPanel } from '../users/SettingsPanel';
import { Topbar } from '../users/Toolbar';

import { Container } from '../users/Container';
import { Button } from '../users/Button';
import { Card ,CardTop,CardBottom} from '../users/Card';
import { Text } from '../users/Text';
import {Editor, Frame, Element} from "@craftjs/core";
export default function App() {
  return (
    <div style={{margin: "0 auto", width: "800px"}}>
      <Typography variant="h5" align="center">A super simple page editor</Typography>
      <Editor
          resolver={{Card, Button, Text, CardTop, CardBottom}}
        > 

      <Grid container spacing={3} style={{paddingTop: "10px"}}>
        <Topbar />
        <Grid item xs>
        <Frame>
  <Element is={Container} padding={5} background="#eee" canvas>
    <Card /> 
    <Button size="small" variant="outlined">Click</Button> 
    <Text size="small" text="Hi world!" />
    <Element is={Container} padding={2} background="#999" canvas> 
       <Text size="small" text="It's me again!" /> 
    </Element>
  </Element>
</Frame>
        </Grid>
        <Grid item xs={3}>
          <Paper>
              <Toolbox />
              <SettingsPanel />
          </Paper>          
        </Grid>
      </Grid>
      </Editor>
    </div>
  );
}
