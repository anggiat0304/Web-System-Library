import React,{useState} from 'react'
import NavbarAdmin from '../../../components/Navbar/NavbarAdmin'
import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

function LoginAsAdmin() {
    const history = useHistory();
   
    const [tagLog,setTagLog] = useState("");
   
    const login = ()=>{
        const data = {tag:tagLog};
        axios.get('http://192.168.137.1:3001/Admin/Login',{params:{tag:data.tag}}).then((response)=>{
            if (response.data=='null') {
                swal('TAG tidak terdaftar')
            }else if(response.data=='Pending'){
                swal('Akun Masih belum terkonfirmasi. Silahkan Cek Email anda untuk mengkonfirmasi')
            }else{
                sessionStorage.setItem("accessToken",response.data);
                sessionStorage.setItem("tag",tagLog);
                history.push("/Admin/MainPage");
            }
        });
    }
    return (
        <div>
           <Route>
        <div className="main-app">
            <NavbarAdmin/>
             <div className="frm">
            <h1>Masuk sebagai admin</h1>
            <form onSubmit={(e)=>{e.preventDefault(login())}}>
     
                <input
                type="text"
                onChange={(e)=>{
                    setTagLog(e.target.value)
                }}
                placeholder="Enter ID" />
                <button className="btn-login">Login</button>
            </form>
                <Link to="/Admin/ForgotAccount">
                    <p >Cek akun</p>
                </Link>   
                <p>Belum punya akun? Silahkan</p>
              <Link to="/Admin/Register">
                  <button className="btn-register">Register</button>
              </Link>
            </div> 
        </div>
        </Route>
        </div>
    )
}

export default LoginAsAdmin