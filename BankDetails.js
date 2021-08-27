import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";

function BankDetails() {
    const {ifsc} = useParams()
    const [List,setList] = useState([]) 
    useEffect(() => {
        fetch(`https://vast-shore-74260.herokuapp.com/bank?ifsc=${ifsc}`)
            .then(response => response.json())
            .then(result => setList(result))
            .catch(error => console.log(error))
    },[])

    
    return (
        <div>
    <h1 className="mj1"> BANK DETAILS PAGE  ...</h1>
        <div >
 
     <h3 className="mj2"> Bank Name :  {List.bank_name}</h3>
     <h3 className="mj2"> Branch :  {List.branch}</h3>
     <h3 className="mj2"> City :  {List.city}</h3>
     <h3 className="mj2"> District :  {List.district}</h3>
     <h3 className="mj2"> State :  {List.state}</h3>
     <h3 className="mj2"> IFSC :  {List.ifsc}</h3>
     <h3 className="mj2"> ADDRESS :  {List.address}</h3>

    }
     
        </div>
        
                <Link to='/all-banks' >
                <h3 className="mj4">Home Page</h3>
                </Link>
        </div>
    )
}

export default BankDetails
