import React,{useState} from 'react'
import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import './Perpanjangan.css'
function Perpanjangan(IdMember) {
    const [tagLog,setTagLog]=useState("");
    const history = useHistory();
    const MemberId = IdMember['IdMember'];
    
    function logout(){
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('tag');
        history.push('/Member/Logout');
    }

    const perpanjang = ()=>{
        axios.post(`http://192.168.137.1:3001/Extentions`,{tag : tagLog , idMember:MemberId}).then((response)=>{
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
            title: "Anda yakin ingin memperpanjang buku ini?",
            text: "",
            icon: "warning",
            buttons: [
              'No, cancel it!',
              'Yes, I am sure!'
            ],
            dangerMode: true,
          }).then(function(isConfirm) {
            if (isConfirm) {
             perpanjang();
            } else {
              swal("Cancelled", "Your imaginary file is safe :)", "error");
            }
          })
    }
    return (
        <div className="perpanjangan">
           <p className="titlePerpanjangan">Transaksi  Perpanjangan</p>
     <form onSubmit={(e)=>{
                  e.preventDefault(confirm())
                }}>
           <input
                type="text"
                onChange={(e)=>{
                    setTagLog(e.target.value)
                }}
                placeholder="Enter ID" />
                <button>Perpanjang</button>
    </form>
        </div>
    )
}

export default Perpanjangan
