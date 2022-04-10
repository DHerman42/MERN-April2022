import React, { useState } from "react";

const PersonCard = (props) => {
	const [age, setAge] = useState(props.age);
	return (
		<div className="card">
			<h2>
				{props.lastName}, {props.firstName}
			</h2>
			<h5>Age: {age}</h5>
			<h5>Hair Color: {props.hairColor}</h5>
			<button onClick={(event) => setAge(age + 1)}>
				Birthday Button for {props.firstName} {props.lastName}
			</button>
		</div>
	);
};

export default PersonCard;
