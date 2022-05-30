import React, {Component} from 'react';

class App extends Component
{
    state= {
        myhtml:'<div><h1>测试富文本</h1></div>'
    }


    render()
    {
        return (
            <div dangerouslySetInnerHTML={
                {
                    __html:this.state.myhtml
                }
            }>
                {/*{this.state.myhtml}*/}
            </div>
        );
    }
}

export default App;