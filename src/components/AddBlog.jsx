import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddBlog = () => {
  const [input,setInput]=new useState(
    {
      userId:sessionStorage.getItem("userId"),
      post:""
    }
  )
  const handler=(event)=>{
    setInput({...input,[event.target.name]:event.target.value})
  }
  const read=()=>{

    console.log(input)

    axios.post("http://localhost:3000/post/addpost",input).then((response)=>{
      console.log(response.data)
      if(response.data.status === "success"){
        alert("successfully added comment")
        setInput({     
          userId:"",
          post:""
        })
      }else{
        alert("somthing went wrong")
      }
    })
  }
  return (
    <div>
      <NavBar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-1 col-lg-1 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  comment
                </label>
                <input type="text" className="form-control" name='post' value={input.post} onChange={handler} />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={read}>Submit Comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBlog