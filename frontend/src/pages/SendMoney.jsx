import { Send } from "../components/send.jsx"

export default function SendMoney() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Send children1={"Send Money"} children2={"Friend's Name"} children3={"Amount (in Rs)"} children4={"Initiate transfer"}></Send>
    </div>
  )
}
