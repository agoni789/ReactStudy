import React, {Component} from 'react';
import BetterScroll from 'better-scroll'
class App extends Component
{
    state = {
        list:[]
    }
    render()
    {
        return (
            <div>
                <button onClick={()=>this.getData()}>click</button>
                <div className={"wrapper"} style={{height:"200px",background:'yellow',overflow:"hidden"}}>
                    <ul className={"content"}>
                        {
                            this.state.list.map((item,index)=>
                                <li key={index}>{item}</li>
                            )
                        }

                    </ul>
                </div>
            </div>
        );
    }
    getData(){
        let list = [1,2,3,4,5,6,78,9,8,5,6]

        this.setState({
            list:list
        },()=>{
            new BetterScroll(".wrapper")
        })
    }
}

export default App;