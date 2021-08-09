import React,{useState} from 'react'
import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
import NavbarAdmin from '../../../components/Navbar/NavbarAdmin'
function GantiEmail() {
    const [emailLog,setEmailLog]=useState("");
    const history = useHistory();

    const confirm = ()=>{
        axios.post('http://192.168.137.1:3001/Admin/Account/ForgotAccount',
        {email:emailLog,}).then((response)=>{
            if (response.data == "Any") {
                const name = response.data.name
                const nik = response.data.nik
                history.push({
                    pathname: '/Admin/FixAccount',
                    state: {detail:emailLog}
                });
            }else{
                swal('Akun Email Tidak Terdaftar');
            }
        }); 
    }
    return (
        <div>
           <Route>
        <div className="main-app">
            <NavbarAdmin/>
             <div className="frm">
            <h3>Ganti email ? silahkan masukkan email lama anda</h3>
    
                <input
                type="text"
                onChange={(e)=>{
                    setEmailLog(e.target.value)
                }}
                placeholder="Enter email" />
                <button className="btn-login" onClick={confirm}>Konfirmasi</button>
            </div> 
        </div>
        </Route>
        </div>
    )
}
export default GantiEmail