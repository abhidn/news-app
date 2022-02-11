import React, { useState } from "react";
import Axios from "axios";
import axios from "axios";
import Category from "./Components/Category";
import Connection from "./Components/Connection";
function App() {
  const [category, setCategory] = useState("all");
  function changeCategory(cat) {
    setCategory(cat);
  }
  console.log(category);
  return (
    <>
      <div>
        <Category changeCategory={changeCategory} />
        <Connection category={category} />
      </div>
    </>
  );
}

export default App;
