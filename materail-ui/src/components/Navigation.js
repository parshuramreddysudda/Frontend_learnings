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
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const style = makeStyles(theme => ({
    root: {
        width: 500,
        margin: 'auto',
        color: 'black',
        marginBottom: '10vh',
    },
    paper: {
        padding: '13px',
        textAlign: 'center',
    },
    textCen: {
        textAlign: 'center',
        color: 'inherit',
    },
    margin: {
        marginLeft: '2vh',
        marginRight: '2vh',
        marginBottom: '3vh',
    }
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

            <BottomNavigation value={value} onChange={handleChange} showLabels className={classes.root}>

                <Link to={"/Home"} className={classes.margin} >
                    <BottomNavigationAction color='primary' label="Home" value="recents" icon={<RestoreIcon />} >
                    </BottomNavigationAction> <Paper className={classes.paper}>Home</Paper></Link>


                <Link to={"/Elements"} className={classes.margin}>
                    <BottomNavigationAction label="ElementsPage" value="favorites" icon={<FavoriteIcon />} />
                    <Paper className={classes.paper}>Elements</Paper></Link>

                <Link to={"/Special"} className={classes.margin}>

                    <BottomNavigationAction label="SpecialElements" value="nearby" icon={<LocationOnIcon />} />
                    <Paper className={classes.paper}>Special</Paper></Link>

                <Link to={"/Text"} className={classes.margin}>

                    <BottomNavigationAction label="Text" value="folder" icon={<FolderIcon />} />
                    <Paper className={classes.paper}>No Action</Paper></Link>

            </BottomNavigation>




        </div>

    );
}

export default Index;
