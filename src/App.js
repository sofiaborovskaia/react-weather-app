import React from "react";

import "./App.css";
import WeatherData from "./WeatherData";
import SearchForm from "./SearchForm";
import ErrorMessage from "./ErrorMessage";
import Container from "./Container";

class App extends React.Component {
	state = {
		weatherLocation: "",
		showWeather: false,
		showError: false,
		inputValue: "",
	};
	debugger;
	APICall = async () => {
		try {
			const apiKey = "b07ce01cf98a75428f9f86fbce911aa4";
			const urlCity = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.weatherLocation}&appid=${apiKey}&units=metric`;
			const request = await fetch(urlCity);
			const response = await request.json();
			// Catches fetch errors
			if (!request.ok) {
				this.setState({ ...this.state, showWeather: false, showError: true });
			} else {
				this.setState({
					...this.state,
					showWeather: response,
					showError: false,
				});
			}
			// Catches network errors
		} catch {
			this.setState({ ...this.state, showWeather: false, showError: true });
		}
	};

	componentDidMount() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(async (position) => {
				const long = position.coords.longitude;
				const lat = position.coords.latitude;
				const apiKey = "b07ce01cf98a75428f9f86fbce911aa4";
				const urlCurrentLocation = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=${apiKey}&units=metric`;
				const request = await fetch(urlCurrentLocation);
				const response = await request.json();
				const currentlocation = response[0].name;
				this.setState({ ...this.state, weatherLocation: currentlocation });
				this.APICall();
			});
		} else {
			console.log("Geolocation is not supported in your browser");
		}
	}

	onFormSubmitHandler = (e) => {
		e.preventDefault();
		const searchedLocation = this.state.inputValue; // for uncontrolled form: const searchedLocation = e.target.elements.location.value;
		// setState is an asynchronous action, so we need to include API call function as a second param callback to make sure it executes after state is uptated
		this.setState({ ...this.state, weatherLocation: searchedLocation }, () => {
			this.APICall();
		});
	};

	onChangeHandler(e) {
		const { value } = e.target;
		this.setState({ ...this.state, inputValue: value });
	}

	render() {
		return (
			<Container>
				{this.state.showWeather && (
					<WeatherData weatherData={this.state.showWeather} />
				)}
				{this.state.showError && (
					<ErrorMessage errorMessage={this.state.showError} />
				)}
				<SearchForm
					APICall={this.onFormSubmitHandler}
					inputValue={this.state.inputValue}
					onChangeHandler={this.onChangeHandler.bind(this)}
				/>
			</Container>
		);
	}
}

export default App;
