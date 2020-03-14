import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paper from '@material-ui/core/Paper';
import '../src/App.css';
import Grid from '@material-ui/core/Grid';
import Card from '../src/components/Card';



export default class Index extends React.Component {

  constructor(props) {
    super(props);


  }

  render() {

    const paper = {
      padding: '1em',
      textAlign: 'left',
      fontStyle: 'bold',
      fontWeight: '700',
      fontSize: 'larger',
    };

    const smal = {
      marginTop: '1em',
      marginBottom: '1em',
    }
    const prize={
      padding: "10px",
      fontSize:'40px',
    }

    const main = {
      padding: "1em",
    }

    return (

      <div >
        <Paper style={paper}>Online Retail Dashboard</Paper>
        <Paper className='black' style={paper}>Summary </Paper>
        <div className=' container section' style={smal}>
          <div className='row'>

            <div className='col-md-3'>

              <Paper>
                <div className='card-title' style={main}>
                  Total Revenue
                </div>
                <div className='card-title' style={prize}>
                   <icon style={{fontSize:'27px'}}>$</icon> asdas
                </div>
                
              </Paper>
              <div className='card'>

                <div className='card-title'>
                  asdas
                  </div>
                <p className='card-text'> asdasd</p>

              </div>
            </div>
            <div className='col-md-3'>
              asd
              </div>
            <div className='col-md-3'>
              asd
              </div>
            <div className='col-md-3'>
              asd
              </div>


          </div>

        </div>
      </div>
    )
  }

}