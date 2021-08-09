import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory,useLocation} from 'react-router-dom'
import axios from 'axios'
import './DetailBook.css'
import swal from 'sweetalert';
import Dashboard from '../Dashboard/Dashboard';
import BooksTag from '../BooksTag/BooksTag';






 function DetailBook() {
        const location = useLocation()
        const history = useHistory()
        const id = location.state.id
        const [tagLog,setTagLog] = useState("");
        const [ListOfBook, setListOfBook] = useState([])

        useEffect(() => {
            axios.get('http://192.168.137.1:3001/Book/BookDetail',{params:{id:id}}).then((response)=>{
            console.log(response.data)
            setListOfBook(response.data)
        });
                    
        }, [])

        const addTagBook = ()=>{
            if (tagLog == "") swal('Masukkan Tag')
            axios.post('http://192.168.137.1:3001/ListOfBooks/addTag',{id:id,tag:tagLog,}).then((response)=>{
                if (response.data == 'not null') {
                    swal('Id Tag buku sudah terdaftar')
                }else{
                    window.location.reload();
                }
            
        })
    }
    return (
        <div>
           <h2>Detail Buku </h2>
            <div className="info">
                <div className="left">
                <table id="customers">
                <tr>
                    <th>Judul</th>
                    <td>{ListOfBook.title}</td>
                </tr>
                <tr>
                    <th>Subjek</th>
                    <td>{ListOfBook.subject}</td>
                </tr>
                <tr>
                    <th>Pengarang</th>
                    <td>{ListOfBook.author}</td>
                </tr>
                <tr>
                    <th>Penerbit</th>
                    <td>{ListOfBook.publisher}</td>
                </tr>
                <tr>
                    <th>ISBN</th>
                    <td>{ListOfBook.isbn}</td>
                </tr>
                <tr>
                    <th>Tahun Terbit</th>
                    <td>{ListOfBook.publicationYear}</td>
                </tr>
                <tr>
                    <th>Lokasi</th>
                    <td>{ListOfBook.location}</td>
                </tr>
                <tr>
                    <th>Edisi</th>
                    <td>{ListOfBook.edition}</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>{ListOfBook.type}</td>
                </tr>
                <tr>
                    <th>Bahasa</th>
                    <td>{ListOfBook.language}</td>
                </tr>
                <tr>
                    <th>Edisi</th>
                    <td>{ListOfBook.edition}</td>
                </tr>
                <tr>
                    <th>Keaslian</th>
                    <td>{ListOfBook.authencity}</td>
                </tr>
                <tr>
                    <th>Deskripsi</th>
                    <td>{ListOfBook.description}</td>
                </tr>
            </table>
                </div>
                <div className="right">
                   <div className="gambar">
                    {ListOfBook.images}
                   </div>
                   <div className="tag">
                       <form onSubmit={(e)=>{e.preventDefault(addTagBook())}}>
                   <input
                        type="text"
                        onChange={(e)=>{
                        setTagLog(e.target.value)   
                     }}
                placeholder="Masukkan Tag"
                required
                    style={{height:'50px',width:"100%",border:"inset",borderColor:"blue",borderRadius:"10px",marginBottom:"5px"}} />
                <button className="btn-add">Masukkan Tag</button>
                </form>
                  </div>
                     <BooksTag idBook={id}/>
                </div>
            </div>
            
        </div>
    )
}
export default DetailBook