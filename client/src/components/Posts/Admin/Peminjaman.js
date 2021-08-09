import React from 'react'
import swal from 'sweetalert'

function PeminjamanTableAdmin({posts,loading,title}) {
    if (loading) {
        return <h2>Loading...</h2>
    }
 
    console.log(posts)
    return (
        <div>
            <ul className="list-group">
             <table id="customers">
                <tr>
                    <th>ID Peminjaman</th>
                    <th>Nama</th>
                    <th>Judul</th>
                    <th>Tanggal {title}</th>
                    <th>Batas {title}</th>
                    <th>Status</th>
                </tr>
            {posts.map((value,key)=>{
                  const diff = (Date.parse(value.limitDate) - new Date())/(24*60*60*1000)
                  return(

                          <tr>
                          <td>{value.id}</td>
                          <td>{value.Member.name}</td>
                          <td>{value.ListOfBook.Book.title}</td>
                          <td>{value.loanDate}</td>
                          <td>{value.limitDate}</td>
                          <td>{value.status}</td>
                          </tr>
                  )
              })}           
              </table>
            </ul>
        </div>
    )
}

export default PeminjamanTableAdmin
