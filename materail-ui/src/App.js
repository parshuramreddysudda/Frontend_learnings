import React from 'react';
import axios from 'axios';
import Card from '../src/components/Card';
import Navigation from '../src/components/Navigation';
import Grid from '@material-ui/core/Grid';
import Table from './components/Dashboard/ColourTable';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import color from '@material-ui/core/colors/amber';
import FourButtons from '../src/components/Dashboard/FourButtons';
import ButtonView from '../src/components/Dashboard/ButtonVIew';


export default class PersonList extends React.Component {

  state = {
    name: '',
    result: [],
  }
  render() {
    const paper = {
      padding: "1em",
      textAlign: "left",
    };
    const head = {
      fontSize: '17px',
      padding: "1em",
      textAlign: "left",
      backgroundColor: 'black',
      color: 'white',
      fontStyle: 'inherit'
    }
    const Main ={
      padding:'1em',
      fontSize:'19px',
    }
   
    const black={
      backgroundColor:'#f4f0f0',
    }


    return (

      <div >

        <Navigation></Navigation>
        <div >
          <Grid container spacing={3} >
            <Grid item md={3} xs={4}>
            <Paper variant="outlined">hdsxcvbnkl</Paper>
              <Paper className={paper}>
                <Table></Table>

              </Paper>
            </Grid>
            <Grid item md={8} xs={8}>

              <Grid item md={12} xs={12}>
                <Paper style={head}>
                  {" "}
                  Name of Dashboard
          </Paper>
              </Grid>

              <Grid item md={12} xs={12}>
                <Paper>
                  <div style={black}>

                  <FourButtons  ></FourButtons>
                  </div>
               
                  <ButtonView></ButtonView>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>



      </div>
    )
  }
}
