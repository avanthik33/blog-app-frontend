import axios from "axios";
import React, { useState } from "react";

const SignUp = () => {
  const [input, setInput] = new useState([
    {
      name: "",
      age: "",
      mobileNo: "",
      address: "",
      pincode: "",
      email: "",
      password: "",
    },
  ]);
  const handler=(event)=>{
    setInput({...input,[event.target.name]:event.target.value})
  }
  const read=()=>{
    axios.post("http://localhost:3000/user/signup",input).then((response)=>{
      alert("successfully registerdd")
    })
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" name="name" value={input.name} onChange={handler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Age
                </label>
                <input type="number" className="form-control"  name="age" value={input.age} onChange={handler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  MObile NO
                </label>
                <input type="number" className="form-control" name="mobileNo" value={input.mobileNo} onChange={handler}  />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label" >
                  Adress
                </label>
                <input type="text" className="form-control" name="address" value={input.address} onChange={handler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  pin
                </label>
                <input type="number" className="form-control" name="pincode" value={input.pincode} onChange={handler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  email
                </label>
                <input type="email" className="form-control" name="email" value={input.email} onChange={handler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  password
                </label>
                <input type="password" className="form-control" name="password" value={input.password} onChange={handler}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={read}>register</button>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success">login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
