import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        console.log("constrctor-child")
        this.state={
            userInfo:{
              name:"dummy-name",
              location:"dummy-location",
      
            }
          }
    }
    async componentDidMount(){
    
        //api call
        const data= await fetch("https://api.github.com/users/akshaymarch7");
        const json=await data.json();
        console.log(json)
        this.setState({
          userInfo:json
        })
        console.log("componentDidMount-child")
      }
    render(){
        console.log(" render-child")
        return(
            <div>
                <h2>profile class component</h2>
                <img src={this.state.userInfo.avatar_url}/>
                <h2>count:{this.state.userInfo.name}</h2>
                <h2>count:{this.state.userInfo.location}</h2>
                
            </div>
        )
    }
}
export default Profile;