import React,{useState,useEffect} from 'react'
import './SearchBook.css'
import axios from 'axios';
import swal from 'sweetalert';
function SearchBook() {
    const [tagLog,setTagLog] = useState("");
    const [Book, setBook] = useState([])
   
        useEffect(() => {
            axios.get('http://192.168.137.1:3001/Book/Books').then((res)=>{
            setBook(res.data);
            })
        }, [])

        const checkBook = (id)=>{
            axios.get('http://192.168.137.1:3001/listOfBooks/check',{params:{id:id}}).then((res)=>{
                swal(`${res.data}`);
            })
        }
    
    return (
        <div className="search-book">
             
                <input
                type="text"
                onChange={(e)=>{
                setTagLog(e.target.value)
                }}
                placeholder="Cari judul buku..." />
            {Book.filter((val,key)=>{
                    if (tagLog=="") {
                        return ""
                    }else if(val.title.toLowerCase().includes(tagLog.toLowerCase())){
                        return val;
                    }
            }).map((val,key)=>{
                return (
                <div className="result">
                    <p>{val.title}</p>
                    <p><button className="btn-detail-book" onClick={(e)=>{
                        e.preventDefault(checkBook(val.id));
                    }}>Detail</button></p>
                </div>)
            })}
        </div>
    )
}

export default SearchBook
