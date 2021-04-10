import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";
import { db } from "./firebase_config";

export default function TodoListItem({ todo, inprogress, id }) {

    function deleteTodo() {
        db.collection("todos").doc(id).delete();
    }

    return (
        <div style={{ display: "flex" }}>
            <ListItem>
                <ListItemText
                    primary={todo}
                />
            </ListItem>


            <Button onClick={deleteTodo}>X</Button>
        </div>
    );
}
