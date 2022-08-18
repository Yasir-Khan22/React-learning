import React from "react";

function App() {

    const sayHello = () => {
        console.log("Say Hello-world!")
    };

    const counter = 0;
    return (
        <div>
            <h1>Hello world</h1>
            <button onClick={sayHello}>Click 1</button>
            <button>{counter}</button>
        </div>
    )
};

export default App();
