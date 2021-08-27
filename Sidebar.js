import React from 'react'
import '../sidebar.css'
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className='aj'>
               <h3 className="field" >All Banks</h3>
               <Link to='/favourites' >
                <h3 >Favourites</h3>
                </Link>
        </div>
    )
}

export default Sidebar
