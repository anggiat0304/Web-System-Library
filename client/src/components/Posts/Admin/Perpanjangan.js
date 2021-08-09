import React from 'react'
import swal from 'sweetalert'

function PerpanjanganTableAdmin({posts,loading,title}) {
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
                </tr>
            {posts.map((value,key)=>{
                  const diff = (new Date(value.limitDate) - new Date())/(24*60*60*1000)
                  return(

                          <tr>
                          <td>{value.id}</td>
                           <td>{value.Member.name}</td>
                           <td>{value.ListOfBook.Book.title}</td>
                          <td>{value.renewalDate}</td>
                          <td>{value.returnLimit}</td>
                          </tr>
                  )
              })}           
              </table>
            </ul>
        </div>
    )
}

export default PerpanjanganTableAdmin
