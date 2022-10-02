import React from 'react';
import "./App.css";
import { useState } from "react";

function App() {
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");

    const submit = (e) => {
        e.preventDefault();
        alert(`${color} ${title}`);
        setTitle("");
        setColor("");
    }

    return (
        <form onSubmit={submit}>
            <input type="text" value={title} placeholder="Enter your color.." onChange={(event => setTitle(event.target.value))} />
            <input type="color" value={color} onChange={(event => setColor(event.target.value))} />
            <button>add</button>
        </form>
    )
}

export default App
