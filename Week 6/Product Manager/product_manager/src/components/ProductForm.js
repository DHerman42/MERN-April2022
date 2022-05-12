import React, { useState } from "react";

import { Card, Form, Button } from "react-bootstrap";

const ProductForm = (props) => {
	const { cardHeader, initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
	const [title, setTitle] = useState(initialTitle);
	const [price, setPrice] = useState(initialPrice);
	const [description, setDescription] = useState(initialDescription);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		onSubmitProp({title, price, description});
	};

	return (
		<Card className="mt-4 mb-3">
			<Card.Header>{cardHeader}</Card.Header>
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
						Submit
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default ProductForm;
