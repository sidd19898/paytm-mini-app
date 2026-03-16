import {Header} from '../components/Header.jsx'
import {Subheader} from '../components/Subheader.jsx'
import {Inputbox} from '../components/Inputbox.jsx'
import {Button} from '../components/Button.jsx'
import { Bottomwarning } from '../components/Bottomwarning.jsx'
import axios from "axios";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {

  const[firstName,setfirstName] = useState("");
  const[lastName,setlastName] = useState("");
  const[userName,setuserName] = useState("");
  const[password,setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-center h-screen'>
    <div className='w-96 h-fit bg-white pt-5 rounded-md pl-5 pr-5 pb-10 shadow-xl/120 inset-shadow-sm'>
      <Header children={"Sign up"}></Header>
      <Subheader children={"Enter your information to create an account"}></Subheader>
      <Inputbox onChange={e => {setfirstName(e.target.value)}} children1={"First Name"}></Inputbox>
      <Inputbox onChange={e => {setlastName(e.target.value)}} children1={"Last Name"}></Inputbox>
      <Inputbox onChange={e => {setuserName(e.target.value)}} children1={"Email Name"}></Inputbox>
      <Inputbox onChange={e => {setPassword(e.target.value)}} children1={"password"}></Inputbox>
      <Button onClick={async()=>{
        
        const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
          username : userName,
          firstname : firstName,
          lastname : lastName,
          password : password
        });

        localStorage.setItem("token",response.data.token)
        navigate("/dashboard")
      }} children={"Sign up"}></Button>
      <Bottomwarning children={"Already have an account?"} children2={"Sign In"}></Bottomwarning>
          </div>
          </div>
  )
}
