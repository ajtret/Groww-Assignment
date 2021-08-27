import React from 'react'
import Navbar from './components/Navbar'
import "./sidebar.css"
import { Link } from "react-router-dom";


function HomePage() {
   
    return (
        <div>
        <div className="heading">
               
                <Link to='/favourites' >
                <h1 className="mj7" >Favourites</h1>
                </Link>
                <h1 className="mj8">List Of All Banks</h1>
        </div>
        <div className='body'>
        <Navbar />
        </div>
        </div>
    )
}

export default HomePage
