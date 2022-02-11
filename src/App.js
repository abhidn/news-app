import React, { useState } from "react";
import Axios from "axios";
import axios from "axios";
import Category from "./Components/Category";
import Connection from "./Components/Connection";
function App() {
  const [data, setData] = useState([]);
  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=1cc391ee379d4b77a2c5aec0396148b7"
      )
      .then((response) => {
        setData(response.data.articles);
      });
  };

  return (
    <>
      <div>
        <Category />
        <Connection/>
      </div>
      
      
    </>
  );
}

export default App;
