import React from "react";

function TodoItem(props) {
  const { onClick, text, id } = props;

  return (
    <div>
      <li onClick={() => onClick(id)}>{text}</li>
    </div>
  );
}

export default TodoItem;
