// class Test{
//     constructor() {
//         this.a=1
//     }
//     testa(){
//         console.log("testa")
//     }
//
// }
// class ChildTest extends Test{
//     testb(){
//
//     }
// }
// var obj = new ChildTest()
// console.log(obj.testa())

/*
类的首字母大写
只有一个大标签
return加个()
 */
import React from "react";
class App extends React.Component{
    render() {
        return (
            <div>hello react
                <ul>
                    <li>111</li>
                    <li>2222</li>
                </ul>
            </div>
        )

    }
}

export default App