import { useEffect, useState } from "react";
import axios from "axios";

import SubNavBarPlayers from "./SubNavBarPlayers";

import { Container, Table, Button } from "react-bootstrap";

const ListPlayers = (props) => {
	const [allPlayers, setAllPlayers] = useState([]);
	const { listPageActive, setListPageActive, setPlayerStatusActive } = props;

	useEffect(() => {
		setListPageActive(true);
		setPlayerStatusActive(false);
	});

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/player")
			.then((res) => {
				console.log(res);
				setAllPlayers(res.data);
			})
			.catch((err) => console.log(err.response));
	}, []);

	const handleDelete = (playerId) => {
		axios
			.delete(`http://localhost:8000/api/player/${playerId}`)
			.then((res) => {
				const newList = allPlayers.filter(
					(player, index) => player._id !== playerId
				);
				setAllPlayers(newList);
			})
			.catch((err) => console.log(err.response));
	};

	return (
		<div>
            <SubNavBarPlayers listPageActive={listPageActive} setListPageActive={setListPageActive}/>
			<Container>
				<Table variant="sm mt-3" striped>
					<thead>
						<tr>
							<th>Player Name</th>
							<th>Prefered Position</th>
							<th className="fitcol">Actions</th>
						</tr>
					</thead>
					<tbody>
						{allPlayers.map((player, index) => {
							return (
								<tr className="alignrow" key={player._id}>
									<td>{player.name}</td>
									<td>{player.position}</td>
									<td className="fitcol">
										<Button
											variant="outline-danger"
											onClick={() =>
												handleDelete(player._id)
											}
										>
											Delete
										</Button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</Container>
		</div>
	);
};

export default ListPlayers;
