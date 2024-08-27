'use client'
import { useRouter } from 'next/navigation'
import React,{ Fragment, ReactNode } from "react";
const Login:React.FC=()=>{
    const router=useRouter();
return(
    <Fragment >
        <div className="py-16 h-screen box-border flex">
            <div className="flex justify-center my-auto w-7/12 bg-white rounded-3xl shadow-lg overflow-hidden  mx-auto  h-3/4">
                <div className="block flex-1
                bg-[url('https://images.unsplash.com/photo-1536195892759-c8a3c8e1945e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D')] bg-cover  bg-center  ">
            </div>
            <div className="flex flex-1  flex-col  justify-center ">
                <div className="px-4">
                <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                    <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                </div>
                <div className="mt-4 ">
                    <div className="flex justify-between">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                    </div>
                    <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                </div>
                    <div>
                            <button type="button" onClick={() => router.push('/dashboard')} className="mt-4 bg-gray-700 text-gray-200 w-20 h-8 rounded px-1 border-green-50"  >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
)
}
export default Login;