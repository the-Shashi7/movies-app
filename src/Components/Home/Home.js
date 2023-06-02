import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("Data") == "null") {
      console.log("Data from server API");
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://api.tvmaze.com/search/shows?q=all"
          );
          const jsonData = await response.json();
          setData(jsonData);
          console.log(jsonData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
      localStorage.setItem("Data", JSON.stringify(data));
    } else {
      console.log("Data from localStorage");
      const Data = localStorage.getItem("Data");
      setData(JSON.parse(Data));
    }
  }, []);
  return (
    <div className="movies-home">
      {data ? (
        data.map((ele, key) => <Card Data={ele} key={key} />)
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Home;
