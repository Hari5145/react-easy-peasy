import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";

const AddTodo = () => {
	const [title, setTitle] = useState("");

	const add = useStoreActions(actions => actions.add);

	const onChange = e => {
		setTitle(e.target.value);
	};
	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault();
					add({
						title,
						completed: false,
					});
				}}
			>
				<input
					type="text"
					value={title}
					onChange={onChange}
					placeholder="Add todo title..."
				/>
				<input type="submit" value="Add Todo" />
			</form>
		</div>
	);
};

export default AddTodo;
