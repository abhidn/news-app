import React, { useState } from "react";
import Axios from "axios";
import axios from "axios";

function Connection() {
  const [data, setData] = useState([]);
  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1cc391ee379d4b77a2c5aec0396148b7"
      )
      .then((response) => {
        setData(response.data.articles);
      });
  };

  return (
    <>
      
      <div className="container">
        {getNews()}
      </div>
      <div className="container">
        <div className="row">
          {
          data.map((value)=>
          {
            return(
              <div className="col-3">
            <div class="card" style={{width: "18rem"}}>
              <img src={value.urlToImage} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{value.title}</h5>
                <p class="card-text">
                  {value.description}
                </p>
                <a href="#" class="btn btn-primary">
                  Main News
                </a>
              </div>
            </div>
          </div>
            )
          }
          )
        }
        </div>
      </div>
    </>
  );
}

export default Connection;
