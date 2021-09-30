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
import Movable from "../Movable"
export default function App() {
  return (
    <div style={{margin: "0 auto", width: "800px"}}>
         <Movable/>
      <Typography variant="h5" align="center">Edit Your Text</Typography>
      <Editor
          resolver={{Card, Button, Text, CardTop, CardBottom}}
        > 

      <Grid className="body-con" container spacing={3} style={{paddingTop: "10px"}}>
        <Topbar />
        <Grid item xs>
        <Frame> 
  <Element is={Container}  background="" className="body-con" canvas>
   
   
  </Element>
</Frame>
        </Grid>
        <Grid item xs={2.3}>
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
