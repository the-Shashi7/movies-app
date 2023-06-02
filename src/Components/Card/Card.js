import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ Data }) {
  return (
    <div className="Card-container">
      <div className="img-conatainer">
        <img src={Data.show.image.original} alt="movie-poster" />
      </div>
      <div className="about-conatainer">
        <div className="about-movies">
          <div className="movies-left">
            <span style={{ fontSize: "30px" }}>{Data.show.name}</span>
            <span style={{ fontSize: "10px" }}>{Data.show.language}</span>
          </div>
          <div className="movies-right">
            <span style={{ fontSize: "20px" }}>
              {Data.show.rating.average} ⭐
            </span>
            <span style={{ fontSize: "10px" }}>{Data.show.status}</span>
          </div>
        </div>
        <div className="show-timing">
          <span style={{ fontSize: "15px" }}>
            Released Date : {Data.show.premiered}
          </span>
          <span style={{ fontSize: "18px" }} className="timming">
            Show Time : {Data.show.schedule.time}{" "}
            {Data.show.schedule.days.map((e) => (
              <ul>{e}</ul>
            ))}
          </span>
        </div>
      </div>
      <Link to="/summary" state={Data} style={{textDecoration:'none'}}>
        <div className="summary-container">
          <span style={{ fontSize: "17px",backgroundColor:'black' }}>Click to Summary</span>
        </div>
      </Link>
    </div>
  );
}
