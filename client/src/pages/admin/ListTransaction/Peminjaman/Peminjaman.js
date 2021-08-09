import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory,useLocation} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import Pagination from '../../../../components/Pagination/Pagination'
import PeminjamanTableAdmin from '../../../../components/Posts/Admin/Peminjaman'




function Peminjaman(tag) {
    const [Peminjaman, setPeminjaman] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5)

    useEffect(() => {
       const fetchPosts = async () =>{
           setLoading(true);
           const res = await axios.get('http://192.168.137.1:3001/Loans/All');
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
          <h1 className="text-primary mb-3">Daftar Peminjaman</h1>
            <PeminjamanTableAdmin posts={currentPosts} loading={loading} title="Peminjaman" />
            <Pagination 
            postsPerPage={postsPerPage} 
            totalPosts={Peminjaman.length} 
            paginate={paginate}/>
        </div>
    )
}

export default Peminjaman