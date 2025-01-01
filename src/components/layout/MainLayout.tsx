import React from "react"
import Navbar from "../Navbar"
import NavBottom from "../NavBottom"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 min-h-screen">
                <div className="px-4 lg:container py-3">
                    {children}
                </div>
            </div>
            <NavBottom />
        </>
    )
}

export default MainLayout