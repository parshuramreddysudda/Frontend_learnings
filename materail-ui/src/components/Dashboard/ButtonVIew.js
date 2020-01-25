import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(date, time, source, severity, message) {
  return { date, time, source, severity, message };
}

const rows = [
  createData("DATE1", 159, 6.0, 24, 4.0),
  createData("Date2", 237, 9.0, 37, 4.3),
  createData("DAt3", 262, 16.0, 24, 6.0),
  createData("Date4", 305, 3.7, 67, 4.3),
  createData("Date5", 356, 16.0, 49, 3.9)
];

export default function SimpleTable() {
  const classes = useStyles();
  const bold={
      fontWeight: 'bold',
      color:'black',
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell style={bold}>DATE</TableCell>
            <TableCell style={bold} align="right">TIME</TableCell>
            <TableCell style={bold} align="right">SOURCE</TableCell>
            <TableCell style={bold} align="right">SEVERITY</TableCell>
            <TableCell style={bold} align="right">MESSAGE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.date}>
              <TableCell component="th" scope="row"  >
                {row.date}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.source}</TableCell>
              <TableCell align="right">{row.severity}</TableCell>
              <TableCell align="right">{row.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
