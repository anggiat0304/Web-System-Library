import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory,useLocation} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
import * as Yup from 'yup'
import {Formik,Form,Field,ErrorMessage} from 'formik'
function DetailBox() {
     const location = useLocation()
     const id = location.state.id
     const [Box, setBox] = useState([])
     const [Book, setBook] = useState([])
     useEffect(() => {
        axios.get('http://192.168.137.1:3001/Dropbox/Detail',{params:{id:id}}).then((response)=>{
           
                console.log(response.data)
                setBox(response.data)
       
        })
     }, [])
     const kembali = (id,idMember)=>{
        axios.post('http://192.168.137.1:3001/Returns/Dropbox',{id:id,idMember:idMember}).then((response)=>{
            swal(`${response.data}`);
            window.location.reload();
        })
     }
    return (
        <div>
            <h1>detail dropbox id {id}</h1>
            <table>
                <tr>
                    <th>Judul</th>
                    <th>Nama</th>
                    <th>Tanggal Peminjaman</th>
                    <th>Aksi</th>
                </tr>
             
                    {Box.map((value,key)=>{
                       return (
                           <tr>
                               <td>{value.ListOfBook.Book.title}</td>
                            <td>{value.Member.name}</td>
                            <td>{value.loanDate}</td>
                            <td><button onClick={(e)=>{
                                e.preventDefault(kembali(value.id,value.MemberId))
                            }}>Kembalikan</button></td>   
                           </tr>
                       )
                    })}
                   
              
            </table>
        </div>
    )
}

export default DetailBox
