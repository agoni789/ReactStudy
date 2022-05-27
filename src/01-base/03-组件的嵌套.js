import React, {Component} from 'react';

class Navbar extends Component{
    render() {
        return  <div>
            Navbar
        </div>
    }
}

function Swiper(){
    return <div>Swiper</div>
}

const Tabbar = ()=> <div> tabber</div>

class App extends Component
{
    render()
    {
        return (
            <div>
                <Navbar/>
                <Swiper/>
                <Tabbar/>
            </div>
        );
    }
}

export default App;