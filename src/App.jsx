/** @format */

import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setData(response.data);
    } catch (error) {
      console.error("some thing is wrong");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="country-grid">
      {data.map((country) => (
        <div key={country.name.common} className="country-container">
          <img
            src={country.flags.png}
            alt={country.name.common}
            className="country-image"
          />
          <p className="country-name">{country.name.common}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
