
import {Header} from '../components/Header.jsx'
import {Subheader} from '../components/Subheader.jsx'
import {Inputbox} from '../components/Inputbox.jsx'
import {Button} from '../components/Button.jsx'
import { Bottomwarning } from '../components/Bottomwarning.jsx'



export default function Signin() {
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='w-96 h-fit bg-white pt-5 rounded-md pl-5 pr-5 pb-10 inset-shadow-sm shadow-xl/120'>
            <Header children={"Sign in"}></Header>
            <Subheader children={"Enter your credentials to access your account"}></Subheader>
            <Inputbox children1={"Email"}></Inputbox>
            <Inputbox children1={"password"}></Inputbox>
            <Button children={"Sign in"}></Button>
            <Bottomwarning children={"Don't have an account?"} children2={"Sign Up"}></Bottomwarning>
                </div>
                </div>
  )
}
