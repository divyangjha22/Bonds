import React,{useState} from 'react'
import "./login.css"

const Login = () => {
const [user, setUser] = useState({
 name : "",
email : "",
phone : "",
message : ""
})
let Name, value;
const getUserData = (event) =>{
 Name = event.target.name;
 value = event.target.value;
 setUser({...user, [Name]: value});
}

  async function postData(e) {
    e.preventDefault();
    console.log("clicked");
    const { Name, email, phone, message } = user;

    
    if( Name && email && phone && message){

      // const response = await fetch("https://reactform-984d1-default-rtdb.firebaseio.com/reactForm.json",
      const response = await fetch("https://travellerform-default-rtdb.firebaseio.com/userDataRecord.json",
   
      {
        method: "POST",
        header: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
         Name,
         email,
         phone,
         message
        })
      });
      if(response){
        setUser({
          name : "",
          email : "",
          phone : "",
          message : ""
          
        });
        alert("Data succesfully Uploaded")
      }
      else{
        alert("please fill all the Detail");
      }

    }
  

  }

  
  return (
    <section>
    <div>
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <div>
                <h2>CONTACT US</h2>
              </div>
              <form method= "POST" data-form-title="CONTACT US">
                <input type="hidden" data-form-email="true" />
                <div className="form-group">
                  <input type="text" className="form-control" name="name" required="" value={user.name} onChange= {getUserData} placeholder="Name*" data-form-field="Name" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" name="email" required="" value={user.email} onChange= {getUserData} placeholder="Email*" data-form-field="Email" />
                </div>
                <div className="form-group">
                  <input type="tel" className="form-control" name="phone" value={user.phone} onChange= {getUserData} placeholder="Phone" data-form-field="Phone" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" value={user.message} onChange= {getUserData} placeholder="Message" rows="7" data-form-field="Message"></textarea>
                </div>
                <div>
                  <button type="submit" className="btn btn-lg btn-danger" onClick={postData}>CONTACT US</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login