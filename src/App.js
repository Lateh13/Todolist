import { useState } from "react";
import './App.css'

function Todolist() {
    const [todo, setTodo] = useState({description: '', date: ''});
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});
    }

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]);
    }

    const items = todos.map((todo, index) => 
        <tr key={index}>
            <td>{todo.description}</td>
            <td>{todo.date}</td>
        </tr>
    )

    return (
        <div className="center">
            <h1 className="heading">Todolist</h1>
            <form className="formStyle" onSubmit={addTodo}>
                Description: <input type="text" name="description" onChange={inputChanged} value={todo.description}/>
                &nbsp;&nbsp;&nbsp;&nbsp;Date: <input type="text" name="date" onChange={inputChanged} value={todo.date}/>
                <input type="submit" value="Add"/>
            </form>
            <table className="style-table">
                <tbody>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                    {items}
                </tbody>
            </table>
        </div>
    )
}

export default Todolist;