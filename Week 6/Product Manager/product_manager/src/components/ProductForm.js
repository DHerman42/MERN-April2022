import React, { useState } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, Button } from "react-bootstrap";

const ProductForm = (props) => {
	const { products, setProducts } = props;
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");

	const onSubmitHandler = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8000/api/products", {
				title,
				price,
				description,
			})
			.then((res) => {
				console.log(res);
				console.log(res.data);
				setProducts([...products, res.data]);
				setTitle("");
				setPrice("");
				setDescription("");
			})
			.catch((err) => console.log(err));
	};

	return (
		<Card className="mt-4">
			<Card.Header>Product Manager</Card.Header>
			<Card.Body>
				<Form onSubmit={onSubmitHandler}>
					<Form.Group>
						<Form.Label>Title: </Form.Label>
						<Form.Control
							name="title"
							value={title}
							type="text"
							onChange={(e) => setTitle(e.target.value)}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Price: </Form.Label>
						<Form.Control
							name="price"
							value={price}
							type="text"
							onChange={(e) => setPrice(e.target.value)}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Description: </Form.Label>
						<Form.Control
							name="description"
							value={description}
							type="text"
							onChange={(e) => setDescription(e.target.value)}
						/>
					</Form.Group>
					<Button className="mt-3" variant="outline-primary" type="submit">
						Create
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default ProductForm;
