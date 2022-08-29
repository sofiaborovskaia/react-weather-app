import React from "react";

const WeatherDetails = (props) => {
	const { humidity, temp_max, temp_min } = props.main;
	const { speed } = props.wind;

	return (
		<div className="weather-details">
			<p className="weather-detail">Humidity: {humidity}</p>
			<p className="weather-detail">Max: {temp_max}</p>
			<p className="weather-detail">Min: {temp_min}</p>
			<p className="weather-detail">Wind: {speed} meter/sec</p>
		</div>
	);
};

export default WeatherDetails;
