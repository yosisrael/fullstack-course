import React, {useReducer} from "react";
import TodoItem from "./TodoItem";
import InputErea from "./InputErea";
import reducer from "../reducer";

const initialState = {items: []};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <InputErea dispatch={dispatch}/>
            <div>
                <ul>
                    {state.items.map(todoItem => (
                        <TodoItem
                            key={todoItem.id}
                            todoItem={todoItem}
                            dispatch={dispatch}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
