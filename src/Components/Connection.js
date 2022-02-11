import React, { useState, useEffect } from "react";
import Axios from "axios";
import axios from "axios";

function Connection(props) {
  const [data, setData] = useState(null);
  // const [category, setCategory] = useState("all");
  const getNews = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=18c0b9f0b2f34ed5995cdd104dcc1829`
      )
      .then((response) => {
        setData(response.data.articles);
      });
  };
  useEffect(() => {
    getNews();
    console.log("hi");
  }, [props.category]);
  console.log(data);
  if (!data) {
    return <>Loading</>;
  }
  return (
    <>
      <div className="container"></div>
      <div className="container">
        <div className="row">
          {data.map((value) => {
            return (
              <div className="col-3">
                <div class="card" style={{ width: "18rem" }}>
                  <img src={value.urlToImage} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{value.title}</h5>
                    <p class="card-text">{value.description}</p>
                    <a href={value.url} class="btn btn-primary">
                      Main News
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Connection;
