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
			<div className="weather">
				<h1 className="weather__location">
					{name}, {sys.country}
				</h1>
				<img
					src={require(`./weather_images/${weather[0].icon}.gif`)}
					alt="{weather[0].description}"
					className="weather__image"
				/>
				<h2 className="weather__temperature">{main.temp}°C</h2>
				<div className="weather__description">{weather[0].description}</div>
				<div class="weather__details">
					<button
						onClick={this.onClickHandler}
						className="weather__details-button"
					>
						Details
					</button>
					{this.state.showWeatherDetails && (
						<WeatherDetails main={main} wind={wind} />
					)}
				</div>
			</div>
		);
	}
}

export default WeatherData;
