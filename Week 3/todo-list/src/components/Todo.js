const Todo = (props) => {
	const classes = [];

	if (props.todo.complete) {
		classes.push("strike-through");
	}
	return (
		<div>
			<input
				onChange={(event) => {
					props.handleChecked(props.index);
				}}
				checked={props.todo.complete}
				type="checkbox"
			/>
			<span className={classes.join(" ")}>{props.todo.text}</span>
			<button
				style={{ marginLeft: "15px" }}
				onClick={(event) => {
					props.handleDelete(props.index);
				}}
			>
				Delete
			</button>
		</div>
	);
};

export default Todo;
