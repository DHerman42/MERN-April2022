import React from "react";

const Main = (props) => {
    return(
        <div style={{
            backgroundColor: "#e06666",
            padding: "10px",
            display: "inline-block"
        }}>
            {props.children}
        </div>
    );
};

export default Main;