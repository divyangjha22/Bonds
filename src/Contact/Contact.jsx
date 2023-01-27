import React, {useState} from "react";
import "./Contact.css";



const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const InputEvent = (event) => {
    const {name, value} = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name] : value, 
      }
    })
  }
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My Name is ${data.fullname}.
      number is ${data.phone},
      email is ${data.email} and
        here is what i want to say  ${data.msg}`
    );

  };
  return (
    <>
    <div className="">
      <h1 className="title"> Contact Us</h1>
    </div>
    <div className="">
      <div className="row">
        <div className="">
          <form onSubmit={formSubmit}>
          <div class="Name" className = "common" >
    <label for="exampleFormControlInput1" className="form-label" >Full Name </label>
    <input 
    type="text" 
    className="form-control temp" 
   
    id="exampleFormControlInput1" 
    name="fullname" 
    value={data.fullname}  
    onChange={InputEvent} 
    placeholder="Enter your Name"
    required
     />
  </div>
  <div className="Number  common">
    <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
    <input 
    type="number" 
    className="form-control" 
    id="exampleFormControlInput1"  
    name="phone" 
    value={data.phone} 
    onChange={InputEvent} 
    placeholder="Enter your Number"
    required />
  </div>        
  <div className="mail  common" >
    <label for="exampleFormControlInput1" className="form-label">Email address</label>
    <input 
    type="email" 
    className="form-control" 
    id="exampleFormControlInput1" 
    name="email" 
    value={data.email} 
    onChange={InputEvent} 
    placeholder="xyz@example.com" 
    required/>
  </div>
  <div className="msg common"  >
    <label for="exampleFormControlTextarea1" className="form-label  common1" >Message </label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
    name="msg" 
    value={data.msg} 
    onChange={InputEvent} 
    placeholder="Your Message"
    required ></textarea>
  </div>
  <div className="btn-sec">
    <button className="btn"  > Submit Form </button>
  </div>
  </form>
        </div> 
      </div>
    </div>

    </>
  );
};

export default Contact;