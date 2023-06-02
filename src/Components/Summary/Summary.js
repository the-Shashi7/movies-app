import React from "react";
import { Link,useLocation } from "react-router-dom";
import "./Summary.css";
const Summary = () => {
  const location = useLocation();
  const Data = location.state;
  const handleBookTicket = () => {
    console.log("booking");
  };

  return (
    <div className="container">
    <div className="summary-sub-container">
      <div className="summary-movies">
        <div className="movies-img">
          <img src={Data.show.image.original} alt="movie-poster" />
        </div>
        <div className="summary">
          <span style={{ fontSize: "30px" }}>{Data.show.name}</span>
          <span id="summary_text" style={{ fontSize: "20px" }}>{Data.show.summary}</span>
        <Link to='/form' state={Data} >
          <button className="btn" onClick={handleBookTicket}>Book Ticket</button>
        </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Summary;
