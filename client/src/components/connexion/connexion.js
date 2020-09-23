import React , {useState} from 'react'
import axios from "axios"
var URLConnexion = "http://localhost:8080/connexion"
const Connexion=()=>{
    const[name, setName]=useState("")
    const [password, setPassword]= useState("")
    const [pass, setPass]= useState("")
    const check=()=>{
        console.log(name)
        console.log(password)
        let request= {userName:name, password:password}
        axios.post(URLConnexion , request).then(resp=>{
            console.log(resp);
            localStorage.setItem("email", resp.data.email);
            localStorage.setItem("address", resp.data.address)
            localStorage.setItem("userName", name)
        })
        .catch(err=>{console.log(err)})
setPass("save")
    //     fetch('https://localhost:8080/connexion', {
    //     method: 'POST',
    //     // We convert the React state to JSON and send it as the POST body
    //     body: {"UserName": UserName, "Password":password}
    //   }).then(function(response) {
    //     console.log(response)
    //     return response.json();
    //   });
// console.log(connect)    
}
    return(
        <div>
            <input  placeholder="UserName" onChange={(e)=>{setName(e.target.value)}}/>
            <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
            <button  onClick={check}>connexion</button>

        </div>
    )
}
export default Connexion