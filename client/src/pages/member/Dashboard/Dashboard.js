import {React,useState,useEffect} from 'react'
import Peminjaman from '../Transaction/Peminjaman/Peminjaman'
import Pengembalian from '../Transaction/Pengembalian/Pengembalian'
import Perpanjangan from '../Transaction/Perpanjangan/Perpanjangan'
import './Dashboard.css'
import axios from 'axios'
function Dashboard(tag) {
    const Tag = tag['tag'];
    const [Result, setResult] = useState([])
    useEffect(() => {
        axios.get(`http://192.168.137.1:3001/Member/Akun/Dashboard`,{params:{tag:tag['tag']}}).then((response)=>{
      console.log(response.data)
        setResult(response.data);
    })
    }, [])
    return (
        <div>
            Dashboard 
            <div className="content-main-member">
                <div className="items">
                <Peminjaman IdMember={Result.id}/>
                </div>
                <div className="items">
                 <Pengembalian IdMember={Result.id}/>
                </div>
                <div className="items">
                <Perpanjangan IdMember={Result.id}/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
