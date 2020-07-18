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
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
     
    </Grid>
  );
}
