import React from 'react';
import {useSelector} from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import "./sidebar.css"


function Favourites() {
    const list=useSelector((state) => state.favReducers.list)
    

    return (
        <div>
            <h1 className="aj2">Favourites...</h1>
            <br></br>
             <TableContainer component={Paper}>
        <Table  aria-label="simple table">
        <TableHead>
        <TableRow>
      <TableCell>ifsc</TableCell>
      <TableCell>Bank_ID</TableCell>
      <TableCell>Branch</TableCell>
      <TableCell>Address</TableCell>
      <TableCell>Bank Name</TableCell>
    </TableRow>
    </TableHead>
    <TableBody>
      
      {
          list.map(lst => 
            
            <TableRow>

            <TableCell>{lst.data.ifsc}</TableCell>
            <TableCell>{lst.data.bank_id}</TableCell>
            <TableCell>{lst.data.branch}</TableCell>
            <TableCell>{lst.data.address}</TableCell>
            <TableCell>{lst.data.bank_name}</TableCell>
            </TableRow>
          ) 
      }
     
      </TableBody>
         </Table>
</TableContainer>

                <Link to='/all-banks' >
                <h3 className="mj4">Home Page</h3>
                </Link>
        </div>
    )
}

export default Favourites
