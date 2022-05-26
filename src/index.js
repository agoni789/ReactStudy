// console.log("qwert")
import React from "react";
import ReactDom from 'react-dom'

//jsx  js+xml

ReactDom.render(<div>
    <b>123123</b>
    <ul>
        <li>111</li>
        <li>222</li>
        <li>333</li>
    </ul>
</div>,document.getElementById("root"))

ReactDom.render(React.createElement("div",{
    id:"aaa",
    class:"bbb"
},"1111111111"),document.getElementById("root1"))
