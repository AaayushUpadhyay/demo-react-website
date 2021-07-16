import React, { useState } from "react";

const Contact = () => {


  const [data,setData]=useState({
    fullname:'',
    email:'',
    phone:''
  });

const InputEvent=(e)=>{
  const {name,value}=e.target;
  setData((preVal)=>{
    return {
      ...preVal,
      [name]:value,
    }
  })

}

  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`My name is ${data.fullname} and my email is ${data.email}, my phone number is ${data.phone}. I am awesome 😄 ❤️`);

  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  
                />
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
