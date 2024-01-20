import { useState } from "react";
import InfoCard from "./InfoCard";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  let [info, setInfo] = useState({});

  let updateWeatherInfo = (newInfo) => {
    console.log(newInfo);
    setInfo(newInfo);
  };
  return (
    <>
      <h1>Weather App</h1>
      <SearchBox updateWeatherInfo={updateWeatherInfo} />
      <InfoCard weatherInfo={info} />
    </>
  );
}
