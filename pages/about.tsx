import Link from "next/link";
import React from "react";

interface homeProps {

}

const home: React.FC<homeProps> = () => {
    return (
        <>

            <div className="project_back">

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

                                <Link href="/about" className="text-[#FFFFFF] text-[16px] leading-[26px] font-normal hover:text-gray-500 duration-200">ABOUT US</Link>
                                <Link href="/" className="text-[#FFFFFF] text-[16px] leading-[26px] font-normal hover:text-gray-500 duration-200">SERVICES</Link>
                                <Link href="/" className="text-[#FFFFFF] text-[16px] leading-[26px] font-normal hover:text-gray-500 duration-200">PRICING</Link>
                                <Link href="/" className="text-[#FFFFFF] text-[16px] leading-[26px] font-normal hover:text-gray-500 duration-200">BLOG</Link>
                                <Link href="/" className="text-[#FFFFFF] text-[16px] leading-[26px] font-normal hover:text-gray-500 duration-200">CONTACT</Link>

                            </ul>

                        </div>

                        <div className="flex items-center gap-6">

                            <button className="w-[123px] h-[58px] bg-transparent rounded-[10px] border-[2px] border-solid border-[#FFFFFF] text-[#FFFFFF] text-[16px] leading-[26px] font-semibold">SIGN IN</button>

                            <img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-32.png" alt="" className="cursor-pointer md:hidden" />

                        </div>

                    </nav>

                </header>

                <div className="container_blc">

                    <div className="flex items-center justify-between mt-[100px]">

                        <h1 className="text-[#FFFFFF] text-[70px] leading-[110px] font-bold">Projects</h1>

                        <p className="text-[#FFFFFF] text-[16px] leading-[30px] font-normal">As an IT company, we pride ourselves on delivering customized solutions that <br /> meet our clients' unique needs. Our projects highlight our expertise in web & <br /> mobile development, cloud computing, cybersecurity, and digital marketing.</p>

                    </div>

                    <div className="flex items-center justify-center gap-[30px] mt-[85px]">

                        <div>

                            <img src="/images/notebook.png" alt="" className="w-[600px] h-[590px]" />

                        </div>

                        <div className="light_blc">

                            <h4 className="text-[#FFFFFF] text-[20px] leading-[30px] font-normal text-center tracking-[10px]">CYBER SECURITY</h4>

                            <h1 className="text-[#FFFFFF] text-[70px] leading-[80px] font-bold text-center pt-[24px] pb-[12px]">Mika <br /> Medika</h1>

                            <p className="text-[#FFFFFF] text-[20px] leading-[30px] font-normal text-center">Mika Medika Healthcare, a large hospital network, was <br /> concerned about the security of their patient data.</p>

                            <button className="w-[213px] h-[64px] bg-[#FFFFFF] rounded-[10px] text-[#11112B] text-[16px] leading-[26px] font-bold mt-[40px]">READ MORE</button>

                        </div>

                    </div>

                    <div className="relative flex justify-between mt-[200px]">

                        <div>

                            <h1 className="text-[#FFFFFF] text-[70px] leading-[90px] font-bold">Got Any <br /> Questions?</h1>

                            <img src="/icons/half_ball.png" alt="" className="absolute top-[250px] left-[320px] w-[42px] h-[42px]" />

                            <button className="flex items-center justify-center gap-7 bg-[#11112B] w-[300px] h-[70px] rounded-[15px] border-[1px] border-solid border-[#FFFFFF] text-[#FFFFFF] text-[16px] leading-[26px] font-semibold mt-[234px]">ASK A QUESTION <img src="icons/arrow_left.png" alt="" /></button>

                        </div>

                        <div className="flex flex-col gap-[24px]">

                            <div className="flex flex-col gap-3">

                                <div className="w-[600px] h-[65px] flex items-center justify-between">

                                    <h1 className="text-[#FFFFFF] text-[24px] leading-[40px] font-bold">What services does WaveNet offer?</h1>

                                    <div className="text-[#FFFFFF] text-[42px]">+</div>

                                </div>

                                <div>

                                    <div className="w-full h-[2px] bg-[#FFFFFF] opacity-[25%]"></div>

                                </div>

                            </div>

                            <div className="flex flex-col gap-3">

                                <div className="w-[600px] h-[65px] flex items-center justify-between">

                                    <h1 className="text-[#FFFFFF] text-[24px] leading-[40px] font-bold">Which IT solution is for my business?</h1>

                                    <div className="text-[#FFFFFF] text-[42px]">+</div>

                                </div>

                                <div>

                                    <div className="w-full h-[2px] bg-[#FFFFFF] opacity-[25%]"></div>

                                </div>

                            </div>

                            <div className="flex flex-col gap-3">

                                <div className="w-[600px] h-[65px] flex items-center justify-between">

                                    <h1 className="text-[#FFFFFF] text-[24px] leading-[40px] font-bold">How much do the services cost?</h1>

                                    <div className="text-[#FFFFFF] text-[42px]">+</div>

                                </div>

                                <div>

                                    <div className="w-full h-[2px] bg-[#FFFFFF] opacity-[25%]"></div>

                                </div>

                            </div>

                            <div className="flex flex-col gap-3">

                                <div className="w-[600px] h-[65px] flex items-center justify-between">

                                    <h1 className="text-[#FFFFFF] text-[24px] leading-[40px] font-bold">How do I get started with the IT solutions</h1>

                                    <div className="text-[#FFFFFF] text-[42px]">+</div>

                                </div>

                                <div>

                                    <div className="w-full h-[2px] bg-[#FFFFFF] opacity-[25%]"></div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default home;