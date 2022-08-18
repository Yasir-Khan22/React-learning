import React from 'react'

function SayHello() {

    const hello = () => {
        console.log("say hello")
    }
    return (
        <div>
            <h1>Say Hello component</h1>
            <button onClick={hello}>Click</button>
        </div>
    )
};

export default SayHello;
