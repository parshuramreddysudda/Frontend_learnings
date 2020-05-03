import React from 'react';
import MainHelper from '../src/Services/MainHelper';
import MainServices from '../src/Services/MainServices';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';  
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import TableCell from '@material-ui/core/TableCell';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import '../src/assests/css/CrudStyles.css'
export default class Crud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      cellName: ['Id', 'Name', 'State', 'Created', 'Updated', 'Type', 'Actions']

    };
    this.getAllUsers = this.getAllUsers.bind(this);
    this.resetData = this.resetData.bind(this);
    this.deleteUserfromId=this.deleteUserfromId.bind(this)

  }
  getAllUsers() {

    MainServices.getAllUsers().then(response => {
      this.setState({ users: response.data })
    })
  }
  resetData(){
    this.setState({user:[]})
    console.log("Cleared",this.state.users)

  }
  componentDidMount() {
    this.getAllUsers();
  }
  deleteUserfromId(id){
   this.setState({users:MainHelper.deleteUserFromState(id,this.state.users)})
  }
  render() {


    return (

      <div>
        <Container >


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
                    <TableCell component="th" scope="row">
                      {row.id}
id              </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.state}</TableCell>
                    <TableCell align="right">{row.created}</TableCell>
                    <TableCell align="right">{row.updated}</TableCell>
                    <TableCell align="right" >{row.type}</TableCell>
                    <TableCell>
                      <Tooltip title="Delete"  onClick={()=>this.deleteUserfromId(row.id)}>
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit">
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
        
        
        </Container>
      </div>
    )
  }
}
