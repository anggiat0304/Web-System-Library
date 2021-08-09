import React from 'react'
import swal from 'sweetalert'

function PengembalianTableAdmin({posts,loading,title}) {
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
                    <th>Tanggal Peminjaman</th>
                    <th>Tanggal {title}</th>
                </tr>
            {posts.map((value,key)=>{
                  const diff = (new Date(value.limitDate) - new Date())/(24*60*60*1000)
                  return(

                          <tr>
                          <td>{value.Loan.id}</td>
                          <td>{value.Member.name}</td>
                          <td>{value.ListOfBook.Book.title}</td>
                          <td>{value.Loan.loanDate}</td>
                          <td>{value.returnDate}</td>
                          </tr>
                  )
              })}           
              </table>
            </ul>
        </div>
    )
}

export default PengembalianTableAdmin
