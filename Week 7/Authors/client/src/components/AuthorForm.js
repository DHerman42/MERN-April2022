import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { Card, Form, Button } from "react-bootstrap";

const AuthorForm = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author", {name})
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
        <Card>
            <Card.Header><h5>Create an Author</h5></Card.Header>
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
        </Card>
    );
};

export default AuthorForm;