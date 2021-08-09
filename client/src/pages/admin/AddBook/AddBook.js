import React,{useState} from 'react'
import {Formik,Form,Field,ErrorMessage,useField} from 'formik'
import {BrowserRouter as Router, NavLink,Link,Route,Switch} from 'react-router-dom'
import axios from 'axios'
import {useHistory} from 'react-router'
import swal from 'sweetalert';
import './AddBook.css'
 function AddBook() {
    const history = useHistory()
    const initialValues={
        judul:"",
        subjek:"",
        edisi:"",
        pengarang:"",
        bahasa:"",
        deskripsi:"",
        jenis:"",
        penerbit:"",
        isbn:"",
        tahun:"",
        keaslian:"",
        lokasi:"",
    }

    const onSubmit = (data) =>{
        
        axios.post("http://192.168.137.1:3001/Book/AddBook",data).then((response)=>{
        console.log(response.data);
       if (response.data == "SUCCESS") {
        swal({
            title: `${response.data}`,
            text: "",
            icon: "success",
            buttons: 'OK',
            successMode: true,
          }).then(function(isConfirm) {
            if (isConfirm) {
                history.push('/Admin/DaftarBuku')
            } 
          })
       }else if(response.data=="isbn"){
           swal('Buku Telah Ada')
       }
    })  
    }
   
    const MyTextArea = ({label, ...props}) => {
        // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
        // which we can spread on <input> and alse replace ErrorMessage entirely.
        const [field, meta] = useField(props);
        return (
            <>
                <label htmlFor={props.id || props.name}>{label}</label>
                <textarea className="text-area" {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </>
        );
      };
    return (
        <div style={{marginTop:"40px"}}>
            Tambah Buku
            <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit} 
               >
                <Form>
                <div className="addbook-form">
                    <div className="first">
                    <div>Judul</div>
                    <Field className="input" autocomplete="off" id="inputCreatePost" name="judul" placeholder="Masukkan judul"  />
                    <div>Subjek:</div>
                    <Field className="input" autocomplete="off" id="inputCreatePost" name="subjek" placeholder="Masukkan subjek"  />
                    <div>Pengarang:</div>
                    <Field className="input" autocomplete="off" id="inputCreatePost" name="pengarang" placeholder="Masukkan pengarang"  />
                    <div>Bahasa:</div> 
                    <Field className="input" autocomplete="off" id="inputCreatePost" name="bahasa" placeholder="Masukkan bahasa"  />
                    <div>Deskripsi:</div> 
                    <MyTextArea
                    name="deskripsi"
                     rows="6"
                    placeholder="Deskripsi"
                    />
                    </div>
                    <div className="second">
                    <div>Penerbit:</div> 
                    <Field type="text" className="input" autocomplete="off" id="inputCreatePost" name="penerbit" placeholder="Masukkan Penerbit"  />
                    <div>ISBN:</div> 
                    <Field className="input" autocomplete="off" id="inputCreatePost" name="isbn" placeholder="Masukkan ISBN"  />
                    <div>Tahun:</div> 
                    <Field className="input" autocomplete="off" id="inputCreatePost" name="tahun" placeholder="Masukkan Tahun Terbit"  />
                    <div>Keaslian:</div> 
                    <Field className="input" autocomplete="off" id="inputCreatePost" name="keaslian" placeholder="Masukkan Keaslian"  />
                    <div>Edisi:</div> 
                    <Field className="input" autocomplete="off" id="inputCreatePost" name="edisi" placeholder="Masukkan Keaslian"  />
                    <div>Jenis:</div> 
                    <Field className="input" autocomplete="off" id="inputCreatePost" name="jenis" placeholder="Masukkan Keaslian"  />
                    <div>Lokasi:</div> 
                    <Field className="input" autocomplete="off" id="inputCreatePost" name="lokasi" placeholder="Masukkan Keaslian"  />
    
                    </div>
                </div>
                    <button type="submit" className="btn-add">Tambah</button>
                 </Form>
                </Formik>
        </div>
    )
}
export default AddBook