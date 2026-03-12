import TextField from "@mui/material/TextField";
import "./searchBox.css";
import Button from "@mui/material/Button";
import { useState } from "react";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;
  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonresponse = await response.json();
    console.log(jsonresponse);
    let result = {
      temp: jsonresponse.main.temp,
      tempMin: jsonresponse.main.temp_min,
      tempMax: jsonresponse.main.temp_max,
      humidity: jsonresponse.main.humidity,
      feelsLike: jsonresponse.main.feels_like,
      weather: jsonresponse.weather[0].description,
      city: jsonresponse.name,
    };
    console.log(result);
    return result;
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
  };
  return (
    <div className="searchBox">
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="city Name"
          variant="outlined"
          onChange={handleChange}
          required
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
