import React, {Component} from 'react';

class App extends Component
{
    a= 100
    myRef = React.createRef()
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
        return (
            <div>
                <input ref={this.myRef}/>
                <button onClick={ ()=>{
                    this.handleClick()
                }}>add</button>
                <ul>
                    {
                        this.state.list.map((item,index)=>
                            <li key={item.id}>
                                {item.text}
                                {/*<button onClick={this.handleDelClick.bind(this,index)}>del</button>*/}
                                <button onClick={()=>{
                                    this.handleDelClick(index)
                                }}>del</button>
                            </li>)
                    }
                </ul>
            </div>
        );
    }
    handleClick = ()=>{
        console.log("click",this.myRef.current.value)
        //不要直接修改状态,可能造成不可预期问题
        // this.state.list.push(this.myRef.current.value)

        let newList =  [...this.state.list]
        newList.push({
            id:Math.random()*10000000000,//生产不同id
            text:this.myRef.current.value
        })
        this.setState({
            list:newList
        })
        //清空输入框
        this.myRef.current.value = ""
    }
   handleDelClick(index){
        console.log("del",index)

       let newList =  this.state.list.slice()
       newList.splice(index,1)
       this.setState({
           list:newList
       })
   }
}
export default App
