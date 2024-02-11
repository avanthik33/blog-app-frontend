import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate=useNavigate()
  const [input,setInput] = useState(
    {
      email:"",
      password:""
    }
  )

  const handler=(event)=>{
    setInput({...input,[event.target.name]:event.target.value})
  }

  const read=()=>{
    axios.post("http://localhost:3000/user/signin",input).then((response)=>{
      console.log(response.data.userdata)

      if(response.data.status === "success"){
        sessionStorage.setItem("userId",response.data.userdata._id)
        alert(response.data.status)
        navigate("/addcomment")
        setInput({
          email:"",
          password:""
        })
      }else{
        alert(response.data.status)
      }
    })
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Email</label>
                <input type="email" className="form-control" name='email' value={input.email} onChange={handler} />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={input.password} onChange={handler}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={read}>Login</button>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <Link to="/" class="btn btn-primary">signup</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn