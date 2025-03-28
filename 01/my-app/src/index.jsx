import React from "react"
import { createElement } from "react";
import { createRoot } from "react-dom/client";

// const root = createRoot(document.querySelector('#root'))

// root.render(<ul>
//                 <li>Web dev</li>
//                 <li>Better applications</li>
//                 <li>Refreshing my skills</li>
//             </ul>)

const App = () => {
    const reactElement = createElement("h1", null, "Hello from createElement");

    return reactElement;
};
const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);
root.render(<App />);

