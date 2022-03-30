import React, {useState} from "react";
import {ACTIONS} from "../reducer";
import AddIcon from "@mui/icons-material/Add";

function InputErea(props) {
    const [text, setText] = useState("");

    function createNewItem(text) {
        return {id: Date.now(), text, completed: false}
    }

    function handleAdd() {
        props.dispatch({type: ACTIONS.ADD_ITEM, payload: createNewItem(text)});
        setText("");
    }

    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={text}/>
            <button onClick={handleAdd}>
        <span>
            <AddIcon/>
        </span>
            </button>
        </div>
    );
}

export default InputErea;
