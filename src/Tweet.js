import React from "react";
import "./App.css";

const Tweet = (props) => {
    return (
        <div className="tweet">
            <h1>Name: {props.name}</h1>
            <p>This is random Tweet: {props.name}</p>
            <h3>Number of poeple:{props.name}</h3>
        </div>
    )

};

export default Tweet;
