import React,{useState} from "react"
import "./Feed.css"

const FeedBack = () =>{
    const [name, setname] = useState("");
    const [fullName, setFullName] = useState("");

    const inputEvent = (event) =>{      
        console.log(event.target.value);
        setname(event.target.value);  
    };
    const onSubmit =() =>{
        setFullName(name);
    }

    return(
  <>
  <div className = "Feed-container" >
<h1  > Thanks {fullName}  </h1>
 

<input type="text" placeholder="Enter your name"  onChange={inputEvent} value={name}

/>
{/* <input type="email" placeholder="Enter your Email"  onChange={inputEvent} value={name}

/> */}
<textArea row = "5" column = "60" placeholder = " Any FeedBack"></textArea>
<button className="feed-button"  onClick={onSubmit}
 
>Submit 👍👍 </button>


  </div>
  </>

    )
}


export default FeedBack