import React from "react";
import model from "./Model";
import { StoreProvider, createStore } from "easy-peasy";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

const store = createStore(model);

function App() {
	return (
		<StoreProvider store={store}>
			<div className="container">
				<Todos />
				<AddTodo />
			</div>
		</StoreProvider>
	);
}

export default App;
