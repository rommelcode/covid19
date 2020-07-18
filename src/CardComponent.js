import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import styles from './Card.css';

import cx from 'classnames';


const useStyles = makeStyles({
  root: {
    "border-style": "dotted"
  },

  bullet: {
    display: "inline-block",
    margin: "0 22px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

});

export default function CardComponent() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root} variant="outlined" >
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Infected
        </Typography>
        <Typography variant="h4">13,000,000</Typography>
        <Typography className={classes.pos} color="textSecondary">
          Sat Jul 18 2020
        </Typography>
        <Typography variant="body2" component="p">
          Number of cases of covid-19
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
