import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { Card, Form, Button } from "react-bootstrap";

const EditAuthor = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const [notFoundError, setNotFoundError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then((res) => {
                console.log(res.data);
                setName(res.data.name);
            })
            .catch((err) => {
                console.log(err.response);
                setNotFoundError("No author found using that ID");
            });
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/${id}`, {name})
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };

    return(
        notFoundError ? 
        (<Card>
            <Card.Header><h5>{notFoundError}</h5></Card.Header>
            <Card.Body><Link to="/new"><Button variant="outline-primary">Click here to add author</Button></Link></Card.Body>
        </Card>) 
        : 
        (<Card>
            <Card.Header><h5>Edit an Author</h5></Card.Header>
            <Card.Body>
                <Form onSubmit={onSubmitHandler}>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        {errors.name ? <p>{errors.name.message}</p> : null}
                        <Form.Control
                            name="name"
                            value={name}
                            type="text"
                            onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Button className="mt-3" variant="outline-primary" type="submit">Submit</Button>
                </Form>
            </Card.Body>
            <Card.Footer>
                <Link to="/"><Button variant="outline-success">Home</Button></Link>
            </Card.Footer>
        </Card>)
    );
};

export default EditAuthor;