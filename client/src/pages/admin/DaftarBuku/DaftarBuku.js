import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory,useLocation} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import Pagination from '../../../components/Pagination/Pagination'
import DaftarBukuAdmin from '../../../components/Posts/Admin/Buku'





function DaftarBuku(tag) {
    const [Perpanjangan, setPerpanjangan] = useState([])
    const [Buku, setBuku] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5)

    useEffect(() => {
       const fetchPosts = async () =>{
           setLoading(true);
           const res = await axios.get('http://192.168.137.1:3001/Book/Books');
           setPerpanjangan(res.data)
           setLoading(false);
       }
       fetchPosts();
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = Perpanjangan.slice(indexOfFirstPost,indexOfLastPost);
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <div>
          <h1 className="text-primary mb-3">Daftar Buku</h1>
         <Link to="/Admin/AddBook"> <button style={{padding:"5px" ,backgroundColor:"#04AA6D",color:"white" ,fontWeight:"bold",border:"none"}}>Tambah Buku</button></Link>
           <DaftarBukuAdmin posts={currentPosts} loading={loading} title="Daftar Buku"/>
            <Pagination 
            postsPerPage={postsPerPage} 
            totalPosts={Perpanjangan.length} 
            paginate={paginate}/>
        </div>
    )
}

export default DaftarBuku
