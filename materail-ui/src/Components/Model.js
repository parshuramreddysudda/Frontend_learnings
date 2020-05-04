import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import Fade from '@material-ui/core/Fade';
import { Paper, Grid, Button } from '@material-ui/core';
import MainServices from '../Services/MainServices';

export default class Crud extends React.Component {

    //   console.log(users.users.id)

constructor(props){
    super(props);
    this.state={
        modelOpen:false,

    }
}

    handleOpen = () => {
       this.setState({modelOpen:true})
    };
    // console.log(props.user[0])

    handleClose = () => {
        this.setState({modelOpen:false})
    };

    handleChangeCreated = () => {

    }
    handleChangeName = () => {

    }
    handleChangeState = () => {

    }
    handleChangeType = () => {

    }
    handleChangeUpdated = () => {
    }



        render() {


            return (
                <div>
                    <button type="button" onClick={this.handleOpen}>
                        react-transition-group
      </button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                      
                        open={this.state.modelOpen}
                        onClose={this.handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Paper >
                            <Fade in={this.state.modelOpen}>

                                <Grid container spacing={3}>
                                    <Grid item md={4} >

                                        <TextField id="outlined-basic Id" label="Id" variant="outlined" name="id" size="small" onChange={this.handleChange} value={this.state.editUser.id} >

                                        </TextField>
                                    </Grid>
                                    <Grid item md={4}>

                                        <TextField id="outlined-basic name" label="Name" variant="outlined" size="small" onChange={this.handleChangeName} value={this.state.editUser.name} />

                                    </Grid>
                                    <Grid item md={4}>

                                        <TextField id="outlined-basic state" label="State" variant="outlined" size="small" onChange={this.handleChangeState} value={this.state.editUser.state} />

                                    </Grid>

                                    <Grid item md={4}>

                                        <TextField id="outlined-basic cretaed" label="Created" variant="outlined" size="small" onChange={this.handleChangeCreated} value={this.state.editUser.created} />

                                    </Grid>
                                    <Grid item md={4}>

                                        <TextField id="outlined-basic updated" label="Updated" variant="outlined" size="small" onChange={this.handleChangeUpdated} value={this.state.editUser.updated} />

                                    </Grid>

                                    <Grid item md={4}>

                                        <TextField id="outlined-basic type" label="Type" variant="outlined" size="small" onChange={this.handleChangeType} value={this.state.editUser.type} />

                                    </Grid>

                                </Grid>

                            </Fade>
                            <Button>Click me </Button>
                        </Paper>
                    </Modal>

                </div>
            );
        }
    }
// const user=[
//     {id:"aslkjhgfdd",name:"as",state:"asd",created:"asd",updated:"asd",type:"ahsd"}
//   ];
// const [id,setId]=React.useState(props.user[0].id)
// console.log(id+"Id is")
// const [name,setName]=React.useState(props.user[0].name)
// const [state,setState]=React.useState(props.user[0].state)
// const [create,setCreate]=React.useState(props.user[0].created)
// const [update,setUpdate]=React.useState(props.user[0].updated)
// const [type,setType]=React.useState(props.user[0].type)

// const handleId=event=>{
//     console.log(event.target.value)
//     setId({id: event.target.value})
// }
