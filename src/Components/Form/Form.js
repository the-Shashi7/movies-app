import React from "react";
import './Form.css';
import { useLocation } from "react-router-dom";
export default function Form() {
  const submitHandler=()=>{
    window.alert('submitted');
  }
  const location = useLocation();
  const Data = location.state;
  return (
    <div className="container" style={{backgroundImage:`url(${Data.show.image.original})`,backgroundSize: 'cover'}} >
      <div className="Form_container" >
        <h1  >Movies name : {Data.show.name}</h1>
        <h1>Released Date : {Data.show.premiered}</h1>
        <h1>Show Time : {Data.show.schedule.time}</h1>
        <button className="btn" onClick={submitHandler} >FINAL BOOKING TICKET</button>
      </div>
    </div>
  );
}
