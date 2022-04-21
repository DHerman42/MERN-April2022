import "./App.css";
import React, { useState } from "react";
import Todo from "./components/Todo";

function App() {
	const [newTodo, setNewTodo] = useState("");
	const [todoArr, setTodoArr] = useState([]);

	const handleNewTodo = (e) => {
		e.preventDefault();
		if (newTodo.length === 0) {
			return;
		}

		const todoItem = {
			text: newTodo,
			complete: false,
		};

		setTodoArr([...todoArr, todoItem]);
		setNewTodo("");
	};

	const handleDelete = (index) => {
		const filtered = todoArr.filter((todo, i) => {
			return i !== index;
		});
		setTodoArr(filtered);
	};

	const handleChecked = (index) => {
		const updated = todoArr.map((todo, i) => {
			if (i === index) {
				todo.complete = !todo.complete;
			}

			return todo;
		});

		setTodoArr(updated);
	};

	return (
		<div className="App">
			<form
				onSubmit={(event) => {
					handleNewTodo(event);
				}}
			>
				<input
					type="text"
					value={newTodo}
					onChange={(event) => {
						setNewTodo(event.target.value);
					}}
				/>
				<div>
					<button>Add</button>
				</div>
			</form>

			<hr />

			{todoArr.map((todo, index) => {
				return (
          <Todo 
            key={index} 
            index={index}
            todo={todo} 
            handleChecked={handleChecked}
            handleDelete={handleDelete}
          />
        );
			})}
		</div>
	);
}

export default App;
