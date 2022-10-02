import React from 'react';
import { useRef } from 'react';
import "./App.css";

function App() {
    const txtTitle = useRef();
    const hexColor = useRef();

    const Submit = (e) => {
        e.preventDefault();
        const title = txtTitle.current.value;
        const color = hexColor.current.value;

        alert(`${color} ${title}`);


    }
    return (
        <form onSubmit={Submit}>
            <input useRef={txtTitle} type="text" placeholder="Enter your color.." />
            <input useRef={hexColor} type="color" />
            <button>add</button>
        </form>
    )
}

export default App
