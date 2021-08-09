import React,{useState} from 'react'
import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
import Navbar from '../../../components/Navbar/Navbar'
function ForgotAccountMember() {
    const [emailLog,setEmailLog]=useState("");
    const history = useHistory();

    const confirm = ()=>{
        axios.post('http://192.168.137.1:3001/Member/Account/ForgotAccount',
        {email:emailLog,}).then((response)=>{
            if (response.data == "Any") {
                const name = response.data.name
                const nik = response.data.nik
                history.push({
                    pathname: '/Member/FixAccount',
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
            <Navbar/>
             <div className="frm">
            <h3>Hi, anda lupa akun? silahkan masukkan email anda</h3>
    
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
export default ForgotAccountMember