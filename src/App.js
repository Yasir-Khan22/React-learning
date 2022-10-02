import React from 'react';
import "./App.css";
import { useRef } from "react";

function App() {
    const txtTitle = useRef();
    const hexColor = useRef();

    const submit = (e) => {
        e.preventDefault();
        const title = txtTitle.current.value;
        const color = hexColor.current.value;
        alert(`${color} ${title}`);

        txtTitle.current.value = "";
        hexColor.current.value = "";


    }

    return (
        <form onSubmit={submit}>
            <input ref={txtTitle} type="text" placeholder="Enter your color.." />
            <input ref={hexColor} type="color" />
            <button>add</button>
        </form>
    )
}

export default App
