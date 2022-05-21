import { useEffect, useState } from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

const SubNavBarPlayers = (props) => {
    const {listPageActive, setListPageActive} = props;

    const [listClass, setlistClass] = useState("");
    const [addClass, setAddClass] = useState("");

    useEffect(() => {
        if(listPageActive) {
            setlistClass("active");
            setAddClass("");
        } else {
            setlistClass("");
            setAddClass("active");
        }
    }, [listPageActive])

    return(
        <Navbar bg="secondary" variant="dark">
            <Container>
                <Nav>
                    <Nav.Link href="/players/list" className={listClass}>Player List</Nav.Link>
                    <Nav.Link href="/players/addplayer" className={addClass}>Add Player</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default SubNavBarPlayers;