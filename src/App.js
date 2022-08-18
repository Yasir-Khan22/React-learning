import React from "react";
import Tweet from "./Tweet";
import "./App.css";

function App() {
    return (
        <div className="tweet">
            <Tweet className="app" />
            <Tweet />
            <Tweet />


        </div>
    )
};

export default App;
