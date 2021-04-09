import React from "react";
import { db } from "./firebase_config";


export default function TodoListItem({ todo, inprogress, id }) {

    const deleteTodo = () => {
        db.collection("todos").doc(id).delete();
    }

    <p style={pStyle} onClick={deleteTodo}>{todo.todo}</p>
}