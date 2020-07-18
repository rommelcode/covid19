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
  Container: {
    "display": "flex",
    "align-items": "center",
    "flex-direction": "column",
  },
});

export default withStyles(styles)(({ classes }) => (
  <Grid className={classes.Container} container>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
  </Grid>
));
