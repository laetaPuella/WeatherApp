import React,  { useState} from 'react';
import axios from 'axios';

var mykey = config.MY_KEY;
var secretkey = config.SECRET_KEY;

const SearchBar = () => {

  const [cityname, setCityname] = useState('');
  const [weatherdata, setWeatherData] = useState(null);

  const fetchWeather = async (e) => {
      e.preventDefault();
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${mykey}&units=metric`,
      );
      setWeatherData(response.data);
    };

  return (
    <div className="container">
    <form onSubmit={fetchWeather}>
      <label>City name:</label>
      <input
      className="inp"
      type="text"
      value={cityname}
      onChange={(e) => setCityname(e.target.value)}
      />
    </form>
      <div>
     {weatherdata !== null ? (
       <>
         <div className="weather-icon">
           <img
             src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`}
             alt="imgicon"
           />
         </div>
         <h1 className="title">{weatherdata.name}, {weatherdata.sys.country}</h1>
         {weatherdata.weather[0].description}
         <p>
           It is currently  {weatherdata.main.temp} °C
           <br/>
           Total wind speed  {weatherdata.wind.speed} km/h

         </p>
       </>
     ) : null}
   </div>
  </div>
  )
 }


export default SearchBar;
