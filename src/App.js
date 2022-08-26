import React, { useEffect, useState } from "react";

const App = () => {

    const APP_ID = "f58c0a52";
    const APP_KEY = "ada6a423657b9c6bf2d4d33ff0d58a13";
    const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&pp_key=${APP_KEY}`;

    const [count, setCounter] = useState(0);

    useEffect(() => {
        console.log("Hello world!")
    }, [])


    return (
        <div className="App">
            <form className="search-form">
                <input className="search-bar" type="text" />
                {/* <button className="search-btn" type="sumbit"></button> */}
                <h1 onClick={() => setCounter(count + 1)}>{count}</h1>
            </form>
        </div >
    );
}
export default App;
