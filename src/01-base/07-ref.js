import React, {Component} from 'react';

class App extends Component
{
    a= 100
    myRef = React.createRef()
    render()
    {
        return (
            <div>
                {/*<input ref="mytext"/>*/}
                <input ref={this.myRef}/>
                <button onClick={ ()=>{
                    // console.log("click1",this.refs.mytext.value)
                    console.log("click1",this.myRef.current.value)
                }}>add</button>
            </div>
        );
    }
}
export default App
