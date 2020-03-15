import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paper from '@material-ui/core/Paper';
import '../src/App.css';
import Grid from '@material-ui/core/Grid';
import Card from '../src/components/Card';
import Circle from 'react-circle';



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
      paddingBottom: '1em',
      paddingTop: '1em',
    }
    const prize = {
      padding: "10px",
      fontSize: '40px',
    }

    const main = {
      padding: "1em",
      fontSize:"20px",
    }

    return (

      <div className='darkBack' >
        <Paper style={paper}>Online Retail Dashboard</Paper>
        <Paper className='darkBack' style={paper}>Summary </Paper>
        <div className=' container-fluid pr-5 pl-5 section' style={smal}>
          <div className='row'>
            <div className='col-md-3 col-lg-3'>
              <Paper className="darkCard">
                <div className='card-title cardTitleDark' style={main}>
                  Total Revenue
                </div>
                <div className='card-text' style={prize}>
                  <icon style={{ fontSize: '27px' }}>$</icon> asdas
                </div>
              </Paper>
            </div>
            <div className='col-md-3'>
              <Paper className="darkCard">
                <div className='card-title cardTitleDark' style={main}>
                  Total Revenue
                </div>
                <div className='card-text' style={prize}>
                  <icon style={{ fontSize: '27px' }}>$</icon> asdas
                </div>
              </Paper>
            </div>
            <div className='col-md-3'>
              <Paper className="darkCard">
                <div className='card-title cardTitleDark' style={main}>
                  Total Revenue
                </div>
                <div className='card-text' style={prize}>
                  <icon style={{ fontSize: '27px' }}>$</icon> asdas
                </div>
              </Paper>
            </div>
            <div className='col-md-3'>
              <Paper className="darkCard">
                <div className='card-title cardTitleDark' style={main}>
                  Total Revenue
                </div>
                <div className='card-text' style={prize}>
                  <icon style={{ fontSize: '27px' }}>$</icon> asdas
                </div>
              </Paper>
            </div>
          </div>

        </div>

        <div className=' container-fluid pr-5 pl-5 section' style={smal}>

          <div className='row'>

            <div className='col-md-3 col-lg-3 '>
              <Paper className="darkCard fullHeight">
                <div className='card-title cardTitleDark' style={main}>
                  Total Revenue
                </div>
                <div className='card-text' style={prize}>
                  <icon style={{ fontSize: '27px' }}>$</icon> asdas
                </div>
              </Paper>
            </div>
            <div className=' col-md-9 col-lg-9'>
           
<Paper className='darkCard' >
<div className='row  text-center' style={smal}>
                  <div className='col-sm-4'>
                <div className='card-title cardTitleDark' style={main}>
                  Purchase rate
                </div>
                <div className='card-text' style={prize}>
                  <Circle animate={true} animationDuration="1s" lineWidth={50}  roundedStroke={true} textColor="white" bgColor="#161e29" progressColor="#386CBA" progress={85}></Circle>
                </div>
              </div>
              <div className='col-sm-4 borderLR'>
                <div className='card-title cardTitleDark' style={main}>
                 Checkout Price
                </div>
                <div className='card-text' style={prize}>
                <Circle animate={true} animationDuration="1s" lineWidth={50}  roundedStroke={true} textColor="white" bgColor="#161e29" progressColor="#41B7C4" progress={35}></Circle>
                </div>
              </div>
              <div className='col-sm-4'>
                <div className='card-title cardTitleDark' style={main}>
                Abandoned Cart Rate
                </div>
                <div className='card-text' style={prize}>
                <Circle animate={true} animationDuration="1s" lineWidth={50}  roundedStroke={true} textColor="white" bgColor="#161e29" progressColor="#EDF9B0" progress={35}></Circle>
                </div>
              </div>
              </div>
              </Paper>
              
            </div>


          </div>
        </div>
      </div>
    )
  }

}