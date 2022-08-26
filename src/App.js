import React, { useEffect } from "react";
const App = () => {

    const APP_ID = "f58c0a52";
    const APP_KEY = "ada6a423657b9c6bf2d4d33ff0d58a13";

    useEffect(() => {
        getRecipes();
    })

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&pp_key=${APP_KEY}`);
        const data = await response.json();
        console.log(data)
    };

    return (
        <div className="App">
            <form className="search-form">
                <input className="search-bar" type="text" />
                <button className="search-btn" type="sumbit">Search</button>
            </form>
        </div >
    );
}
export default App;
