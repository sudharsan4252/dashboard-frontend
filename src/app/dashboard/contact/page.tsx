'use client'
import React, { useEffect, useState } from "react";


const contact: React.FC = () => {
  const [users, setUsers] = useState([])
  let getData = async () => {
    const dataResp = await fetch(`${process.env.NEXT_PUBLIC_URL}/users`)
    console.log(`${process.env.NEXT_PUBLIC_URL}`)
    const data = await dataResp.json()
    setUsers(data)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <main>
      <h6 className="text-3xl">User list page</h6>
      <br />
      <div className="flex gap-2 flex-col px-1">
        {users.map((item: any) => (
          <div key={item.id} className="border-green-500 border-2 rounded-md flex flex-col gap-1 px-2">
            <div ><span className="text-orange-600">FirstName: </span>{item.fname}</div>
            <div ><span className="text-orange-600">LastName: </span> {item.lname}</div>
            <div ><span className="text-orange-600">Dob: </span> {item.Dob}</div>
            <div ><span className="text-orange-600">Email: </span> {item.email}</div>
            <div ><span className="text-orange-600">ROllno: </span>: {item.Rollno}</div>
            <div ><span className="text-orange-600">CreatedAt: </span> {item.createdAt}</div>
            <div ><span className="text-orange-600">UpdatedAt: </span> {item.updatedAt}</div>
          </div>

        ))}
      </div>
    </main>
  )
}
export default contact;