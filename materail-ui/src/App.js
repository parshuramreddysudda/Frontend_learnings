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
  constructor(props){
    super(props);
    this.state = {
      name: '',

      flightRes: [],
      selectFlight:'NonSelected',
    }
  };

  flightFive=()=>{
  
    this.setState({selectFlight:"as"})

  }
  flightTwo=()=>{
    this.setState({selectFlight:"Two"});
  }
  flightFour=()=>{
    this.setState({selectFlight:"Four"});
  }
  flightOne=()=>{
    this.setState({selectFlight:"One"});
  }
  flightThre=()=>{
    this.setState({selectFlight:"Three"});
  }

  
  componentDidMount() {
    axios.get(`http://127.0.0.1:4010/flightLists`)
    .then(res => {
      // console.log(res.data);
      const flightRes = res.data;
      
      this.setState({ flightRes });
      // console.log(this.state.flightRes);
    })
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
      backgroundColor:'black',
      color:"white",
    }
   
    const black={
      backgroundColor:'#f4f0f0',
    }
    const darkTheme={
      backgroundColor:'#f4f0f0',
      color:"white",
    }    
    const flightResult=this.state.flightRes;

    return (

      <div>
        <Navigation onLoad={this.handleLoad}></Navigation>
        <div >
          <Grid container spacing={3} >
            <Grid item md={3} xs={4}>
            <Paper style={Main}>Flights </Paper>
              <Paper className={paper}>
                <Table fl1={flightResult.flight1} cd1={flightResult.codeNumber1} fl2={flightResult.flight2} cd2={flightResult.codeNumber2} fl3={flightResult.flight3} 
                  cd3={flightResult.codeNumber3} fl4={flightResult.flight4} cd4={flightResult.codeNumber4} fl5={flightResult.flight5} cd5={flightResult.codeNumber5} trigOne={this.flightOne} trigTwo={this.flightTwo} trigThree={this.flightThre} trigFour={this.flightFour} trigFive={this.flightFive}  ></Table>
              </Paper>
            </Grid>
            <Grid item md={8} xs={8}>
              <Grid item md={12} xs={12}>
                <Paper style={head}>
                  {" "}
                  Flight : {this.state.selectFlight}
          </Paper>
              </Grid>
              <Grid item md={12} xs={12}>
                <Paper>
                  <div style={black}>
                  <FourButtons fl1={flightResult.flight1}  fl2={flightResult.flight2} fl3={flightResult.flight3}
    fl4={flightResult.flight4} fl5={flightResult.flight5}/>
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
