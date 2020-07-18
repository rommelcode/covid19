import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  FormRow,
} from "@material-ui/core";
import styles from "./CardContainer.css";
import CardComponent from "./CardComponent";

export default function CardContainer() {
  return (
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={3}>
        <CardComponent></CardComponent>
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <CardComponent></CardComponent>
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <CardComponent></CardComponent>
      </Grid>
    </Grid>
  );
}
