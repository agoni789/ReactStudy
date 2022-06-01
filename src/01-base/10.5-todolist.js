import React, {Component} from 'react';
import './css/01-index.css'
class App extends Component
{
    a= 100
    addRef = React.createRef()
    updateRef = React.createRef()
    state={
        list:[
            {
                id:1,
                text:"111",
                textShow:true
            },
            {
                id:2,
                text:"222",
                textShow:true
            },
            {
                id:3,
                text:"333",
                textShow:true
            },
        ]
    }
    render()
    {
        return (
            <div>
                <input ref={this.addRef}/>
                <button onClick={ ()=>{
                    this.handleClick()
                }}>新增</button>
                <ul>
                    {
                        this.state.list.map((item,index)=>
                            <li key={item.id}>
                                <span className={item.textShow?'':'hidden'}>{item.text}</span>
                                <input id={"input"+index} className={item.textShow?'hidden':''} defaultValue={item.text}/>
                                <button onClick={()=>{
                                    this.handleChangeClick(index)
                                }}>修改</button>
                                <button onClick={()=>{
                                    this.handleUpdateClick(index)
                                }}>更新</button>
                                <button onClick={()=>{
                                    this.handleDelClick(index)
                                }}>删除</button>
                            </li>)
                    }
                </ul>
                <div className={this.state.list.length===0?'':'hidden'}>暂无代办事项</div>
            </div>
        );
    }
    handleClick = ()=>{
        console.log("click",this.addRef.current.value)
        //不要直接修改状态,可能造成不可预期问题
        // this.state.list.push(this.myRef.current.value)

        let newList =  [...this.state.list]
        newList.push({
            id:Math.random()*10000000000,//生产不同id
            text:this.addRef.current.value,
            textShow:true
        })
        this.setState({
            list:newList
        })
        //清空输入框
        this.addRef.current.value = ""
    }
    handleDelClick(index){
        console.log("del",index)

        let newList =  this.state.list.slice()
        newList.splice(index,1)
        this.setState({
            list:newList
        })
    }
    handleChangeClick(index){
        console.log("change",index)
        let newList =  this.state.list.slice()
        newList[index].textShow = false
        this.setState({
            list:newList
        })
    }
    handleUpdateClick(index){
        console.log("update",index)
        let changeValue = document.getElementById("input"+index).value

        let newList =  this.state.list.slice()
        let changeele =
        {
            id:newList[index].id,
            text:changeValue,
            textShow:true
        }

        newList.splice(index,1,changeele)
        this.setState({
            list:newList
        })
    }
}
export default App
