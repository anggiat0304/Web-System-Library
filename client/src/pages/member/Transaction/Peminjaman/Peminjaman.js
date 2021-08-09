import React,{useState} from 'react'
import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import './Peminjaman.css'

function Peminjaman(IdMember) {
    const [tagLog,setTagLog]=useState("");
    const history = useHistory();
    const MemberId = IdMember['IdMember'];

    function logout(){
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('tag');
        history.push('/Member/Logout');
    }
    if (sessionStorage.getItem('accessToken')===null || sessionStorage.getItem('tag')===null) {
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('tag');
        history.replace('/Member/Logout')
    }
    const pinjam = ()=>{
        axios.post(`http://192.168.137.1:3001/Loans`,{tag : tagLog , idMember:MemberId}).then((response)=>{
      console.log(response.data)
      swal({
        title: `${response.data}`,
        text: "Ingin Melanjutkan Transaksi?",
        icon: "success",
        buttons: [
          'Tidak, Terima Kasih',
          'Ya, Tetap Masuk'
        ],
        successMode: true,
      }).then(function(isConfirm) {
        if (isConfirm) {
         window.location.reload()
        } else {
            logout();
        }
      })
    })
    }
    const confirm = ()=>{
        swal({
            title: "Anda yakin ingin meminjam buku ini?",
            text: "",
            icon: "warning",
            buttons: [
              'No, cancel it!',
              'Yes, I am sure!'
            ],
            dangerMode: true,
          }).then(function(isConfirm) {
            if (isConfirm) {
             pinjam();
            } else {
              swal("Cancelled", "Your imaginary file is safe :)", "error");
            }
          })
    }
    return (
        <div className="peminjaman">
           <p className="titlePeminjaman">Transaksi  Peminjaman</p>
     <form onSubmit={(e)=>{
                  e.preventDefault(confirm())
                }}>
           <input
                type="text"
                onChange={(e)=>{
                    setTagLog(e.target.value)
                }}
                placeholder="Enter ID" />
                <button>Pinjam</button>
    </form>
        </div>
    )
}

export default Peminjaman
