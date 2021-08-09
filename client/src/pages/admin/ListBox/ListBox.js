import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, NavLink,Link,Route,Switch,useHistory, useLocation} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import './ListBox.css'
import DetailBox from '../DetailBox/DetailBox'
import { Locker, Safe } from '../../../Assets'

function ListBox() {
const history = useHistory();
const [Box, setBox] = useState([])
const color = 'white'
const [NameBox, setNameBox] = useState([])
    useEffect(() => {
        axios.get('http://192.168.137.1:3001/Dropbox').then((response)=>{
        console.log(response.data)
        setBox(response.data)
    })
    }, [])

    const addNameBox = ()=>{
        axios.post('http://192.168.137.1:3001/Dropbox',{name:NameBox}).then((response)=>{
            console.log(response.data)
        window.location.reload()
    })
    }
    const deleteBox = (id)=>{
        axios.get('http://192.168.137.1:3001/Dropbox/Delete',{params:{id:id}}).then((response)=>{
            console.log(response.data)
        window.location.reload();
    })
    }
    const detailBox = (id)=>{
        console.log(id)
        const state = { id:id }
        const title = ''
        const url = '/Admin/detail-box'
        history.push(url,state)
    }
    var i = 0;
    return (
        <div className="Box">
             <div className="menu">
            <div className="addDropbox" style={{marginTop:"30px"}}>
            <input      
                type="text"
                onChange={(e)=>{
                setNameBox(e.target.value)   
            }}
            placeholder="Masukkan Tag"
            required
            style={{height:'50px',width:"50%",position:'absolute',border:"inset",borderColor:"blue",borderRadius:"10px",marginBottom:"5px"}} />
            <button className="btn-add" onClick={addNameBox}>Tambah Box</button>
            </div>
            </div> 
            <div className="menu">
            <div className="Dropbox">
            {Box.map((value,key)=>{
                if(i <=2 ) i++;
                else i = 0
                return (
                    <div className="card">
                    <img src={Safe} alt="Avatar" style={{width:"100px",marginLeft:"20px"}} />
                    <div className="container">
                    <h4>{value.id} <b>{value.name}</b></h4>
                    <p>Isi: {value.sumBook}</p>
                    
                    <div className="btn-box"><button className="delete" onClick={(e)=>{
                    e.preventDefault(deleteBox(value.id))
                }
            }>Hapus</button>
            <button className="detail-box" onClick={(e)=>{
                    e.preventDefault(detailBox(value.id))
                }
            }>Detail</button>
            </div>
                    </div>
                    </div>
              )
              })}
            </div>
            </div>           
        <Router>
        <Switch>
          {/* member */}
        <Route path="/Admin/detail-box" exact strict component={DetailBox}/>
        </Switch>
        </Router>
        </div>
    )
}
export default ListBox
