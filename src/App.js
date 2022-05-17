import "./App.css";
import fetchdata from "./data";
import { useState } from "react";

function App() {
  const [data, setData] = useState(fetchdata);
  const [color, setColor] = useState("");
  console.log(data);
  // const handleClick = (i) => {
  //   console.log("hey am clicked", i);
  //   setColor(true);
  // };
  return (
    <div className="App">
      <div>
        {data.map((item, i) => {
          return (
            <>
              <div key={i} style={{ border: "1px solid red" }}>
                <h3>{item.id}</h3>
                <h1>{item.title}</h1>
                <h3>{item.location}</h3>
                <button
                  style={{
                    backgroundColor: color === item.id ? "red" : "yellow",
                  }}
                  onClick={() => setColor(item.id)}
                >
                  HELLO
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
