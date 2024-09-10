import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

interface LayoutProps {
    children: React.ReactElement
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <>

            <div className="my_backd">

                {/* <Header /> */}

                {children}

                {/* <Footer /> */} {/* я временно выключил это footer */}

            </div>

        </>
    )
}

export default Layout;