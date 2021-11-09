import React from "react";
import ReactDOM from "react-dom";
import './App.css'
import Todolist from "./Todolist";

export default function App() {
    return (
        ReactDOM.render(
            <React.StrictMode>
                <Todolist />
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
}