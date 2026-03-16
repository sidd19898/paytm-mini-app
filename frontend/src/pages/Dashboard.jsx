import axios from "axios";
import { Appbar } from "../components/Appbar.jsx";
import { Balance } from "../components/Balance.jsx";
import { Users } from "../components/Users.jsx";



export default function Dashboard () {
  const settoken = localStorage.getItem("token");
  const sendData = async () => {
    try{
      const response = await axios.post("http://localhost:3000/api/v1/user/profile",{
    headers:{'authorization':settoken}
  });
}catch(error){
  console.error(error);
}
}

getUser();
  return (
    <div>
      <Appbar children1={"Payments App"} children2={"Hello, User"}></Appbar>
      <Balance children1={"Your Balance :"} children2={"Rs 10,000"}></Balance>
      <Users children1={"Users"} children3={"Siddhant Angane"} children4={"send money"}></Users>
    </div>
  )
}
