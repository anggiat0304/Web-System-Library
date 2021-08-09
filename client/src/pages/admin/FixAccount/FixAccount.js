import React,{useState} from 'react'
import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory,useLocation} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
import * as Yup from 'yup'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import './FixAccount.css'
import NavbarAdmin from '../../../components/Navbar/NavbarAdmin';
 function FixAccount() {
     const location = useLocation()
     const email = location.state.detail
    const [Name, setName] = useState([]);
    const [Nik, setNik] = useState([]);
    const [Email2, setEmail2] = useState("");
    const [TAG, setTAG] = useState("");
    const history = useHistory()
    const initialValues={
        tag:"",
    }
    
    axios.get(`http://192.168.137.1:3001/Admin/Account/CheckAccount`,{params:{email:email}}).then((response)=>{
            setName(response.data.name)
            setNik(response.data.nik)
        }); 
        
        const onChangeEmail = ()=>{
            axios.get(`http://192.168.137.1:3001/Admin/Account/EditEmail/${email}`,{params:{email2:Email2}}).then((response)=>{
                console.log(response.data)     
            if (response.data == 'ok') {
                    swal('Data Berhasil diubah');
                    history.push('/Admin/Login');
                }else{
                    swal(`${response.data}`)
                }
            });
        }
        const onChangeTag = ()=>{
            axios.get(`http://192.168.137.1:3001/Admin/Account/EditTag/${email}`,{params:{tag:TAG}}).then((response)=>{
                console.log(response.data)  
            if (response.data == 'ok') {
                    swal('Data Berhasil diubah');
                    history.push('/Admin/Login');
                }else{
                    swal(`${response.data}`)
                }
            });
        }
    return (
        <Route>
            <NavbarAdmin/>
        <div className="main-app">
        <div className="form-register">
            <p>Silahkan update akun anda</p>
            
                    <h4>{Name}</h4>
               
                    <h4>{Nik}</h4>
              
                     <input type="text"
                    onChange ={(e)=>{
                        setEmail2(e.target.value)
                    }}
                     placeholder="Ganti email"/>
                     <button onClick={(e)=>{
                         e.preventDefault(onChangeEmail())
                     }}>Ganti</button>
             
              
                     <input type="text" 
                     onChange={(e)=>{
                         setTAG(e.target.value);
                     }}
                     placeholder="Ganti tag"/>
                     <button onClick={(e)=>{
                         e.preventDefault(onChangeTag());
                     }}>Ganti</button>
             
            </div> 
        </div>
        </Route>
    )
}
export default FixAccount;