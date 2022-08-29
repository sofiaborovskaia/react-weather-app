const SearchForm = (props) => {
	const request = props.api_call;
	return (
		<div className="search__wrapper">
			<form onSubmit={request}>
				<input
					className="search__input"
					name="location" // We're giving a name to out input to later access its value via e.target.elements.location.value
					type="text"
					id="city-search"
					placeholder="Search for a city"
					autoFocus
				/>
				<button className="search__button">go→</button>
			</form>
		</div>
	);
};

export default SearchForm;
