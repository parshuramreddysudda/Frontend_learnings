import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary
  }
}));
const StyledTableCell = withStyles(theme => ({
  head: {
   fontStyle:'bold',
  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.common.white,
    },
  },
}))(TableRow);

function handleclick(){
  alert('This click');
  }

export default function FullWidthGrid({fl1,cd1,fl2,cd2,fl3,cd3,fl4,cd4,fl5,cd5,triggerParent}) {
  

  
  const classes = useStyles();

  return (
    <div>
      
          <TableContainer component={Paper}>
         
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Flight Name</StyledTableCell>
            <StyledTableCell align="right">Flight Code</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           
        <StyledTableRow onClick={triggerParent}>
          
              <StyledTableCell component="th" scope="row">
                {fl1}
              </StyledTableCell>
              <StyledTableCell align="right"> {cd1}</StyledTableCell>

        </StyledTableRow>
           
            <StyledTableRow >
            
              <StyledTableCell component="th" scope="row">
                {fl2}
              </StyledTableCell>
              <StyledTableCell align="right"> {cd2}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {fl3}
              </StyledTableCell>
              <StyledTableCell align="right"> {cd3}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {fl4}
              </StyledTableCell>
              <StyledTableCell align="right"> {cd4}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {fl5}
              </StyledTableCell>
              <StyledTableCell align="right"> {cd5}</StyledTableCell>
            </StyledTableRow>
            
         
        </TableBody>
      </Table>
    </TableContainer>
           
       
     
    </div>
  );
}
