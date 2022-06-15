import "./styles.css";
import React, { useState } from "react";

const array = [
  {
    id: 1,
    name: "A",
    value: "A"
  },
  {
    id: 2,
    name: "B",
    value: "B"
  },
  {
    id: 3,
    name: "C",
    value: "C"
  }
];
export default function App() {
  const [data, setData] = useState(array);
  const handleSubmit = () => {
    setData((pre) => [...array]);
  };
  const handleEdit = (e) => {
    const newObj = [...data];
    newObj[e.target.id].value = e.target.value;
    setData(newObj);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Table</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item?.id}>
                <td>{item?.name}</td>
                <td>
                  <input id={index} onChange={handleEdit} value={item?.value} />
                </td>
                <td />
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleSubmit}> Submit</button>
      </div>
    </div>
  );
}
