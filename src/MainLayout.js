import React from "react";
import { Grid, Card } from "@material-ui/core";
import CardContainer from "./CardContainer";
//import CardContainer from './CardContainer'

export default function MainLayout() {
  return (
    <Grid container sm={12} justify="space-around">
      <Grid item sm={4}>
       one
        <CardContainer></CardContainer>
      </Grid>
      <Grid item sm={4}>
        {/* <CardContainer></CardContainer> */}
      </Grid>
      <Grid item sm={4}>
        {/* <CardContainer></CardContainer> */}
      </Grid>
    </Grid>
  );
}
