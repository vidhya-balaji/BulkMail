import { useState } from "react";
import axios from 'axios';
function App() {
  const [msg,setmsg]=useState("");
  function handleChange(event)
  {
    setmsg(event.target.value);
    console.log(msg);
  }

  function send()
  {
    axios("http://localhost:5000/sendemail",{msg:msg})
  }
  return (
    <div className="text-black">
      <div class="text-center bg-blue-800 p-5 text-3xl">
        <h1 >Bulk Email</h1>
      </div>
      <div className="text-center bg-blue-600 p-5 text-2xl">
        <h1 >We can help to send bulk email</h1>
      </div>
      <div className="text-center bg-blue-400 p-5 text-1xl">
        <h1 >Drag and Drop</h1>
      </div>
      <div className="text-center bg-blue-300 p-5 text-1xl">
        <textarea value={msg} onChange={handleChange} className="w-[80%] h-32 p-4 rounded-md" placeholder="Enter your message....."></textarea>
      </div>
      <div className="text-center bg-blue-300 p-5 text-1xl">
        <input type="file" className="border-4 border-dashed py-3 px-2 mb-3"></input>
      </div>
      <div className="bg-blue-200 text-center text-black p-4">
      <p>Total Emails in the file : 0</p>
      <button onClick={send} className="bg-black text-white px-4 py-1 rounded-md mt-2">Send</button>
      </div>
    </div>
  )
}
export default App;