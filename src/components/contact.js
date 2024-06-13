import React from "react";
import { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");
  const [address, setAddress] = useState("");
  const [message,setMessage]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
    clearForm();
  };
  const clearForm = () => {
    setFirstName("");
    setEmail("");
    setMob("");
    setAddress("");
    setMessage("");
  };
  return (
    <div
      id="contact"
      className=" bg-gradient-to-r  bg-blue-100 pt-20 h-[800px] pb-10 flex justify-center items-center flex-col"
    >
      <div className="flex   pt-4 items-center flex-col justify-between p-4'">
        <div className=" my-10 pt-4">
          <h className="text-4xl text-center font-bold leading-loose bg-red-500 bg-gradient-to-l from-red-950  bg-clip-text text-transparent -mt-28 ">
           CONTACT US
          </h>
          
          <div className="border-b-2 w-64 -mt-2 border-indigo-500">
            </div>
            <div className=" flex items-center border-b-2 w-32 ml-14 p-1 border-red-950">
            </div>
        </div>
        <div >
        <p className="text-xl text-black font-medium ">Connect with us for an unforgettable experience. We’d love to hear from you.<br></br>
             </p>
        </div>
        
      </div>
      <div className="flex justify-center  w-2/3 ">
        <form
          onSubmit={handleSubmit}
          className="pt-10 pb-10 flex justify-center items-center flex-col w-full px-10"
        >
          <div className="flex w-full ">
            <input
              className=" w-[400px] text-xl pt-4 p-4 m-4 rounded-lg h-14 hover:border-blue-400 border-solid border-b-2  border-black"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              placeholder="First Name*"
            ></input>
            <input
              className=" w-full text-xl pt-4 p-4 m-4 rounded-lg h-14 hover:border-blue-400 border-solid border-b-2  border-black"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email address"
              type="email"
            ></input>
          </div>
          <div className="flex w-full ">
            {" "}
            <input
              className=" w-[400px] text-xl p-4 m-4 rounded-lg h-14 hover:border-blue-400 border-solid border-b-2  border-black"
              value={mob}
              onChange={(e) => {
                setMob(e.target.value);
              }}
              placeholder="Enter Mob"
              type="mob"
            ></input>
            <input
              className=" w-full text-xl m-4 p-4 rounded-lg h-14 hover:border-blue-400 border-solid border-b-2  border-black"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              placeholder="Enter Address"
              type="mob"
            ></input>
          </div>

          <textarea
           value={message}
           onChange={(e) => {
             setMessage(e.target.value);
           }}
           type="textArea"
           placeholder="Enter message*"
            className="text-2xl p-4 w-[600px] pt-4 m-4 h-[150px] rounded-xl  hover:border-red-700 border-solid border-2  border-black "></textarea>
          <button className=" bg-white rounded-lg pt-2 pb-2 w-[25%] pr-4 pl-4 text-black font-bold hover:bg-blue-500">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
