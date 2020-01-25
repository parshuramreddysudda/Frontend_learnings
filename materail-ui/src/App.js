import React from 'react';
import axios from 'axios';
import Card from '../src/components/Card';
import Navigation from '../src/components/Navigation';
import Grid from '@material-ui/core/Grid';

 
export default class PersonList extends React.Component {

  state = {
    name: '',
    result: [],
  }



  render() {

    return (

      <div >

        <Navigation></Navigation>
         
        <Grid container spacing={4}>


        </Grid >
 




      </div>
    )
  }
}
