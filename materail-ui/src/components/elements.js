import React from 'react'
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Grid, Paper } from '@material-ui/core';


const usestyles= makeStyles(theme =>({
 
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      paper:{
        padding:'16px;'
      }
}));
export default function ContainedButtons() {
    const classes = usestyles();
  
    return (

      <div >

  
      <Navigation></Navigation>


      <div className={classes.root}>
  
      <Grid>


    <Paper className={classes.paper}> Buttons Introduction</Paper>
        <Button  color="primary">
          No Variant
        </Button>
        <Button variant="contained" color="secondary">
          Filled Button
        </Button>
        <Button variant="contained" disabled>
          Disabled Button
        </Button>
        <Button variant="outlined" color='primary'>
          Outline button
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link Button
        </Button>
        </Grid>
      </div>
      </div>
    );
  }