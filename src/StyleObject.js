import React, { Fragment } from "react";
//import { Grid, Paper, Typography, List, IconButton } from "material-ui";

import { withStyles} from "@material-ui/core/styles";


const styles = () => ({
  Paper: {
    padding: 2,
    "font-family": "Impact, Charcoal, sans-serif",
    "font-size": 22,
    marginTop: 15,
    height: 200,
    overflowY: "auto",
    "border-bottom": "solid red 2px"
  }
});

export default withStyles(styles)(({ classes }) => (
  <div className={classes.Paper}>haha</div>
));
