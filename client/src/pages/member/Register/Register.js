import React,{useState} from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import {BrowserRouter as Router, NavLink,Link,Route,Switch} from 'react-router-dom'
import * as Yup from 'yup'
import axios from 'axios'
import {useHistory} from 'react-router'
import './Register.css'
import swal from 'sweetalert'
import Navbar from '../../../components/Navbar/Navbar'

function Register() {
    const initialValues={
        name:"",
        nim:"",
        email:"",
        position:"",
        tag:"",
    }
    const validationSchema =  Yup.object().shape({
        name:  Yup.string().required("You must input the field"),
        email: Yup.string().required("You must input the field"),
        position: Yup.string("must string").min(3).max(15).required(),
        tag: Yup.string().min(8,"minimal 8 characters").max(15).required(),
        nim: Yup.string().min(8,"minimal 8 characters").max(15).required(),
    })
    const onSubmit = (data) =>{
        axios.post("http://192.168.137.1:3001/Member",data).then((response)=>{
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
                    history.push('/')
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
        <div className="main-app">
            <Navbar/>
        <div className="form-register">
            <h1>Pendaftaran</h1>
            <p className="err" id="demo"></p>
            <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit} 
                validationSchema={validationSchema }>
                <Form>
                    <label>Nama</label>
                    <label><ErrorMessage className="err" name="name" component="span"/></label>
                    <Field className="input" autocomplete="off" id="inputCreatePost" name="name" placeholder="Input Your name"  />
                    <label>NIM atau ID:</label>
                    <label><ErrorMessage className="err" name="nim" component="span"/></label>
                    <Field className="input" autocomplete="off" id="inputCreatePost" name="nim" placeholder="Input Your NIM or ID"  />
                    <label>Email:</label>
                   <label><ErrorMessage className="err" name="email" component="span"/></label> 
                    <Field className="input" autocomplete="off" id="inputCreatePost" name="email" placeholder="Input Your email"  />
                    <label>Posisi:</label>
                   <label><ErrorMessage className="err" name="position" component="span"/></label> 
                    <Field className="input" autocomplete="off" id="inputCreatePost" name="position" placeholder="Input Your position"  />
                    <label>Id Tag:</label>
                   <label><ErrorMessage className="err" name="tag" component="span"/></label> 
                    <Field className="input" autocomplete="off" id="inputCreatePost" name="tag" placeholder="Input Your tag"  />
                    <button type="submit" className="btn-login">Daftar</button>
                 </Form>
                </Formik>
               
            
                <p>Sudah punya akun? Silahkan</p>
              <Link to="/">
                  <button className="btn-register">Sign In</button>
              </Link>
            </div> 
        </div>
        </Route>
    )
}

export default Register
