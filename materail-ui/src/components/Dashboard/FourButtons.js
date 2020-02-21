import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';

const useStyles = makeStyles({
  root: {
    width: 500,
    margin:"auto",
    backgroundColor:'#f4f0f0',
  },
});

export default function ButtonNavigation({fl1,fl2,fl3,fl4,fl5}) {
  console.log("data is Four"+fl1);
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label={fl1} value="recents" icon={<RestoreIcon />} />

      <BottomNavigationAction label={fl2} value="favorites" icon={<FavoriteIcon />} />

      <BottomNavigationAction label={fl3} value="nearby" icon={<LocationOnIcon />} />

      <BottomNavigationAction label={fl4} value="nearb" icon={<FolderIcon />} />

      <BottomNavigationAction label={fl5} value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}