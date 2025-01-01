import {Outlet} from "react-router-dom";
import {useState} from "react";

function Template(){
    const [input,setInput]=useState("")
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <input onChange={(e)=>setInput(e.target.value)}/>
            <Outlet/>
        </div>
    )
}
export default Template