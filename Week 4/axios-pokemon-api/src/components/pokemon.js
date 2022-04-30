import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = () => {
	const [state, setState] = useState(0);

	useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
			.then((response) => {
				setState(response.data);
			});
	}, []);

	return (
		<ul>
			{state.results
				? state.results.map((item, index) => {
						return <li key={index}>{item.name}</li>;
				  })
				: null}
		</ul>
	);
};
export default Pokemon;
