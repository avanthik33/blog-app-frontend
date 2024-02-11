import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAllBlog = () => {
  const [data,setData] = new useState([])
  const read=()=>{
    
    axios.post("http://localhost:3000/post/viewall",data).then((response)=>{
      console.log(response.data)
      setData(response.data)
    })
  }

  useEffect(()=>{read()},[])
  return (
    <div>
      <NavBar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

          <table class="table">
            <thead>
              <tr> 
              <th scope="col">userName</th>
                <th scope="col">commment</th>
                <th scope="col">date</th>
              </tr>
            </thead>
            <tbody>
              
              {
                data.map((value,index)=>{
                  return <tr>
                  <td>{value.userId.name}</td>
                  <td>{value.post}</td>
                  <td>{value.postedDate}</td>

                  
                </tr>
                })
              }
              
            </tbody>
          </table>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAllBlog