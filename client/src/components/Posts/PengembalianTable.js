import React from 'react'
import swal from 'sweetalert'
import './Table.css'
function PengembalianTable({posts,loading,title}) {
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
                    <th>Judul</th>
                    <th>Tanggal Peminjaman</th>
                    <th>Tanggal {title}</th>
                    <th>Media pengembalian</th>
                </tr>
            {posts.map((value,key)=>{
                  
                  return(

                          <tr>
                          <td>{value.id}</td>
                          <td>{value.ListOfBook.Book.title}</td>
                          <td>{value.Loan.loanDate}</td>
                          <td>{value.returnDate}</td>
                          <td>{value.returnType}</td>
                          </tr>
                  )
              })}           
              </table>
            </ul>
        </div>
    )
}

export default PengembalianTable
