// console.log("qwert")
import React from "react";
// import ReactDom from 'react-dom'
import { createRoot } from 'react-dom/client';
import App from './01-base/10-todolist'

/**
 * 18版本的写法
 * @type {HTMLElement}
 */
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
// <React.StrictMode>
    <App/>
// </React.StrictMode>
)

/*17版本的写法*/
// ReactDom.render(<App/>,document.getElementById("root"))

//jsx  js+xml

// ReactDom.render(<div>
//     <b>123123</b>
//     <ul>
//         <li>111</li>
//         <li>222</li>
//         <li>333</li>
//     </ul>
// </div>,document.getElementById("root"))
//
// ReactDom.render(React.createElement("div",{
//     id:"aaa",
//     className:"bbb"
// },"1111111111"),document.getElementById("root1"))
