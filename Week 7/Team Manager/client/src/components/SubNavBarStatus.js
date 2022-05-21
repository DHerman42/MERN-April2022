import { useEffect, useState } from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

const SubNavBarStatus = (props) => {
    const {gameId} = props;

    const [game1Class, setGame1Class] = useState("");
    const [game2Class, setGame2Class] = useState("");
    const [game3Class, setGame3Class] = useState("");

    useEffect(() => {
        if(gameId === "1") {
            setGame1Class("active");
            setGame2Class("");
            setGame3Class("");
        } else if(gameId === "2"){
            setGame1Class("");
            setGame2Class("active");
            setGame3Class("");
        }else {
            setGame1Class("");
            setGame2Class("");
            setGame3Class("active");
        }
    }, [gameId])

    return(
        <Navbar bg="secondary" variant="dark">
            <Container>
                <Nav>
                    <Nav.Link href="/status/game/1" className={game1Class}>Game 1</Nav.Link>
                    <Nav.Link href="/status/game/2" className={game2Class}>Game 2</Nav.Link>
                    <Nav.Link href="/status/game/3" className={game3Class}>Game 3</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default SubNavBarStatus;