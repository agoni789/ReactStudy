import React, {Component} from 'react';
import './css/02-maizuo.css'
import Film from "./maizuocomment/Film";
import Cinema from "./maizuocomment/Cinema";
import Center from "./maizuocomment/center";

class App extends Component
{
    state = {
        list:[
            {
                id:1,
                test:"电影"
            },
            {
                id:2,
                test:"影院"
            },
            {
                id:3,
                test:"我的"
            }
        ],
        current:0
    }

    which(){
       switch (this.state.current){
           case 0:
               return <Film></Film>
           case 1:
               return <Cinema></Cinema>
           case 2:
               return  <Center></Center>
       }
    }

    render()
    {
        return (
            <div>
                {
                    this.which()
                }
                <ul>
                    {
                        this.state.list.map((item,index)=>
                        <li key={item.id}
                            className={this.state.current===index?"active":""}
                            onClick={()=>{this.handleClick(index)}}>{item.test}</li>)
                    }
                </ul>
            </div>
        );
    }
    handleClick(index){

        this.setState({
            current: index
        })
    }
}

export default App;