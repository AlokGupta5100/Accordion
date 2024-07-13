import { useEffect, useState } from "react";
import React from "react";
import Accordion from "./Accordion";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

return (
  <div>
    <h2>Accordion </h2>
    {data.map((item) => {
      return (
        <Accordion title={item.title} body={item.body}/>
      )
    })}
  </div>
)
};

export default App;
