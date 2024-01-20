import TextField from "@mui/material/TextField";
import "./SearchBox.css";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function SearchBox({ updateWeatherInfo }) {
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "aa5c1cf33e8ffe9cac54993216beecd5";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      let jsonRes = await response.json();
      let res = {
        city: city,
        temp: jsonRes.main.temp,
        tempMin: jsonRes.main.temp_min,
        tempMax: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        feelsLike: jsonRes.main.feels_like,
        weather: jsonRes.weather[0].description,
      };
      console.log(res);
      return res;
    } catch (err) {
      throw err;
    }
  };

  let [city, setCity] = useState("");

  let handleInp = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateWeatherInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="container">
        <TextField
          label="Your Label"
          name="inp"
          onChange={handleInp}
          className="custom-textfield"
          fullWidth
          style={{ marginRight: "10px" }}
        />

        <IconButton aria-label="delete" size="large" type="submit">
          <SearchIcon fontSize="inherit" />
        </IconButton>
      </form>
      {error && <p style={{ color: "#8C0002" }}>No such place exists!</p>}
    </>
  );
}
