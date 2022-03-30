import React from "react";
import {ACTIONS} from "../reducer";

function TodoItem(props) {

    function handleDelete() {
        props.dispatch({type: ACTIONS.DELETE_ITEM, payload: props.todoItem})
    }

    return (
        <div>
            <li onClick={handleDelete}>
                {props.todoItem.text}
            </li>
        </div>
    );
}

export default TodoItem;
