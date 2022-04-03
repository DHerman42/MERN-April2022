import React from "react";

const PersonCard = (props) => {
	return (
		<div className="card">
			<h2>
				{props.lastName}, {props.firstName}
			</h2>
			<h5>Age: {props.age}</h5>
			<h5>Hair Color: {props.hairColor}</h5>
		</div>
	);
};

export default PersonCard;
