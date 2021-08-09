import React from 'react'
import swal from 'sweetalert'

import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory} from 'react-router-dom'

function DaftarBukuAdmin({posts,loading,title}) {
    const history = useHistory();
    if (loading) {
        return <h2>Loading...</h2>
    }
    console.log(posts)
    return (
        <div>
            <ul className="list-group">
    <table id="customers"  >
            <tr>
      <th>Judul Buku</th>
      <th>Pengarang</th>
      <th>Penerbit</th>
      <th>ISBN</th>
      <th>Lokasi</th>
      <th>Keaslian</th>
      <th>Aksi</th>
    </tr> 
            {posts.map((value,key)=>{
                  const diff = (new Date(value.limitDate) - new Date())/(24*60*60*1000)
                  return(
                          <tr>
                          <td>{value.title}</td>
                          <td>{value.author}</td>
                        <td>{value.publisher}</td>
                        <td>{value.isbn}</td>
                        <td>{value.location}</td>
                        <td>{value.authencity}</td>
                        <td><button 
                                    className="btn-add2"
                                    onClick={()=>{history.push({
                                    pathname: '/Admin/DetailBook',
                                    state: {id:value.id}
                                });}}>Lihat Detail</button></td>
                        </tr>
                  )
                })}           
                </table>
            </ul>
        </div>
    )
}

export default DaftarBukuAdmin
