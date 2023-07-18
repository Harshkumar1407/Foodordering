import { useState } from "react";


const Profile=(props)=>{
    const[cont,setCont]=useState(0)
    return(
        <div>
            <h1>profile</h1>
            <h2>Name:{props.name}</h2>
            <h2>{cont}</h2>
            <button onClick={()=> setCont(1)
        
                }>setCont</button>
        </div>
    )
}
export default Profile;