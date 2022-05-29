import React, {Component} from 'react';

class App extends Component
{
    state={
        list:["111","222","333"]
    }
    render()
    {
        var newlist =  this.state.list.map(item => <li key={item}>{item}</li>)
        return (
            <div>
                { newlist}
            </div>
        );
    }
}

export default App;
/*
原生js - map
 */
var list = ["aa","bb","cc"]

var newlist = list.map(item => `<li>${item}<li>`)

console.log(newlist.join(""))