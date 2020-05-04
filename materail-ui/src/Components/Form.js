import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Form = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item xs>

                        <TextField id="outlined-basic Id" label="Id" variant="outlined" size="small" >
                        
                        </TextField>
                        

                    </Grid>
                    <Grid item xs>

                        <TextField id="outlined-basic name" label="Name" variant="outlined" size="small" />

                    </Grid>
                    <Grid item xs>

                        <TextField id="outlined-basic state" label="State" variant="outlined" size="small" />

                    </Grid>

                    <Grid item xs>

                        <TextField id="outlined-basic cretaed" label="Created" variant="outlined" size="small" />

                    </Grid>
                    <Grid item xs>

                        <TextField id="outlined-basic updated" label="Updated" variant="outlined" size="small" />

                    </Grid>

                    <Grid item xs>

                        <TextField id="outlined-basic type" label="Type" variant="outlined" size="small" />

                    </Grid>
                    <Grid item xs>

                        <TextField id="outlined-basic actions" label="Actions" variant="outlined" size="small" />

                    </Grid>


                </Grid>
            </Paper>
            <Button variant="contained" color="primary">
                Submit
     </Button>
        </div>
    );
}


export default Form;
