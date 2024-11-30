import Navbar from "@/components/Navbar";
import Sidebar from "@/components/SideBar";
import React, { ReactNode } from "react";

const UserLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="d-flex" style={{height:"100vh"}}>
      <Sidebar />
      <div style={{width:"100%",background:"#1f1d1b",overflow:"hidden"}} className="container-fluid">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default UserLayout;
