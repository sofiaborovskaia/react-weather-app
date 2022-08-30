import React from "react";

const SearchForm = (props) => {
	const request = props.APICall;
	const inputValue = props.inputValue;
	const onChangeHandler = props.onChangeHandler;

	return (
		<div className="search__wrapper">
			<form onSubmit={request}>
				<input
					className="search__input"
					name="location" // We're giving a name to out input to later access its value via e.target.elements.location.value
					type="text"
					id="city-search"
					placeholder="Search for a city"
					value={inputValue}
					onChange={onChangeHandler}
					autoFocus
				/>
				<button className="search__button">go→</button>
			</form>
		</div>
	);
};

export default SearchForm;
