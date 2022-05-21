import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import SubNavBarPlayers from "./SubNavBarPlayers";

import { Form, Button, Container, Alert } from "react-bootstrap";

const AddPlayer = (props) => {
    const { listPageActive, setListPageActive, setPlayerStatusActive } = props;
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        setListPageActive(false);
        setPlayerStatusActive(false);
    });

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/player", {name, position})
            .then((res) => {
                console.log(res.data);
                navigate("/players/list");
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };

    return(
        <div>
            <SubNavBarPlayers listPageActive={listPageActive} setListPageActive={setListPageActive}/>
            <Container className="mt-3">
                <h4>Add Player</h4>
                <Form  onSubmit={(e) => submitHandler(e)}>
                    <Form.Group className="mt-3">
                        <Form.Label htmlFor="name">Player Name:</Form.Label>
                        {errors.name ? <Alert variant="danger">{errors.name.message}</Alert> : null}
                        <Form.Control 
                            type="text"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}/>
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label htmlFor="position">Prefered Position:</Form.Label>
                        <Form.Control 
                            type="text"
                            id="position"
                            onChange={(e) => setPosition(e.target.value)}
                            value={position}/>
                    </Form.Group>
                    <Button variant="outline-primary mt-3" type="submit">Add</Button>
                </Form>
            </Container>
        </div>
    );
}

export default AddPlayer;