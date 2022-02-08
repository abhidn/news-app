import React from "react";
import Axios from "axios";
import axios from "axios";
import Category from "./Components/Category";
function App() {
  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=1cc391ee379d4b77a2c5aec0396148b7"
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <>
      <div>
        <Category />
      </div>
      <div className="container">
        <button onClick={getNews}>fetch news</button>
      </div>
    </>
  );
}

export default App;
