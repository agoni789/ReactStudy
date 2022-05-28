import React, {Component} from 'react';

class App extends Component
{
    a= 100
    render()
    {
        return (
            <div>
                <input type="text"/>
                <button onClick={ ()=>{
                    console.log("qwe","如果逻辑过多不推荐",this.a)
                }}>add</button>
                {/*不能加()  会自动执行*/}
                <button onClick={this.handleClick2.bind(this)}>add2</button>
                <button onClick={this.handleClick3}>add3</button>
                <button onClick={()=>{
                    this.handleClick4() //比较推荐
                }}>add4</button>

            </div>
        );
    }
    handleClick2(){
        console.log("handle2",this.a)
    }
    handleClick3 =()=>{
        console.log("handle3",this.a)
    }
    handleClick4 =()=>{
        console.log("handle4",this.a)
    }
}

/*
事件绑定三种
call        改变this 自动执行
apply       改变this 自动执行
bind        不自动执行
 */
var obj1 = {
    name : "obj1",
    getName(){
        console.log(this.name)
    }
}
var obj2 = {
    name : "obj2",
    getName(){
        console.log(this.name)
    }
}
obj1.getName.apply(obj2);
obj1.getName.call(obj2);
obj1.getName.bind(obj2)();

obj2.getName()

export default App;

