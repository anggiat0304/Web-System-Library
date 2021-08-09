import React,{useState} from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import './Login.css';
function Login() {
    const [tagLog,setTagLog]=useState("");
    const history = useHistory();
    const login = ()=>{
        const data = {tag:tagLog};
        axios.get('http://192.168.137.1:3001/Member/Akun/Login',{params:{tag:data.tag}}).then((response)=>{
            if (response.data=='null') {
                swal('TAG tidak terdaftar')
                window.location.reload()
            }else if(response.data=='Pending'){
                swal('Akun Masih belum terkonfirmasi. Silahkan Cek Email anda untuk mengkonfirmasi')
            }else{
                sessionStorage.setItem("accessToken",response.data);
                sessionStorage.setItem("tag",tagLog);
                history.push("/member/MainPage");
            }
        });
    }
    return (
        <div>
           <Route>
        <div className="main-app">
            <Navbar/>
             <div className="frm">
            <h1>Login</h1>
    <form 
    onSubmit={(e)=>{e.preventDefault(login())}}
    >
                <input
                type="text"
                onChange={(e)=>{
                    setTagLog(e.target.value)
                }}
                placeholder="Enter ID" />
                <button className="btn-login">Login</button>
    </form>
                <Link to="/Member/ForgotAccount">
                    <p >Cek Akun</p>
                </Link>
                <p>Belum punya akun? Silahkan</p>
              <Link to="/registerMember">
                  <button className="btn-register">Register</button>
              </Link>
            </div> 
        </div>
        </Route>
        </div>
    )
}

export default Login