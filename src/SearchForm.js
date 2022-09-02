import React from "react";

const SearchForm = (props) => {
	const request = props.apiCall;
	const inputValue = props.inputValue;
	const onChangeHandler = props.onChangeHandler;

	return (
		<div className="search__wrapper">
			<form onSubmit={request}>
				<input
					className="search__input"
					name="location" // We're giving a name to out input to later access its value via e.target.elements.location.value in case we want to make this form uncontrolled
					type="text"
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
