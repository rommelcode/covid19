import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

export default function CardContainer() {
  return (
    <Grid container justify="center" spacing={3}>
      <Grid item lg={3}>
        <CardContent>
          <Typography>Infected</Typography>
        </CardContent>

        <CardContent>
          <Typography>Deaths</Typography>
        </CardContent>

        <CardContent>
          <Typography>Recovered</Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
}
