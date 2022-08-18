import React from 'react'

function SayHello() {

    const hello = () => {
        console.log("say hello")
    }
    return (
        <div>
            <h1>This is simple hello component</h1>
            <button onClick={hello}>Click</button>
        </div>
    )
};

export default SayHello;
