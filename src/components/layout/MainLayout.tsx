import React from "react"
import Navbar from "../Navbar"
import NavBottom from "../NavBottom"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <div className="bg-red-100">
                {children}
            </div>
            <NavBottom />
        </>
    )
}

export default MainLayout