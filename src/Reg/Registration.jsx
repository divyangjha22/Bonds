import React from 'react'
import "./Registration.css"

const Registration = () => {
    return (
        <>
        <div className="reg">
   <div className="wrapper" id = ".grad_blue">
<div className="inner">
<form action="" className='Reg-form'>
<h3>Registration Form</h3>
<div className="form-group">
<div className="form-wrapper">
<label for="">First Name</label>
<input type="text" className="form-control" />
</div>
<div className="form-wrapper">
<label for="">Last Name</label>
<input type="text" className="form-control" />
</div>
</div>
<div className="form-wrapper">
<label for="">Email</label>
<input type="text" className="form-control" />
</div>
<div className="form-wrapper">
<label for="">Password</label>
<input type="password" className="form-cont rol" />
</div>
<div className="form-wrapper">
<label for="">Confirm Password</label>
<input type="password" className="form-cont /rol" />
</div>
<div className="place">
    <label htmlFor="Place">Place</label>
    <input type="text" className="form-control" />
</div>
<div className="place">
    <label htmlFor="Detail">Detail </label>
    <input type="text" className="form-control" />
</div>
{/* <div className="checkbox">
<label>
<input type="checkbox" /> I caccept the T erms of Use & Privacy Policy.
<span className="checkmark"></span>
</label>
</div> */}
<button className='register-btn'>Register Now</button>
</form>
</div>
</div>  
</div>
        </>
    )
}

export default Registration
