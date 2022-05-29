import React, {Component} from 'react';

class App extends
Component
{
    // state = {
    //     myText: "收藏",
    //     myShow: true
    // }
    constructor() {
        super();
        this.state = {
            myText: "收藏",
            myShow: true,
            myName:"CM"
        }
    }
    render()
    {
        return (
            <div>
                <h1>欢迎来到react开发-{this.state.myName}</h1>
                <button onClick={()=>{
                    // this.state.myText = "取消收藏" //不能直接修改状态
                    this.setState({
                        // myText:"取消收藏"
                        myShow:!this.state.myShow,
                        myName:"xiaoming"
                    })//间接修改状态
                    if(this.state.myShow){
                        console.log("收藏的逻辑")
                    }else{
                        console.log("取消收藏的逻辑")
                    }
                }}
                >{this.state.myShow?"收藏":"取消收藏"}</button>
            </div>
        );
    }
}

export default App