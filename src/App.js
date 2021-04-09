import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebaseConfig';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    db.collection('todos').onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress
        }))
      );

    });
  }

  const addTodo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput
    });

    setTodoInput("");
  }

  const inputStyle = {
    outline: "none",
    borderTop: "none",
    borderRight: "none",
    borderLeft: "none",
    borderBottomColor: 'gray',
    borderBottomWidth: 2.4,
    fontSize: "25px",
    marginTop: "2rem",
    color: "#404040"
  }

  const h1Style = {
    color: "#404040",
    padding: "2px",
    fontSize: "40px"
  }

  const buttonStyle = {
    display: "none"
  }

  const pStyle = {
    fontSize: "20px",
    color: "#404040",
    marginTop: "2rem"
  }

  return (
    <div className="App">
      <h1 style={h1Style}>Partha's todo app</h1>
      <form>
        <input style={inputStyle}
          placeHolder="add todo"
          value={todoInput}
          onChange={e => setTodoInput(e.target.value)} />
        <button type="submit" onClick={addTodo} style={buttonStyle}></button>
      </form>
      {todos.map(todo => (
        <p style={pStyle}>{todo.todo}</p>
      ))}
    </div>
  );
}

export default App;
