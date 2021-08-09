import React from 'react'
import swal from 'sweetalert'
import './Table.css'
function Posts({posts,loading,title}) {
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
                    <th>Batas {title}</th>
                    <th>Status</th>
                </tr>
            {posts.map((value,key)=>{
                  
                  return(

                          <tr>
                          <td>{value.ListOfBook.Book.title}</td>
                          <td>{value.renewalDate}</td>
                          <td>{value.returnLimit}</td>
                          <td>{value.Loan.status}</td>
                          </tr>
                  )
              })}           
              </table>
            </ul>
        </div>
    )
}

export default Posts
