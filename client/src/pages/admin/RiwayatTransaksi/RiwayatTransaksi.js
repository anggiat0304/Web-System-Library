import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory,useLocation} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
import './RiwayatTransaksi.css'
import HistoryPeminjaman from '../../../components/Posts/Admin/HistoryPeminjaman';
import Pagination from '../../../components/Pagination/Pagination';

 function RiwayatTransaksi(Tag) {
    const [Peminjaman, setPeminjaman] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5)
    const location = useLocation()

    
    useEffect(() => {
        var tag = location.state.tag
        const fetchPosts = async () =>{
           setLoading(true);
           const res = await axios.get('http://192.168.137.1:3001/Loans/History',{params:{tag:tag}});
            if(res.data == '') return (<div><h1>Daftar Peminjaman</h1></div>)
            console.log(res.data)
           setPeminjaman(res.data)
           setLoading(false);
       }
       fetchPosts();
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = Peminjaman.slice(indexOfFirstPost,indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <div>
          <h1 className="text-primary mb-3">Daftar Transaksi</h1>
           <HistoryPeminjaman posts={currentPosts} loading={loading} title="Peminjaman"/>
            <Pagination
                postsPerPage={postsPerPage} 
                totalPosts={Peminjaman.length} 
                paginate={paginate}
            />
        </div>
    )
}
export default RiwayatTransaksi