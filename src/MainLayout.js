import React from "react";
import { Grid, Card } from "@material-ui/core";
import CardContainer from "./CardContainer";
//import CardContainer from './CardContainer'

export default function MainLayout() {
  return (
    <Grid container direction="row" justify="center" spacing={5}>
      <Grid item >
        <CardContainer></CardContainer>
      </Grid>
      <Grid item >
        <CardContainer></CardContainer>
      </Grid>
      <Grid item >
        <CardContainer></CardContainer>
      </Grid>
    </Grid>
  );
}
