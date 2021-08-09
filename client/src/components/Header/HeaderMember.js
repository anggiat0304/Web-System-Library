import React,{useState} from 'react'
import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import SearchBook from '../Search/SearchBook';
 function HeaderMember(tag) {
    console.log(tag['tag']);

    const [Nama, setNama] = useState([])
    axios.get(`http://192.168.137.1:3001/Member/Akun/Dashboard`,{params:{tag:tag['tag']}}).then((response)=>{
      console.log(response.data)
      setNama(response.data.name);
    })
    return (
        <div class="header">
            <div class="container">
            <h2 class="logo"><a href="#">Perpustakaan</a></h2>
            <a id="menu-icon">&#9776;</a>
            <nav class="navbar">
             <ul class="menu">
                <li><a href="#">Selamat datang, {Nama}</a></li>
            </ul>
         </nav>
    </div>
  </div>
    )
}
export default HeaderMember