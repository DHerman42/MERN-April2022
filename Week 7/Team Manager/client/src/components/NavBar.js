import { useEffect, useState } from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = (props) => {
    const {playerStatusActive, setPlayerStatusActive} = props;

    const [managePlayersClass, setManagePlayersClass] = useState("");
    const [managePlayerStatusClass, setManagePlayerStatusClass] = useState("");

    useEffect(() => {
        if(playerStatusActive) {
            setManagePlayerStatusClass("active");
            setManagePlayersClass("");
        } else {
            setManagePlayerStatusClass("");
            setManagePlayersClass("active");
        }
    }, [playerStatusActive])

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Team Manager</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/players/list" className={managePlayersClass}>Manage Players</Nav.Link>
                    <Nav.Link href="/status/game/1" className={managePlayerStatusClass}>Manage Player Status</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;