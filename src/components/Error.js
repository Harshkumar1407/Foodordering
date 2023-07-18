
import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    console.log(err)
    return(
        <div>
            <h1>opps!!</h1>
            <h2>something weny worng</h2>
        </div>
    )
}
export default Error;