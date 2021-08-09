import React from 'react'
import swal from 'sweetalert'
import Swal from 'sweetalert2'
import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory} from 'react-router-dom'
import PeminjamanTable from '../PeminjamanTable'


function DaftarAnggota({posts,loading,title}) {
   
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
      <th>Nama</th>
      <th>NIM / NIK</th>
      <th>email</th>
      <th>Posisi</th>
      <th>Aksi</th>
    </tr> 
            {posts.map((value,key)=>{
                  return(
                          <tr>
                          <td>{value.name}</td>
                          <td>{value.nik}</td>
                        <td>{value.email}</td>
                        <td>{value.posisition}</td>
                        <td><button  
                        className="btn-add2"
                        onClick={()=>{history.push({
                            pathname: '/Admin/RiwayatTransaksi',
                            state: {tag:value.tag}
                        })
                        }}>Riwayat Transaksi</button></td>
                        </tr>
                  )
                })}           
                </table>
            </ul>
        </div>
    )
}

export default DaftarAnggota
