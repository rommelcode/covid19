import React from 'react';
import { Grid } from '@material-ui/core';

export default function MainLayout() {
    return (
        <Grid container spacing={2} justify="center">
            <Grid item>one</Grid>
            <Grid item>two</Grid>
            <Grid item>three</Grid>
          
        </Grid>
    )
}
