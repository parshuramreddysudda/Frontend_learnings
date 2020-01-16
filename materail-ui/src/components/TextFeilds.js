import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navigation from '../components/Navigation';

const style = makeStyles(theme => ({
  root: {
    // margin: 'auto',
    color:'white',
  },
  paper: {
    padding: '16px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function Index() {

  const classes = style();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue, value) => {
    console.log(value);
    setValue(newValue);
  };

  return (

    <div >
   <Navigation></Navigation>


    <div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
      <Paper className={classes.paper}>Full Col with XS 12 MD 12 </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>Full Col with XS 12 SM 6</Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>Full Col with XS 12 SM 6</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Paper className={classes.paper}>Full Col with XS 12 SM 6 MD4</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Paper className={classes.paper}>Full Col with XS 12 SM 6 MD 4</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Paper className={classes.paper}>Full Col with XS 12 SM 6 MD4</Paper>
      </Grid>
  
        <Grid item md={4} xs={6}>
          <Paper className={classes.paper}>Md a-4 xs={4}</Paper>
        </Grid>
        <Grid item md={4} xs={6}>
        <Paper className={classes.paper}>Md a-4 xs={4}</Paper>
        </Grid>
        <Grid item md={4} xs={6}>
        <Paper className={classes.paper}>Md a-4 xs={4}</Paper>
        </Grid>
      
      <Grid container spacing={3}>
        <Grid item md={3} sm={6}  >
          <Paper className={classes.paper}>Md a-4 xs={4}</Paper>
        </Grid>
        <Grid item md={3} sm={6}  >
        <Paper className={classes.paper}>Md a-4 xs={4}</Paper>
        </Grid>
        <Grid item md={3} sm={6}  >
        <Paper className={classes.paper}>Md a-4 xs={4}</Paper>
        </Grid>
        <Grid item md={3} sm={6}  >
        <Paper className={classes.paper}>Md a-4 xs={4}</Paper>
        </Grid>
      </Grid>
    </Grid>


    </div>


    </div>

  );
}

export default Index;
