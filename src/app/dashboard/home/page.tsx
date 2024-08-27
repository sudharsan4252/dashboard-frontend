"use client";
import axios from "axios";
import React, { useState } from "react";
const Home: React.FC = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    Dob: "2004-02-25",
    Rollno: ""
  })
  const onChangeHandler = async(event:any) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
    
  }
  const printdata = async(event:any)=>{
    event.preventDefault();
    console.log(data)
    let response = await axios.post("http://localhost:3004/users", data)
    console.log(response);
  }
  return (
    <main className=" flex box-border justify-center items-start mt-24">
      <div className="w-[500px]  h-[420px] border-green-700 border-2 rounded-lg pt-4">
        <form onSubmit={printdata} className="flex flex-col px-2 items-start gap-1">
          <label htmlFor="fname">First name:</label>
                  <input type="text"
                  value={data.fname}
                  name="fname"
                  onChange={onChangeHandler}
                  className="outline-0 block w-full rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  placeholder="sudharsan"/>
          <label htmlFor="lname">Last Name:</label>
                <input 
                type="text" 
                value={data.lname}
                name="lname"
                onChange={onChangeHandler}
                className="outline-0 block w-full rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                placeholder="P"/>
          <label htmlFor="lname">Email</label>
          <input
            type="email"
            value={data.email}
            name="email"
            onChange={onChangeHandler}
            className="outline-0 block w-full rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            placeholder="sudharsan4252@gmail.com" />
          <label htmlFor="age">DOB</label>
                  <input 
                type="date"
                name="Dob"
                value={data.Dob}
                onChange={onChangeHandler}
                      className={`outline-0 block w-full rounded-md border-0 py-1.5 pl-7 pr-8 ring-1 ring-inset ring-red-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ${data.Dob=== "2004-02-25" ? "text-gray-400" : "text-orange-500"}`} />
          <label htmlFor="rollno">Roll No</label>
                  <input 
                  type="text"
                  name="Rollno"
                  value={data.Rollno}
                  onChange={onChangeHandler} 
                  className="outline-0 block w-full rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  placeholder="21IT199"  />
                  <button type="submit" className="mt-3  px-4 border-2 p-1 border-red-500 rounded-xl bg-orange-500">submit</button>
        </form>
      </div>
    </main>
  );
};

export default Home;
