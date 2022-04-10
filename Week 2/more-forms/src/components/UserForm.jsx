import React, { useState } from "react";

const UserForm = (props) => {
	const [firstName, setFirstName] = useState("");
	const [firstNameError, setFirstNameError] = useState("");
	const [lastName, setLastName] = useState("");
	const [lastNameError, setLastNameError] = useState("");
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confirm, setConfirm] = useState("");
	const [confirmError, setConfirmError] = useState("");

	const handleFirstName = (e) => {
		setFirstName(e.target.value);
		if (e.target.value.length < 1) {
			setFirstNameError("");
		} else if (e.target.value.length < 2) {
			setFirstNameError("First name must be at least two characters.");
		} else {
			setFirstNameError("");
		}
	};

	const handleLastName = (e) => {
		setLastName(e.target.value);
		if (e.target.value.length < 1) {
			setLastNameError("");
		} else if (e.target.value.length < 2) {
			setLastNameError("Last name must be at least two characters.");
		} else {
			setLastNameError("");
		}
	};

	const handleEmail = (e) => {
		setEmail(e.target.value);
		if (e.target.value.length < 1) {
			setEmailError("");
		} else if (e.target.value.length < 5) {
			setEmailError("Email must be at least five characters.");
		} else {
			setEmailError("");
		}
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
		if (e.target.value.length < 1) {
			setPasswordError("");
		} else if (e.target.value.length < 8) {
			setPasswordError("Password must be at least eight characters.");
		} else {
			setPasswordError("");
		}
	};

	const handleConfirm = (e) => {
		setConfirm(e.target.value);
		if (e.target.value.length < 1) {
			setConfirmError("");
		} else if (e.target.value.length < 8) {
			setConfirmError(
				"Pasword confirmation must be at least eight chatacters."
			);
		} else if (e.target.value != password) {
			setConfirmError("Password and confirm must match.");
		} else {
			setConfirmError("");
		}
	};

	return (
		<div>
			<div>
				<form onSubmit={(e) => e.preventDefault()}>
					<div>
						<label>First Name: </label>
						<input type="text" onChange={handleFirstName} />
						{firstNameError ? <p>{firstNameError}</p> : ""}
					</div>
					<div>
						<label>Last Name: </label>
						<input type="text" onChange={handleLastName} />
						{lastNameError ? <p>{lastNameError}</p> : ""}
					</div>
					<div>
						<label>Email: </label>
						<input type="text" onChange={handleEmail} />
						{emailError ? <p>{emailError}</p> : ""}
					</div>
					<div>
						<label>Password: </label>
						<input type="text" onChange={handlePassword} />
						{passwordError ? <p>{passwordError}</p> : ""}
					</div>
					<div>
						<label>Confirm Password: </label>
						<input type="text" onChange={handleConfirm} />
						{confirmError ? <p>{confirmError}</p> : ""}
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
