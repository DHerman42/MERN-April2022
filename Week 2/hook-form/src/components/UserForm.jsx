import React, { useState } from "react";

const UserForm = (props) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");

	const createUser = (e) => {
		e.preventDefault();

		const newUser = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password,
			confirm: confirm,
		};
	};

	return (
		<div>
			<div>
				<form onSubmit={createUser}>
					<div>
						<label>First Name: </label>
						<input
							type="text"
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div>
						<label>Last Name: </label>
						<input
							type="text"
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<div>
						<label>Email: </label>
						<input
							type="text"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<label>Password: </label>
						<input
							type="text"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div>
						<label>Confirm Password: </label>
						<input
							type="text"
							onChange={(e) => setConfirm(e.target.value)}
						/>
					</div>
				</form>
			</div>
			<div>
				<h4>Your form Data</h4>
				<h6>First Name: {firstName}</h6>
				<h6>Last Name: {lastName}</h6>
				<h6>Email: {email}</h6>
				<h6>Password: {password}</h6>
				<h6>Confirm Password: {confirm}</h6>
			</div>
		</div>
	);
};

export default UserForm;