import React, { useState, useEffect } from "react";

const Pokemon = () => {
	const [state, setState] = useState(0);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				setState({
					pokemon: response.results,
				});
			});
	}, []);

	return (
		<ul>
			{state.pokemon
				? state.pokemon.map((item, index) => {
						return <li key={index}>{item.name}</li>;
				  })
				: null}
		</ul>
	);
};
export default Pokemon;
