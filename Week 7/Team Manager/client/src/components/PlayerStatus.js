import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import SubNavBarStatus from "./SubNavBarStatus";

import { Button, Container, Table } from "react-bootstrap";

const PlayerStatus = (props) => {
	const { setPlayerStatusActive } = props;
	const { gameId } = useParams();
	const [allPlayers, setAllPlayers] = useState([]);
	const [getAllRequestDummy, setGetAllRequestDummy] = useState(false);

	useEffect(() => {
		setPlayerStatusActive(true);
	}, []);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/player")
			.then((res) => {
				console.log(res);
				setAllPlayers(res.data);
			})
			.catch((err) => console.log(err.response));
	}, [getAllRequestDummy]);

	const handleChangeGameStatus = (playerFromBelow, newStatus) => {
		let putData = playerFromBelow;
		if (gameId === "1") {
			putData.status.gameOne = newStatus;
		} else if (gameId === "2") {
			putData.status.gameTwo = newStatus;
		} else {
			putData.status.gameThree = newStatus;
		}
		axios
			.put(`http://localhost:8000/api/player/${playerFromBelow._id}`, putData)
			.then((res) => {
				console.log(res);
				setGetAllRequestDummy(!getAllRequestDummy);
			})
			.catch((err) => console.log(err.response));
	};

	return (
		<div>
			<SubNavBarStatus gameId={gameId} />
			<Container className="mt-3">
				<h4>Player Status - Game {gameId}</h4>
				<Table>
					<thead>
						<tr>
							<th>Player Name</th>
							<th className="fitcol">Actions</th>
						</tr>
					</thead>
					<tbody>
						{gameId === "1" ? (
							allPlayers.map((player, index) => {
								return (
									<tr key={player._id}>
										<td>{player.name}</td>
										<td className="fitcol">
											<Button
												variant={`${
													player.status.gameOne ===
													"playing"
														? "success"
														: "outline-success"
												}`}
												onClick={() =>
													handleChangeGameStatus(
														player,
														"playing"
													)
												}
											>
												Playing
											</Button>
                                            <Button
                                                className="ms-2"
												variant={`${
													player.status.gameOne ===
													"not playing"
														? "danger"
														: "outline-danger"
												}`}
												onClick={() =>
													handleChangeGameStatus(
														player,
														"not playing"
													)
												}
											>
												Not Playing
											</Button>
                                            <Button
                                                className="ms-2"
												variant={`${
													player.status.gameOne ===
													"undecided"
														? "warning"
														: "outline-warning"
												}`}
												onClick={() =>
													handleChangeGameStatus(
														player,
														"undecided"
													)
												}
											>
												Undecided
											</Button>
										</td>
									</tr>
								);
							})
						) : (
							<></>
						)}
                        {gameId === "2" ? (
							allPlayers.map((player, index) => {
								return (
									<tr key={player._id}>
										<td>{player.name}</td>
										<td className="fitcol">
											<Button
												variant={`${
													player.status.gameTwo ===
													"playing"
														? "success"
														: "outline-success"
												}`}
												onClick={() =>
													handleChangeGameStatus(
														player,
														"playing"
													)
												}
											>
												Playing
											</Button>
                                            <Button
                                                className="ms-2"
												variant={`${
													player.status.gameTwo ===
													"not playing"
														? "danger"
														: "outline-danger"
												}`}
												onClick={() =>
													handleChangeGameStatus(
														player,
														"not playing"
													)
												}
											>
												Not Playing
											</Button>
                                            <Button
                                                className="ms-2"
												variant={`${
													player.status.gameTwo ===
													"undecided"
														? "warning"
														: "outline-warning"
												}`}
												onClick={() =>
													handleChangeGameStatus(
														player,
														"undecided"
													)
												}
											>
												Undecided
											</Button>
										</td>
									</tr>
								);
							})
						) : (
							<></>
						)}
                        {gameId === "3" ? (
							allPlayers.map((player, index) => {
								return (
									<tr key={player._id}>
										<td>{player.name}</td>
										<td className="fitcol">
											<Button
												variant={`${
													player.status.gameThree ===
													"playing"
														? "success"
														: "outline-success"
												}`}
												onClick={() =>
													handleChangeGameStatus(
														player,
														"playing"
													)
												}
											>
												Playing
											</Button>
                                            <Button
                                                className="ms-2"
												variant={`${
													player.status.gameThree ===
													"not playing"
														? "danger"
														: "outline-danger"
												}`}
												onClick={() =>
													handleChangeGameStatus(
														player,
														"not playing"
													)
												}
											>
												Not Playing
											</Button>
                                            <Button
                                                className="ms-2"
												variant={`${
													player.status.gameThree ===
													"undecided"
														? "warning"
														: "outline-warning"
												}`}
												onClick={() =>
													handleChangeGameStatus(
														player,
														"undecided"
													)
												}
											>
												Undecided
											</Button>
										</td>
									</tr>
								);
							})
						) : (
							<></>
						)}
					</tbody>
				</Table>
			</Container>
		</div>
	);
};

export default PlayerStatus;
