import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  FormRow,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CardComponent from "./CardComponent";

const styles = () => ({
  Main: {
    margin: "50px 0",
  },
  Container: {
    display: "flex",
    justify: "flex-end",
    direction: "column",
    margin: 10,
  },
});

// const styles = () => ({
//   Container: {
//     display: "flex",
//     justify: "center",
//     "flex-direction": "row",

//     margin:10
//   },
// });

export default withStyles(styles)(({ classes }) => (
  <Grid
    className={classes.Main}
    container
    direction="row"
    justify="center"
    spacing={2}
  >
    <Grid item>
      <CardComponent></CardComponent>
    </Grid>
    <Grid item>
      <CardComponent></CardComponent>
    </Grid>
    <Grid item>
      <CardComponent></CardComponent>
    </Grid>
  </Grid>
));
