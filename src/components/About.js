import { render } from "react-dom";
import { Outlet } from "react-router-dom";
import ProfileFunctionComponent from "./Profile";
import Profile from "./ProfileClass";
import React from "react";


// const About2 = () => {
//   return (
//     <div>
//       <h1> about us</h1>
//       {<Profile name={"harsh kumar"}/>}
//       {<ProfileFunctionComponent  name={"harsh"}/>}
//       <p> this is react course</p>
//     </div>
//   );
// };

class About extends React.Component{

  constructor(props){
    super(props);
    
    //console.log("constrctor")

  }
    componentDidMount(){
    
    
    console.log("componentDidMount")
  }



  render(){
    console.log(" render")
    return (
      <div>
        <h1> about us</h1>
        {<Profile name={"harsh kumar"}/>}
        {<ProfileFunctionComponent  />}
        <p> this is react course</p>
      </div>
    );

  }
}

export default About;
