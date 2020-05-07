import React from 'react';
import MainHelper from '../src/Services/MainHelper';
import MainServices from '../src/Services/MainServices';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import TableCell from '@material-ui/core/TableCell';
import SnackBar from '../src/Components/Snackbar';
import EditModel from './Components/EditUser';
import Loader from './Components/Loader'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import UserModel from '../src/Components/User'
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import '../src/assests/css/CrudStyles.css'
import CreateUser from './Components/CreateUser';
export default class Crud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      cellName: ['Id', 'Name', 'State', 'Created', 'Updated', 'Type', 'Actions'],
      snakOpen: false,
      snakDesc: "Message to be displayed",
      id: "Used for Checking ",
      editUser: "bfbdb982-6017-b232-d125-46662b021b25",
      oneUser:'bfbdb982-6017-b232-d125-46662b021b25',
      modalButton: false,
      createButton:false,
      userButton:false,
      editUserCount:0,
      createUserCount:0,
    };
    this.getAllUsers = this.getAllUsers.bind(this);
    this.resetData = this.resetData.bind(this);
    this.deleteUserfromId = this.deleteUserfromId.bind(this)
    this.child = React.createRef();
    this.createUser=this.createUser.bind(this)
    this.closeCreateUser=this.closeCreateUser.bind(this)


  }
  getAllUsers() {

    MainServices.getAllUsers().then(response => {
      this.setState({ users: response.data })
    })
  }
  resetData() {
    this.setState({ user: [] })
    console.log("Cleared", this.state.users)

  }
  openSnak(desc) {
    this.setState({ snakOpen: true })
    this.setState({ snakDesc: desc })
  }
  closeSnak = () => {
    this.setState({ snakOpen: false })
  }
  componentDidMount() {
    this.getAllUsers();
  }
  handleEdit(id) {
    this.setState({ editUser: id })
    this.setState({ modalButton: true })
    this.setState({editUserCount:this.state.editUserCount+1})
  }
  handleOneUser(id){
    this.setState({oneUser:id})
    this.setState({userButton:true})
  }
  createUser(){
    this.setState({createButton:true});
    this.setState({createUserCount:this.state.createUserCount+1})
  }
  closeCreateUser(){
    this.setState({createButton:false});
  }
  deleteUserfromId(id) {

    this.openSnak("User id with " + id + " has been Deleted Succesfully ")
    this.setState({ users: MainHelper.deleteUserFromState(id, this.state.users) })

  }
  render() {


    return (

      <div>
        <Container >
          <TableContainer component={Paper}>
          <Grid container spacing={3} direction="row" justify="flex-end" alignItems="center" >
            <Grid item xs={6} sm={3}>
              <Paper className='paper'>   <Button size="small" color="primary" onClick={this.createUser}>Create User Data</Button></Paper>
            </Grid>
          </Grid>
            <Table className="table" aria-label="simple table">
              <TableHead>
                <TableRow>
                  {this.state.cellName.map((name, index) =>

                    <TableCell key={index}>{name}</TableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.users.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row" >
                     <Button onClick={()=>this.handleOneUser(row.id)}>{row.id}</Button> 
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.state}</TableCell>
                    <TableCell align="right">{row.created}</TableCell>
                    <TableCell align="right">{row.updated}</TableCell>
                    <TableCell align="right" >{row.type}</TableCell>
                    <TableCell>
                      <Tooltip title="Delete" onClick={() => this.deleteUserfromId(row.id)}>
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit" onClick={() => this.handleEdit(row.id)}>
                        <IconButton aria-label="Edit">
                          <CreateIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <br></br>
          <Grid container spacing={3} direction="row" justify="center" alignItems="center" >
            <Grid item xs={6} sm={3}>
              <Paper className="paper"> <Button onClick={this.getAllUsers}>Request New Data</Button></Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className='paper'>    <Button color="primary" onClick={this.resetData}>ClearAll Data</Button></Paper>
            </Grid>
          </Grid>
          <SnackBar show={this.state.snakOpen} closeSnak={this.closeSnak} snakType="warning" desc={this.state.snakDesc} />

          <EditModel user={this.state.editUser} count={this.state.editUserCount} Open={this.state.modalButton}></EditModel>
          <CreateUser   Open={this.state.createButton} count={this.state.createUserCount}  closeModel={this.closeCreateUser}> </CreateUser>
          <UserModel user={this.state.oneUser} Open={this.state.userButton}  ></UserModel>
        </Container>

<Loader></Loader>
      </div>
    )
  }
}
