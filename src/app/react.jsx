import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
    return <div className="helloworld">Hello React,Webpack4,Babel7!</div>;
};

ReactDOM.render(<Index />, document.querySelector("#root"));
