import React from 'react'
import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory} from 'react-router-dom'

function SidebarAdmin(tag) {
    return (
        <Route>
        <div className="navigation">
            <ul>
                <li>
                    <Link to="#">
                    <span className="icon"></span>
                    <span className="title">Home</span>
                    </Link>    
                </li>
            </ul>
        </div>
        </Route>
    )
}
export default SidebarAdmin;