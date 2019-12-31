import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const style=makeStyles({
  root:{
    width:500,
  }
})


function Index() {
  const classes = style();
  const [value, setValue] = React.useState(0);
  return (

    <div >

      <BottomNavigation>
         




      </BottomNavigation>
        
    </div>

  );
}

export default Index;
