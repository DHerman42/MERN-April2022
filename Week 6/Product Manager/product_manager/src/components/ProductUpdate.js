import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { Card, Form, Button } from "react-bootstrap";

const ProductUpdate = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState();
	const [price, setPrice] = useState();
	const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => {
				console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    return (
		<Card className="mt-4">
			<Card.Header>Update Product</Card.Header>
			<Card.Body>
				<Form onSubmit={updateProduct}>
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
						Update
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
}

export default ProductUpdate;