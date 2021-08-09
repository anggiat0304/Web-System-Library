import React,{useState} from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import {BrowserRouter as Router, NavLink,Link,Route,Switch} from 'react-router-dom'
import * as Yup from 'yup'
import axios from 'axios'
import {useHistory} from 'react-router'
import swal from 'sweetalert';
import NavbarAdmin from '../../../components/Navbar/NavbarAdmin'

function RegisterAsAdmin() {
    const initialValues={
        name:"",
        nim:"",
        email:"",
        tag:"",
    }
    const validationSchema =  Yup.object().shape({
        name:  Yup.string().required("You must input the field"),
        nim: Yup.string().min(8,"minimal 8 characters").max(15).required(),
        email: Yup.string().required("You must input the field"),
        tag: Yup.string().min(8,"minimal 8 characters").max(15).required(),
    })
    const onSubmit = (data) =>{
        axios.post("http://192.168.137.1:3001/Admin",data).then((response)=>{
        console.log(response.data);
        if (response.data == 'SUCCESS') {
            swal({
                title: `${response.data}`,
                text: "Silahkan cek email anda untuk melakukan konfirmasi.",
                icon: "success",
                buttons: 'Baik, Kehalaman Login',
                successMode: true,
              }).then(function(isConfirm) {
                if (isConfirm) {
                    history.push('/Admin/Login')
                } 
              })
        }else if(response.data =='Email'){
            swal("Email sudah terdaftar");
        }else{
            swal("Tag sudah terdaftar");
        }
    })
    }
    const history = useHistory()
    return (
        <Route>
            <NavbarAdmin/>
        <div className="main-app">
        <div className="form-register">
            <h1>Pendaftaran sebagai admin</h1>
            <p className="err" id="demo"></p>
            <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit} 
                validationSchema={validationSchema }>
                <Form>
                    <div>Nama</div>
                    <div><ErrorMessage className="err" name="name" component="span"/></div>
                    <Field className="input" autocomplete="off" id="inputCreatePost" name="name" placeholder="Input Your name"  />
                    <div>No Induk Kerja:</div>
                    <div><ErrorMessage className="err" name="nim" component="span"/></div>
                    <Field className="input" autocomplete="off" id="inputCreatePost" name="nim" placeholder="Input Your NIM or ID"  />
                    <div>Email:</div>
                   <div><ErrorMessage className="err" name="email" component="span"/></div> 
                    <Field className="input" autocomplete="off" id="inputCreatePost" name="email" placeholder="Input Your email"  />
                
                    <div>Id Tag:</div>
                    <div><ErrorMessage className="err" name="tag" component="span"/></div> 
                    <Field className="input" autocomplete="off" id="inputCreatePost" name="tag" placeholder="Input Your tag"  />
                    <button type="submit" className="btn-login">Daftar</button>
                 </Form>
                </Formik>
                             
                <p>Sudah punya akun? Silahkan</p>
              <Link to="/Admin/Login">
                  <button className="btn-register">Sign In</button>
              </Link>
            </div> 
        </div>
        </Route>
    )
}

export default RegisterAsAdmin
