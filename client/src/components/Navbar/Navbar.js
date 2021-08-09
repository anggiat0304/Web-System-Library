import React from 'react'
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import './Navbar.css';
 function Navbar() {
    return (
        <div className="Navbar">
            <div>
                   <h1 className="title">Perpustakaan</h1>
            </div>
            <div className="menu">
            <Route>
            <Link to="/Admin/login"><p className="menu-items">Masuk sebagai admin</p></Link>
            </Route>
            </div>
        </div>
    )
}
export default Navbar;