import React, { Fragment, ReactNode } from "react";
import Sidebar from "./sidebar";
type Layoutprops = {
    children: ReactNode;
};
const Layout: React.FC<Layoutprops> = ({ children }) => {
    return (
        <main className="flex">
            <Sidebar />
            <main className="pl-4 w-full">{children}</main>
        </main>
    )
}

export default Layout;