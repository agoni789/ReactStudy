import React, {Component} from 'react';

class App extends Component
{
    render()
    {
        return (
            <div>
                <input type="text"/>
                <button onClick={ ()=>{
                    console.log("qwe","如果逻辑过多不推荐")
                }}>add</button>
                {/*不能加()  会自动执行*/}
                <button onClick={this.handleClick2}>add2</button>
                <button onClick={this.handleClick3}>add3</button>
                <button onClick={()=>{
                    this.handleClick4() //比较推荐
                }}>add4</button>

            </div>
        );
    }
    handleClick2(){
        console.log("handle2")
    }
    handleClick3 =()=>{
        console.log("handle3")
    }
    handleClick4 =()=>{
        console.log("handle4")
    }
}

export default App;