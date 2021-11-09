import { useState } from "react";
import TodoTable from "./TodoTable";
import '../App.css'

export default function Todolist() {
    const [todo, setTodo] = useState({description: '', date: ''});
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});
    }

    function addTodo(event) {
        event.preventDefault();
        setTodos([...todos, todo]);
    }

    function removeTodo(index) {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos([...newTodos]);
    }

    return (
        <div>
            <h1 className="heading">Todolist</h1>
            <form className="formStyle" onSubmit={addTodo}>
                Description: <input type="text" name="description" onChange={inputChanged} value={todo.description}/>
                &nbsp;&nbsp;&nbsp;&nbsp;Date: <input type="text" name="date" onChange={inputChanged} value={todo.date}/>
                <input type="submit" value="Add"/>
            </form>
            <TodoTable todos={todos} removeTodo={removeTodo}/>
        </div>
    )
}