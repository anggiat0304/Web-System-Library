import React,{useState,useEffect} from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory,useLocation} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import HeaderAdmin from '../../../components/Header/HeaderAdmin'
import HeaderMember from '../../../components/Header/HeaderMember'
import Dashboard from '../Dashboard/Dashboard'
import Peminjaman from '../ListTransaction/Peminjaman/Peminjaman'
import Pengembalian from '../ListTransaction/Pengembalian/Pengembalian'
import Perpanjangan from '../ListTransaction/Perpanjangan/Perpanjangan'
import SearchBook from '../../../components/Search/SearchBook'

 function MainPage() {
    const history = useHistory();
    const location = useLocation();
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
    if  ((Date.parse(value.limitDate) - new Date())/(24*60*60*1000) == 1 && value.ListOfBook.extention < 3 && value.status != 'kembali') {
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

    const tag = sessionStorage.getItem('tag');

    const logout = ()=>{
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('tag');
        history.push('/');
    }
    if (sessionStorage.getItem('accessToken')===null || sessionStorage.getItem('tag')===null) {
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('tag');
        {history.push('/')}
    }
    return (
        <Router>
            <HeaderMember tag={tag}/>
            <div className="main-page">
            <div className="sidebar">
                <div className="item">
                        <Link to="/Member/Dashboard">
                          <p className="title"> Dashboard</p>
                        </Link>
                </div> 
                <div className="item">
                        <Link to="/Member/DaftarPeminjaman">
                          <p className="title">Daftar Peminjaman</p>
                        </Link>
                </div> 
                <div className="item">
                        <Link to="/Member/DaftarPengembalian">
                          <p className="title">Daftar Pengembalian</p>
                        </Link>
                </div> 
                <div className="item">
                        <Link to="/Member/DaftarPerpanjangan">
                          <p className="title">Daftar Perpanjangan</p>
                        </Link>
                </div>  
                <div className="item">
                        <button className="btn-logout" onClick={logout}>
                           Keluar
                        </button>
                </div> 
            </div>
            <div className="main-content">
                <SearchBook/>
                <div className="page">
                <Switch>
                <Route path="/Member/Dashboard">
                    <Dashboard tag={tag}/>
                </Route>
                <Route path="/Member/DaftarPeminjaman">
                    <Peminjaman tag={tag}/>
                </Route>
                <Route path="/Member/DaftarPengembalian">
                    <Pengembalian tag={tag} />
                </Route>
                <Route path="/Member/DaftarPerpanjangan">
                    <Perpanjangan tag={tag} />
                </Route>
                <Route path="/Member/Logout">
                    {logout}
                </Route>
                </Switch>
                </div>
            </div>
        </div>
        </Router>
    )
}
export default MainPage