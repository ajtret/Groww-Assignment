import React , { useEffect, useState }from 'react'
import '../sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import {addFav,removeFav} from "../actions/index"
import {useDispatch} from "react-redux"
import axios from "axios"
import Loading from '../Loading';


function Navbar() {
    const [city,setCity]= useState("MUMBAI")
    const [option,setOption]= useState("Catogry")
    const [List,setList] = useState([]) 
    const [data,setData] = useState(null) 
    const [page,setPage] = useState(0) 
    const [rowsPerPage,setRowsPerPage] = useState(10) 
    const dispatch=useDispatch()
    
    const tabledata = async() =>{
            const res=await axios.get(`https://vast-shore-74260.herokuapp.com/banks?city=${city}`)
            setList(res.data)
    }

    

    useEffect(() => {
        tabledata()
    },[city])


    function getData(e){
        setData(e.target.value)

    }
    let newArr=List
    console.log(newArr)
   
    const onChangePage=(event, nextPage) =>{
        setPage(nextPage)
    }

    const onChangeRowsPerPage =(event) => {
        setRowsPerPage(event.target.value)
    }
  
    return (
        <div>
        <div >
            
            <div className="rest">
            <select 
                className="aj1"
                value={city}
                onChange={(e) =>{
                    const selectedcity=e.target.value
                    setCity(selectedcity)
                }}
                >
                    <option value="MUMBAI">MUMBAI</option>
                    <option value="JAIPUR">JAIPUR</option>
                    <option value="CHENNAI">CHENNAI</option>
                    <option value="KANPUR">KANPUR</option>
                    <option value="DELHI">DELHI</option>
                </select>
                <select 
                className="aj1"
                value={option}
                onChange={(e) =>{
                    const selectedoption=e.target.value
                    setOption(selectedoption)
                }}
                >
                    <option value="Catogry">Catogry</option>
                    <option value="ifsc">BANK_NAME</option>
                    <option value="branch">BRANCH</option>
                    <option value="bank_name">IFSC</option>
                
                </select>
            <input type="text" placeholder="Search" onChange={getData}/>
            </div>
            
        </div>
        <div>
        <TableContainer component={Paper}>
        <Table  aria-label="simple table">
        <TableHead>
        <TableRow>
      <TableCell>BANK NAME</TableCell>
      <TableCell>CITY</TableCell>
      <TableCell>IFSC</TableCell>
      <TableCell>Branch</TableCell>
      <TableCell>BANK ID</TableCell>
      <TableCell>ADDRESS</TableCell>
      <TableCell>Add_To_Favourite</TableCell>
      <TableCell>Remove_Favourite</TableCell>
      <TableCell>See Details</TableCell>
    </TableRow>
    </TableHead>
    <TableBody>
      
      {
          newArr && newArr.length >0 ?
          newArr
          .slice(page * rowsPerPage,page * rowsPerPage + rowsPerPage )
          .map(lst => 
            
            <TableRow>

            <TableCell>{lst.bank_name}</TableCell>
            <TableCell>{lst.city}</TableCell>
            <TableCell>{lst.ifsc}</TableCell>
            <TableCell>{lst.branch}</TableCell>
            <TableCell>{lst.bank_id}</TableCell>
            <TableCell>{lst.address}</TableCell>
            <TableCell className="mj6" onClick={() =>{
                dispatch(addFav(lst))
                alert("Added to Favourites")
            }}> Click Here </TableCell>
            <TableCell className="mj6" onClick={() =>{
                dispatch(removeFav(lst))
                alert("Removed from Favourites")
            }}> Click Here </TableCell>

            <TableCell> <a href={'/bank-details/'+lst.ifsc}> Click Here </a></TableCell>
    
            </TableRow>
         
          ) : <Loading/>
      }
     
      </TableBody>
 
</Table>
<TablePagination
    rowsPerPageOptions={[5,10,15,20,50]}
    count={newArr.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onChangePage={onChangePage}
    onChangeRowsPerPage={onChangeRowsPerPage}
    />
</TableContainer>
        </div>
        </div>
    )
  
}

export default Navbar
