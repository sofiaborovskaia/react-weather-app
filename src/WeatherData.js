import React from "react";
import WeatherDetails from "./WeatherDetals";

class WeatherData extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showWeatherDetails: false,
		};
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler() {
		this.setState((state) => ({
			showWeatherDetails: !state.showWeatherDetails,
		}));
	}

	render() {
		const { name, main, weather, wind, sys } = this.props.weatherData;
		return (
			<div className="weather-data">
				<div className="location">
					<h1 className="location-timezone" id="city-name">
						{name}, {sys.country}
					</h1>
				</div>
				<img src={require(`./weather_images/${weather[0].icon}.gif`)} alt="" />
				<div className="temperature">
					<div className="degree-section">
						<h2 className="temperature-degree">{main.temp}</h2>
						<span>°C</span>
					</div>
					<div className="temperature-description">
						{weather[0].description}
					</div>
				</div>
				<button
					onClick={this.onClickHandler}
					className="weather-details-button"
				>
					Details
				</button>
				{this.state.showWeatherDetails && (
					<WeatherDetails main={main} wind={wind} />
				)}
			</div>
		);
	}
}

export default WeatherData;
