import { useState, useEffect, useCallback } from "react";

import "./App.css";
import WeatherData from "./WeatherData";
import SearchForm from "./SearchForm";
import ErrorMessage from "./ErrorMessage";
import Container from "./Container";

const App = () => {
	const [weatherLocation, setWeatherLocation] = useState("");
	const [showWeather, setShowWeather] = useState(false);
	const [showError, setShowError] = useState(false);
	const [inputValue, setInputValue] = useState("");

	const onFormSubmitHandler = useCallback(
		(e) => {
			e.preventDefault();
			const searchedLocation = inputValue; // for uncontrolled form: const searchedLocation = e.target.elements.location.value;
			// setState is an asynchronous action, so we need to include API call function as a second param callback to make sure it executes after state is uptated
			setWeatherLocation(searchedLocation);
		},
		[inputValue],
	);

	const onChangeHandler = (e) => {
		const { value } = e.target;
		setInputValue(value);
	};

	// Show current location on Load
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(async (position) => {
				const long = position.coords.longitude;
				const lat = position.coords.latitude;
				const apiKey = "b07ce01cf98a75428f9f86fbce911aa4";
				const urlCurrentLocation = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=${apiKey}&units=metric`;
				const request = await fetch(urlCurrentLocation);
				const response = await request.json();
				const currentlocation = response[0].name;

				setWeatherLocation(currentlocation);
			});
		} else {
			console.log("Geolocation is not supported in your browser");
		}
	}, []);

	useEffect(() => {
		console.log(weatherLocation);
		const apiCall = async () => {
			console.log("yo!");
			// don't forget to implement try and catch
			const apiKey = "b07ce01cf98a75428f9f86fbce911aa4";
			const urlLocation = `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&appid=${apiKey}&units=metric`;
			const request = await fetch(urlLocation);
			const response = await request.json();
			if (!request.ok) {
				setShowError(true);
				setShowWeather(false);
			} else {
				setShowError(false);
				setShowWeather(response);
			}
		};
		apiCall();
	}, [weatherLocation]);

	return (
		<Container>
			{showWeather && <WeatherData weatherData={showWeather} />}
			{showError && <ErrorMessage errorMessage={showError} />}
			<SearchForm
				apiCall={onFormSubmitHandler}
				inputValue={inputValue}
				onChangeHandler={onChangeHandler}
			/>
		</Container>
	);
};

export default App;
