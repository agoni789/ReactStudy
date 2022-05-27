import React, {Component} from 'react';
import './css/01-index.css'

class App extends Component{
    render(){
        let myname = "cm"
        let aaa = 'aaa'
        let bbb = 'bbb'
        var obj = {
            background:"yellow",
            fontSize: "30px"
        }
    return (
            <div>
                {10+20}-{myname}
                {10>20?aaa:bbb}
                <div style={obj}>1111</div>
                <div style={{background:"red"}}>222</div>
                <div className="active">333333333333</div>
                <label htmlFor="username">用户名</label>
                <input type="text" id = "username"/>

            </div>
        );
    }
}

export default App;