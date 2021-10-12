import React from "react";
import { useStoreActions } from "easy-peasy";

const TodoItem = ({ todo }) => {
	const { toggle, remove } = useStoreActions(actions => ({
		remove: actions.remove,
		toggle: actions.toggle,
	}));

	return (
		<div
			className="todo"
			style={{ textDecoration: todo.completed ? "line-through" : "none" }}
		>
			<span onClick={() => toggle(todo.id)} style={{ cursor: "pointer" }}>
				{todo.title}
			</span>
			<button onClick={() => remove(todo.id)}>
				<img src="https://img.icons8.com/ios-glyphs/30/000000/trash--v1.png" />{" "}
			</button>
		</div>
	);
};

export default TodoItem;
