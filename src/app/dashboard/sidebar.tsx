'use client'
import React, { useEffect, useState } from "react";
import Link from 'next/link';

const Sidebar: React.FC = () => {
    const [Selectedele, Setele] = useState<string>("");

    useEffect(() => {
        console.log(Selectedele);
    }, [Selectedele]);

    const list: string[] = ['about', 'home', 'contact', 'help'];

    return (
        <div className="flex flex-col w-48 h-screen shadow-2xl">
            <div className="w-full flex text-xl justify-center items-center h-12 bg-zinc-300 border-b-2 border-zinc-700">
                Dashboard
            </div>
            <div className="w-full mt-4">
                {list.map((item) => (
                    <Link
                        key={item}
                        className={`items-center text-2xl active:bg-violet-300 border-b-2 w-full border-pink-500 flex flex-col h-12 justify-center px-2 ${Selectedele === item ? 'text-pink-500' : ''}`}
                        href={`/dashboard/${item}`}
                        onClick={() => Setele(item)}
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
