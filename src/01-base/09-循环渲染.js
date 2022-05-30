import React, {Component} from 'react';

class App extends Component
{
    state={
        list:[
            {
                id:1,
                text:"111"
            },
            {
                id:2,
                text:"222"
            },
            {
                id:3,
                text:"333"
            },
        ]
    }
    render()
    {
        var newlist =  this.state.list.map(item => <li key={item.id}>{item.text}</li>)
        return (
            <div>
                {newlist}
                {
                    this.state.list.map((item,index) => <li key={index}>{item.text}</li>)
                }
            </div>
        );
    }
}
/*
为了列表的复用和重排,设置key,提高性能
理想的key item.id

不涉及列表增加 删除 重排  设置成索引也行
 */

export default App;
/*
原生js - map
 */
var list = ["aa","bb","cc"]

var newlist = list.map(item => `<li>${item}<li>`)

console.log(newlist.join(""))