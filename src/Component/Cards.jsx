import React from 'react';

function  Card(props){
  
    return(
  // <div className="cards">
  //     <div className="card">
  //       <img src={props.imgscr} alt="Travel place" className = "card_img" />
  //       <div className="card_info">{props.sname}</div>
  //       <span className="card_title">{props.title}</span>
  //       <h3 className="card_category">{props.category}</h3>
  //       <a href= {props.links} className="" target="_blank">
  //         <button onClick={props.links}> Want more</button>
  //       </a>
  //     </div>
    // </div>

    <div className="cards">
      <div className="card">
       <div className="sec1">
        <div className="image">
          <img src={props.imgscr} alt= {props.sname}  />
        </div>
        <div className="title">Name : {props.sname} </div>
       </div>

       <div className="sec2">
        <div className="content">Coupons : {props.couponRate} </div>
        <div className="content">Maturity : {props.Maturity} </div>
        <div className="content">Type of Bonds : {props.type} </div>
        <div className="content">YTM : {props.Maturity} </div>
        <div className="content">Minimum Amount : {props.minAmt} </div>
        <div className="content">Rating : {props.ratings}</div>
       </div>


      </div>
    </div>


    );
  }
 export default Card;

