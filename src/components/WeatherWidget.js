// src/WeatherWidget.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../WeatherWidget.css';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=59c68d8ba134839193f7c8b25ae3f9bb&units=metric`
        );
        setWeather(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Failed to fetch weather data');
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div>Loading weather...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>; // Use CSS class
  }

  return (
    <div className="weather-widget">
      <h2>Weather in Bengaluru</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherWidget;
