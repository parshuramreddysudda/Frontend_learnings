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
import Model from './Components/Model';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import User from './Components/User';
import '../src/assests/css/CrudStyles.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
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
      modalButton: false,
    };
    this.getAllUsers = this.getAllUsers.bind(this);
    this.resetData = this.resetData.bind(this);
    this.deleteUserfromId = this.deleteUserfromId.bind(this)
    this.child = React.createRef();

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

  }

  deleteUserfromId(id) {

    this.openSnak("User id with " + id + " has been Deleted Succesfully ")
    this.setState({ users: MainHelper.deleteUserFromState(id, this.state.users) })

  }
  render() {


    return (

      <div>
        
        <Container >
        <Router>
          <TableContainer component={Paper}>
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
                      
                    <TableCell component="th" to={`${row.id}`} scope="row" >
                      {row.id}
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
          <Switch>
          <Route path="/:id" >
            <User />
          
          </Route>
        </Switch>
                </Router>
          <br></br>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <Paper className="paper"> <Button onClick={this.getAllUsers}>Request New Data</Button></Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className='paper'>    <Button color="primary" onClick={this.resetData}>ClearAll Data</Button></Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className='paper'>  <Button color="secondary">Secondary</Button></Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className='paper'>  <Button color="secondary">Secondary</Button></Paper>
            </Grid>
          </Grid>
          <SnackBar show={this.state.snakOpen} closeSnak={this.closeSnak} snakType="warning" desc={this.state.snakDesc} />

          <Model user={this.state.editUser} Open={this.state.modalButton}></Model>
        </Container>


      </div>
    )
  }
}
