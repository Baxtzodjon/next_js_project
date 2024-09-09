import Link from "next/link";
import React from "react";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {

    function onToggleMenu(e: any) {
        console.log(e)
    }

    return (
        <>

            <header className="container_blc pt-[35px]">

                <img src="/icons/half_ball.png" alt="" className="absolute top-[20px] right-[350px] w-[33px] h-[34px]" />

                <nav className="flex items-center justify-between">

                    <div>

                        <a href="#">

                            <img src="/icons/logo.png" alt="logo" className="w-[176px] h-[28px] object-cover" />

                        </a>

                    </div>

                    <div className="md:static absolute md:min-h-fit min-h-[60vh] top-[-100%] left-0 md:w-auto w-full flex items-center px-5">

                        <ul className="flex md:flex-row flex-col md:items-center md:gap-16">

                            {/* <li><a href="#" className="text-[#FFFFFF] text-[16px] leading-[26px] font-normal">ABOUT US</a></li>
                                <li><a href="#" className="text-[#FFFFFF] text-[16px] leading-[26px] font-normal">SERVICES</a></li>
                                <li><a href="#" className="text-[#FFFFFF] text-[16px] leading-[26px] font-normal">PRICING</a></li>
                                <li><a href="#" className="text-[#FFFFFF] text-[16px] leading-[26px] font-normal">BLOG</a></li>
                                <li><a href="#" className="text-[#FFFFFF] text-[16px] leading-[26px] font-normal">CONTACT</a></li> */}

                            <Link href="/about" className="text-[#FFFFFF] text-[16px] leading-[26px] font-normal hover:text-gray-500 duration-200">ABOUT US</Link>
                            <Link href="/" className="text-[#FFFFFF] text-[16px] leading-[26px] font-normal hover:text-gray-500 duration-200">SERVICES</Link>
                            <Link href="/" className="text-[#FFFFFF] text-[16px] leading-[26px] font-normal hover:text-gray-500 duration-200">PRICING</Link>
                            <Link href="/" className="text-[#FFFFFF] text-[16px] leading-[26px] font-normal hover:text-gray-500 duration-200">BLOG</Link>
                            <Link href="/" className="text-[#FFFFFF] text-[16px] leading-[26px] font-normal hover:text-gray-500 duration-200">CONTACT</Link>

                        </ul>

                    </div>

                    <div className="flex items-center gap-6">

                        <button className="w-[123px] h-[58px] bg-transparent rounded-[10px] border-[2px] border-solid border-[#FFFFFF] text-[#FFFFFF] text-[16px] leading-[26px] font-semibold">SIGN IN</button>

                        <img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-32.png" alt="" className="cursor-pointer md:hidden" onClick={onToggleMenu} />

                    </div>

                </nav>

            </header>

        </>
    )
}

export default Header;