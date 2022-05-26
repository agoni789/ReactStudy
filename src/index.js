// console.log("qwert")
import React from "react";
import ReactDom from 'react-dom'
import App from './01-base/01-class组件'


ReactDom.render(<App></App>,document.getElementById("root"))

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
