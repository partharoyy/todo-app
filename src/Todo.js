import React from "react";
import { db } from "./firebase_config";


export default function TodoListItem({ todo, inprogress, id }) {

    const pStyle = {
        fontSize: "20px",
        color: "#404040",
        marginTop: "2rem"
    }

    const deleteTodo = () => {
        db.collection("todos").doc(id).delete();
    }

    <p style={pStyle} onClick={deleteTodo}>{todo}</p>
}