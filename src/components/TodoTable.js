import React from "react";
import '../App.css';

export default function TodoTable(props, second) {
    return (
        <div>
            <table className="style-table">
                <tbody>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                    {props.todos.map((todo, index) => 
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td>{todo.date}</td>
                            <td><input type="submit" id={index} value="Delete" onClick={() => props.removeTodo(index)}/></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}