import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import rows from '../../mock-data.json';
import { Highlighter } from '../highlighter';
import { useContext } from 'react';
import { AppContext } from '../../app';

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});



export default function DatabaseDashboard() {
  const classes = useStyles();
  const {searchKeyword} = useContext(AppContext);
  const filteredRows = searchKeyword ? rows.filter(r => r.first_name.includes(searchKeyword)): rows;
  return (
    <div className="database-dashboard">
      <div>
        <h3>Oracle Database Version Info</h3>
        <div>Oracle database 64 bit production info</div>
        <br />
        <br />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell align="left">Last Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Gender</TableCell>
                <TableCell align="left">IP Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row: any) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    <Highlighter searchTerm={searchKeyword}>{row.first_name}</Highlighter>
                  </TableCell>
                  <TableCell align="left">{row.last_name}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.gender}</TableCell>
                  <TableCell align="left">{row.ip_address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br /><br /><br />
      </div>
    </div>
  )
}
