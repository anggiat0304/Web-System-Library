import React,{useState} from 'react'
import NavbarAdmin from '../../../components/Navbar/NavbarAdmin'
import SidebarAdmin from '../../../components/Sidebar/SidebarAdmin'
import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory,useLocation} from 'react-router-dom'
import axios from 'axios'
import Late from '../ListTransaction/Terlambat/Late'




function Dashboard() {
    
    return (
        <div >
            <Late/>
        </div>
    )
}
export default Dashboard;