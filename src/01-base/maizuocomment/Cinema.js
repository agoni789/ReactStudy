import React, {Component} from 'react';
import axios from 'axios'

class Cinema extends Component {
    constructor() {
        super();
        this.state = {
            cinemalist:[
                {
                    id:1,
                    name:"北京电影院a",
                    address:"北京"
                },
                {
                    id:2,
                    name:"上海电影院b",
                    address:"上海"
                },
                {
                    id:3,
                    name:"广州电影院c",
                    address:"广州a"
                },
                {
                    id:4,
                    name:"济南电影院d",
                    address:"济南"
                },
            ],
            bakcinemalist:[
                {
                    id:1,
                    name:"北京电影院a",
                    address:"北京"
                },
                {
                    id:2,
                    name:"上海电影院b",
                    address:"上海"
                },
                {
                    id:3,
                    name:"广州电影院c",
                    address:"广州a"
                },
                {
                    id:4,
                    name:"济南电影院d",
                    address:"济南"
                },
            ]
        }
        // axios.get("").then(res=>{}).catch(err=>{})
        // axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7521081").then(res=>{
        //     console.log(res)
        // })
       /*
        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=3098600",
            method: "get",
            handlers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16546175591006443981438977","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res=>{
            console.log(res.data)
            this.setState({
                // cinemalist: res.data.data.cinemas
            })
        }).catch(err=>{
            console.log(err)
        })
        */
    }
    render() {
        return (
            <div>
                <input onInput={this.handleInput}/>
                    {
                        this.state.cinemalist.map(item=>
                            <dl key={item.id}>
                                <dt>{item.name}</dt>
                                <dd>{item.address}</dd>
                            </dl>
                        )
                    }
            </div>
        );
    }
    handleInput =(event) =>{
        console.log("input",event.target.value)

        let newlist = this.state.bakcinemalist.filter(item=>(item.name+item.address).toUpperCase().includes(event.target.value.toUpperCase()))
        console.log(newlist)
        this.setState({
            cinemalist:newlist
        })

    }
}

export default Cinema;

/*
filter
 */

var arr = ["aaa","abc","ccc"]
var newarr = arr.filter(item=>item.includes("a"))
console.log(newarr)