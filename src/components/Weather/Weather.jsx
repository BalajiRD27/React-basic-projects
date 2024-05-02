import React, { useEffect, useState } from "react";
import "./weather.css";
import Search from "./Search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function checkWeather(params) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=1d0c4d492c57eb661fed8a767ae2ccd1`
      );
      const data = await response.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  function handleSearch() {
    checkWeather(search);
  }

  useEffect(()=>{
     checkWeather("bangalore")
  },[])

  function getDate(){
    return new Date().toLocaleDateString('en-us',{
      weekday:'long',
      month:'long',
      day:'numeric',
      year:'numeric'
    })
  }

  console.log(weatherData)
  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      { loading ? <div>Loading... </div> :
     <div className="weatherdiv" style={{backgroundColor:'lightcyan',padding:'1.5rem', display:'flex',flexDirection:'column',gap:'20px'}}>
      <div>
        <h2>{weatherData?.name},{weatherData?.sys?.country}</h2>
      </div>
      <div>
        {getDate()}
      </div>
      <div>
        <h3 style={{fontSize:'1.5rem',fontWeight:'900',color:'orchid',border:'black'}}>{weatherData ?.main ?.temp} </h3>
        <p style={{textTransform:'uppercase',fontFamily:'sans-serif',fontWeight:'600'}}>{weatherData && weatherData.weather[0] && weatherData.weather[0].description } </p>
       </div>
     </div>
}
    </div>
  );
};

export default Weather;
