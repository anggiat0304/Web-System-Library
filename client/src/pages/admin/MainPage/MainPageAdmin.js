import React,{useState,useEffect} from 'react'
import NavbarAdmin from '../../../components/Navbar/NavbarAdmin'
import SidebarAdmin from '../../../components/Sidebar/SidebarAdmin'
import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory,useLocation} from 'react-router-dom'
import axios from 'axios'
import {Book, Home,Logout,Participant,Safe} from '../../../Assets/index'
import Dashboard from '../Dashboard/Dashboard'
import './MainPage.css'
import HeaderAdmin from '../../../components/Header/HeaderAdmin'
import DaftarBuku from '../DaftarBuku/DaftarBuku'
import AddBook from '../AddBook/AddBook'
import DetailBook from '../DetailBook/DetailBook'
import MemberList from '../MemberList/MemberList'
import ListBox from '../ListBox/ListBox'
import Peminjaman from '../ListTransaction/Peminjaman/Peminjaman'
import Pengembalian from '../ListTransaction/Pengembalian/Pengembalian'
import Perpanjangan from '../ListTransaction/Perpanjangan/Perpanjangan'
import DetailBox from '../DetailBox/DetailBox'
import RiwayatTransaksi from '../RiwayatTransaksi/RiwayatTransaksi'

 function MainPageAdmin() {
        const [L, setL] = useState([])
        useEffect(() => {
                const Remaider = ()=>{
                        axios.get('http://192.168.137.1:3001/Loans/All').then((response)=>{
                setL(response.data)
                
        })
}
Remaider()
}, [])
L.map( (value)=>{
        console.log((Date.parse(value.limitDate)-new Date())/1000)
        if  ((Date.parse(value.limitDate) - new Date())/(24*60*60*1000) == 1 && value.ListOfBook.extention <= 3 && value.status != 'kembali') {
                const peminjamanId = value.id
             axios.get('http://192.168.137.1:3001/Loans/test2',{params:{id:peminjamanId}}).then((res)=>{
                        console.log(res.data)
                })
        }else if((Date.parse(value.limitDate) - new Date())/(24*60*60*1000) <= 0 && value.ListOfBook.extention > 3 && value.status != 'kembali' && value.status != 'late'){
                const peminjamanId = value.id
                axios.get('http://192.168.137.1:3001/Loans/test',{params:{id:peminjamanId}}).then((res)=>{
                console.log(res.data)
        })
        }

})
    const history = useHistory();
    const location = useLocation();
    const tag = sessionStorage.getItem('tag');

    const logout = ()=>{
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('tag');
        history.push('/Admin/Login');
    }
    if (sessionStorage.getItem('accessToken')===null || sessionStorage.getItem('tag')===null) {
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('tag');
        {history.push('/Admin/Login')}
    }
  
    return (
        <Router>
            <HeaderAdmin tag={tag}/>
            <div className="main-page">
            <div className="sidebar">
                <div className="item">
                        <Link to="/Admin/Dashboard">
                          <p className="title"> Daftar Keterlambatan</p>
                        </Link>
                </div> 
                <div className="item">
                        <Link to="/Admin/Dropbox">
                          <p className="title"> Daftar Dropbox</p>
                        </Link>
                </div> 
                <div className="item">
                        <Link to="/Admin/DaftarBuku">
                          <p className="title"> Daftar Buku</p>
                        </Link>
                </div> 
                <div className="item">
                        <Link to="/Admin/DaftarAnggota">
                          <p className="title"> Daftar Anggota</p>
                        </Link>
                </div> 
                <div className="item">
                        <Link to="/Admin/DaftarPeminjaman">
                          <p className="title"> Daftar Peminjaman</p>
                        </Link>
                </div> 
                <div className="item">
                        <Link to="/Admin/DaftarPengembalian">
                          <p className="title"> Daftar Pengembalian</p>
                        </Link>
                </div> 
                <div className="item">
                        <Link to="/Admin/DaftarPerpanjangan">
                          <p className="title"> Daftar Perpanjangan</p>
                        </Link>
                </div> 
                <div className="item">
                        <button className="btn-logout" onClick={logout}>
                           Keluar
                        </button>
                </div> 
            </div>
            <div className="main-content">
                <Switch>
                    <Route path="/Admin/Dashboard" exact strict component={Dashboard}/>
                    <Route path="/Admin/DaftarBuku" exact strict component={DaftarBuku}/>
                    <Route path="/Admin/RiwayatTransaksi" exact strict component={RiwayatTransaksi}/>
                    <Route path="/Admin/AddBook" exact strict component={AddBook}/>  
                    <Route path="/Admin/DetailBook" exact strict component={DetailBook}/>  
                    <Route path="/Admin/DaftarAnggota" exact strict component={MemberList}/>  
                    <Route path="/Admin/Dropbox" exact strict component={ListBox}/>  
                    <Route path="/Admin/DaftarPeminjaman" exact strict component={Peminjaman}/>  
                    <Route path="/Admin/DaftarPengembalian" exact strict component={Pengembalian}/>  
                    <Route path="/Admin/DaftarPerpanjangan" exact strict component={Perpanjangan}/>  
                    <Route path="/Admin/detail-box" exact strict component={DetailBox}/>  
                </Switch>
            </div>
        </div>
        </Router>
    )
}
export default MainPageAdmin