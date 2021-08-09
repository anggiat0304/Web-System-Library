import axios from 'axios'
import React from 'react'
import swal from 'sweetalert'

function DaftarTerlambat({posts,loading,title}) {
    const kembali = (id)=>{
        axios.get('http://192.168.137.1:3001/Returns/Late',{params:{id:id}}).then((res)=>{
            swal(`${res.data}`);
            window.location.reload();
        })
    }
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <ul className="list-group">
             <table id="customers">
                <tr>
                    <th>ID Peminjaman</th>
                    <th>Nama</th>
                    <th>Judul</th>
                    <th>Tanggal {title}</th>
                    <th>Terlambat</th>
                    <th>Aksi</th>
                </tr>
            {posts.map((value,key)=>{
                  const diff = ((new Date()-Date.parse(value.limitDate))/(24*60*60*1000))
                  return(

                          <tr>
                          <td>{value.id}</td>
                          <td>{value.Member.name}</td>
                          <td>{value.ListOfBook.Book.title}</td>
                          <td>{value.loanDate} </td>
                          <td>{Math.ceil(diff)} hari</td>
                          <td><button className="btn-detail"
                                onClick={(e)=>{
                                    e.preventDefault(kembali(value.id))
                                }}>
                              Kembalikan
                              </button></td>
                          </tr>
                  )
              })}           
              </table>
            </ul>
        </div>
    )
}

export default DaftarTerlambat
