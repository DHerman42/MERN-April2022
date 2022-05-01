import React from "react";
import { useParams } from "react-router-dom";

const ParamRoute = (props) => {

    const {word, color, bgColor} = useParams();

    return(
        <div>
            {
                isNaN(word)?
                <h1 style = {
                    color?
                    {color: color, backgroundColor: bgColor}
                    : null
                }>This is a word: {word}</h1>
                :
                <h1>This is a number: {word}</h1>
            }
        </div>
    );
}
export default ParamRoute;