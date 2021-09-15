import React , {useState} from 'react'
import './NewUser.css'
import axios from 'axios'

const NewUser = () => {
    const[username,setusername] = useState("")
    const[email,setemail] = useState("")
    const[phone,setphone] = useState("")
    const[dob,setdob] = useState("")
    const[address,setaddress] = useState("")
    
    const adduser = () =>{
        axios.post("http://localhost:5000/newmodels/insert",{username:username,email:email,phone:phone,dob:dob,address:address})
    }

    return (
        <>
            <div className="NewUser">
                <div className="NewUserTitle">
                    <span className="NewUserTitlename">Create New User</span>
                    </div>
                    <div className="NewUserLeft">
                        
                    <label style={{marginTop:'25px'}}>Username</label>
                    <input onChange={(event)=>{
                        setusername(event.target.value)
                    }} type="text" className="NewuserInput" placeholder="Talha" />
                    <label>Email</label>
                    <input onChange={(event)=>{
                        setemail(event.target.value)
                    }}  type="text" className="NewuserInput" placeholder="Muhammadtalha6063@gmail.com" />
                    <label>Phone</label>
                    <input  onChange={(event)=>{
                        setphone(event.target.value)
                    }} type="text" className="NewuserInput" placeholder="+92 315 000 3450" />
                    <label>Date or Birth</label>
                    <input  onChange={(event)=>{
                        setdob(event.target.value)
                    }} type="text" className="NewuserInput" placeholder="9/7/1999" />
                    <label>Address</label>
                    <input  onChange={(event)=>{
                        setaddress(event.target.value)
                    }} type="text" className="NewuserInput" placeholder="Madina Town | Faisalabad" />
                    <button onClick={adduser} className="NewUserBtn">Sign up</button>
                </div>
               
                <div className="NewUserRight"></div>
               
            </div>
              
        </>
    )
}

export default NewUser
