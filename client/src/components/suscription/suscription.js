import React, {useState} from "react"
import styles from "./suscription.module.css"
import axios from "axios"
const Suscription =()=>{
    const[name, setName]=useState("")
    const [password, setPassword]= useState("")
    const [address, setAddress] =useState("")
    const [mail ,setMail] = useState("")
    const [displayLogOut, setDisplayLogOut]=useState(false)
    var URLConnexion = "http://localhost:8080/connexion/suscription"
    const addUser=()=>{
        console.log(name)
        console.log(password)
        let request= {userName:name, password:password ,email:mail, address }
        axios.post(URLConnexion , request).then(resp=>{localStorage.setItem("email", resp.data.email) }).catch(err=>{console.log(err)}) 
    }
    const logout =()=>{
if (localStorage.getItem("email") !== null) {
    localStorage.removeItem("email")
            localStorage.removeItem("address")
            localStorage.removeItem("userName")
}
    }
    return(
        <>
        <input  placeholder="UserName" onChange={(e)=>{setName(e.target.value)}}/>
            <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
            <input  placeholder="Addresse" onChange={(e)=>{setAddress(e.target.value)}}/>
            <input type="text" placeholder="votre mail" onChange={(e)=>{setMail(e.target.value)}} />
            <button  onClick={addUser}>inscription</button>
            {localStorage.getItem("email") !== null && <button onClick={logout}>se deconnecter</button>}
        </>
    )
}
export default Suscription