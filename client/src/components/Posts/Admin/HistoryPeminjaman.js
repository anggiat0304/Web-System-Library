import React from 'react'
import swal from 'sweetalert'

function HistoryPeminjaman({posts,loading,title}) {
    if (loading) {
        return <h2>Loading...</h2>
    }
 
    console.log(posts)
    return (
        <div>
            <ul className="list-group">
                <table id="customers">
                <tr>
                    <th>Judul</th>
                    <th>Tanggal {title}</th>
                    <th>Status</th>
                </tr>
            {posts.map((value,key)=>{
                var i =0;
                  const diff = (Date.parse(value.limitDate) - new Date())/(24*60*60*1000)
                  return(

                          <tr>
                          <td>{value.ListOfBook.Book.title}</td>
                          <td>{value.loanDate}</td>
                          <td>{value.status}</td>
                          </tr>
                  )
              })}
              </table>           
            </ul>
        </div>
    )
}

export default HistoryPeminjaman
