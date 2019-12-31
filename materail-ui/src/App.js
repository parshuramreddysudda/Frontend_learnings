import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

const style=makeStyles(theme=>({
  root:{
    width:500,
    margin:'auto',
    position: 'absolute',
	top:0,
	bottom: 0,
	left: 0,
	right: 0,
  },
  paper: {
    padding: '16px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },


}));

// class app extends React.Component{
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        heading:'Name Changes'
//     };
//   }
  
// }
function Index() {
 
  const classes = style();
  const [value, setValue] = React.useState(0);

  const handleChange=(event,newValue,value)=>{
   console.log(value);
    setValue(newValue);
 };
 
  return (

    <div >
 
    <Paper style={{marginTop:'2vh',marginBottom:'1vh'}}  className={classes.paper} ><h2 >This is the Navigation bar </h2></Paper>
    <Paper className={classes.paper}><p>This includes Routing Configuration for Futher working</p></Paper>
 
      <BottomNavigation value={value}  onChange={handleChange} showLabels className={classes.root}>


      <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} >as</BottomNavigationAction>
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />

      </BottomNavigation>
        
    </div>

  );
}

export default Index;
