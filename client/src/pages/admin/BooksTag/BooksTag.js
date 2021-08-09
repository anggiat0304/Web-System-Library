import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory,useLocation} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';

 function BooksTag(idBook) {
     console.log(idBook);
     const IdBook = idBook.idBook;
     const [Tag, setTag] = useState([])       
    
    const history = useHistory()
     useEffect(() => {
        axios.get('http://192.168.137.1:3001/listOfBooks',{params:{BookId:IdBook}}).then((response)=>{
        if (response.data == null) {
            setTag(response.data="null")
        }else{
            setTag(response.data);
        }
        console.log(response.data);
     })          
    }, [])
     
    const HapusTag = (Id)=>{
        axios.get('http://192.168.137.1:3001/listOfBooks/deleteTag',{params:{Id:Id}}).then((response)=>{
            console.log(response.data);
            window.location.reload();
         })          
    }

    return (
        <div>
            <table>
                <tr>
                    <th>Tag Id</th>
                    <th>Status</th>
                    <th>Aksi</th>
                </tr>
                {Tag.map((value,key)=>{
                    
      return (
        
        <tr>
            <td>{value.tag}</td>
            <td>{value.status}</td>
            <td><button onClick={(e)=>HapusTag(value.id)}>hapus</button> </td>
        </tr>
      )

    })}
                
            </table>
        </div>
    )
}
export default BooksTag