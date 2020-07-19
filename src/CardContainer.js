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
  Paper: {
    padding: 12,
    "font-family": "Impact, Charcoal, sans-serif",
    "font-size": 22,
    marginTop: 15,
    height: 200,
    overflowY: "auto",
    "border-bottom": "solid green 2px",
  },
  Container: {
    display: "flex",
    justify: "flex-end",
    "direction": "column",
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
  <Grid className={classes.Paper} container direction="column" justify="flex-end" spacing={12}>
   <div>one</div>
   <div>two</div>
   <div>three</div>
  </Grid>
));
