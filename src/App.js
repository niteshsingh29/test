import "./App.css";
import fetchdata from "./data";
import { useState, useEffect } from "react";
import Remove from "./Remove";

function App() {
  const [data, setData] = useState(fetchdata);
  const [color, setColor] = useState(null);
  const [isloaded, setLoaded] = useState(false);
  console.log(data);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 5000);
  }, []);
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
                  {`${color === item.id ? "hello world" : "HELLO"}`}
                </button>
              </div>
            </>
          );
        })}
      </div>
      {isloaded ? <Remove data={data} /> : <h1>Loading...</h1>}
    </div>
  );
}

export default App;
