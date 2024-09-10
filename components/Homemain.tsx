import Link from "next/link";
import React from "react";

interface HomemainProps { }

const Homemain: React.FC<HomemainProps> = () => {
    return (
        <>

            <div>

                <div className="my_back">

                    {/*  */}

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

                    {/*  */}

                    <div className="container_blc relative flex items-center justify-center">

                        <img src="/icons/half_ball.png" alt="" className="absolute top-[220px] left-[20px] w-[65px] h-[66px]" />

                        <img src="/icons/ring.png" alt="" className="absolute top-[370px] right-[0] w-[103px] h-[109px] object-contain" />

                        <div className="w-[900px] mt-[35px]">

                            <img src="/images/best_text.png" alt="" className="pointer-events-none" />

                            <div className="flex items-center justify-center flex-col gap-[40px]">

                                <p className="text-[#FFFFFF] text-[20px] leading-[30px] font-normal text-center">From custom software development to cybersecurity, our team of experts is dedicated to delivering solutions that are tailored to your unique needs.</p>

                                <button className="flex items-center justify-center gap-7 bg-[#11112B] w-[300px] h-[70px] rounded-[15px] border-[1px] border-solid border-[#FFFFFF] text-[#FFFFFF] text-[16px] leading-[26px] font-semibold">EXPLORE NOW <img src="icons/arrow_left.png" alt="" /></button>

                            </div>

                        </div>

                        {/* <img src="/images/wireframe_vector.png" className="absolute bottom-[30px]" alt="" /> */}

                    </div>

                </div>

                <div className="wireframe mb-[500px]">

                    <div className="container_blc flex items-start justify-start">

                        <div className="relative flex flex-col gap-[40px] mt-[363px]">

                            <img src="/icons/half_ball.png" alt="" className="absolute top-0 left-[200px] w-[34px] h-[34px]" />

                            <div>

                                <h1 className="text-[#FFFFFF] text-[70px] leading-[90px] font-bold">Why <br /> Choose Us?</h1>

                            </div>

                            <div className="flex gap-[66px]">

                                <div className="flex flex-col gap-[75px]">

                                    <img src="/images/expertise.png" alt="" className="w-[160px] h-[140px] object-contain" />

                                    <div className="flex flex-col gap-4">

                                        <h4 className="text-[#FFFFFF] text-[32px] leading-[40px] font-semibold">expertise</h4>

                                        <p className="text-[#FFFFFF] text-[20px] leading-[30px] font-normal">Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.</p>

                                    </div>

                                </div>

                                <div className="flex flex-col gap-[75px]">

                                    <img src="/images/technology.png" alt="" className="w-[160px] h-[140px] object-contain" />

                                    <div className="flex flex-col gap-4">

                                        <h4 className="text-[#FFFFFF] text-[32px] leading-[40px] font-semibold">technology</h4>

                                        <p className="text-[#FFFFFF] text-[20px] leading-[30px] font-normal">We stay up to date with the latest trends and technologies in the IT industry, so you can get the most advanced solutions available.</p>

                                    </div>

                                </div>

                                <div className="flex flex-col gap-[75px]">

                                    <img src="/images/solutions.png" alt="" className="w-[100px] h-[140px] object-contain" />

                                    <div className="flex flex-col gap-4">

                                        <h4 className="text-[#FFFFFF] text-[32px] leading-[40px] font-semibold">solutions</h4>

                                        <p className="text-[#FFFFFF] text-[20px] leading-[30px] font-normal">

                                            Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.

                                        </p>

                                    </div>

                                </div>

                                <div className="flex flex-col gap-[75px]">

                                    <img src="/images/results.png" alt="" className="w-[160px] h-[140px] object-contain" />

                                    <div className="flex flex-col gap-4">

                                        <h4 className="text-[#FFFFFF] text-[32px] leading-[40px] font-semibold">expertise</h4>

                                        <p className="text-[#FFFFFF] text-[20px] leading-[30px] font-normal">Our track record speaks for itself – we've helped businesses of all sizes and industries achieve their goals with our IT solutions.</p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="bg-[#D5D9E5] w-full h-[100vh]">

                    <div className="white_back">

                        <div className="container_blc relative">

                            <img src="/icons/half_ball.png" alt="" className="absolute top-0 left-0 w-[34px] h-[34px]" />

                            <img src="/icons/ring.png" alt="" className="absolute top-0 right-0 w-[92px] h-[77px] object-contain" />

                            <div className="flex items-center justify-center flex-col gap-[70px]">

                                <div>

                                    <div className="flex items-center justif-center flex-col gap-8">

                                        <div className="flex items-center justify-center flex-col">

                                            <div className="flex items-center justify-center gap-5">

                                                <h1 className="text-[#11112B] text-[70px] leading-[90px] font-bold text-center">We believe that</h1>

                                                <h1 className="text-[#11112B] text-[70px] leading-[100px] italic text-center font-light">technology</h1>

                                            </div>

                                            <div className="flex items-center justify-center gap-5">

                                                <span className="text-[#11112B] text-[70px] leading-[90px] font-bold text-center">can</span>

                                                <h4 className="transp_text">change</h4>

                                                <span className="text-[#11112B] text-[70px] leading-[90px] font-bold text-center">the world.</span>

                                            </div>

                                        </div>

                                        <div>

                                            <p className="w-[855px] text-[#11112B] text-[20px] leading-[30px] font-normal text-center">That's why we're committed to delivering innovative IT solutions to businesses of all sizes. Our team of experienced professionals is dedicated to helping you achieve your goals and thrive in a rapidly evolving digital landscape.</p>

                                        </div>

                                    </div>

                                </div>

                                <div>

                                    <div className="flex items-center justify-center gap-2">

                                        <div className="flex items-center justify-center flex-col gap-3">

                                            <h1 className="text-[#11112B] text-[48px] leading-[72px] font-bold text-center">500+</h1>

                                            <h4 className="text-[#11112B] text-[20px] leading-[30px] font-normal text-center">Successful Projects</h4>

                                        </div>

                                        <div className="bg-[#11112B] w-[336px] h-[2px]"></div>

                                        <div className="flex items-center justify-center flex-col gap-2">

                                            <h1 className="text-[#11112B] text-[48px] leading-[72px] font-bold text-center">98%</h1>

                                            <h4 className="text-[#11112B] text-[20px] leading-[30px] font-normal text-center">Satisfied Clients</h4>

                                        </div>

                                        <div className="bg-[#11112B] w-[336px] h-[2px]"></div>

                                        <div className="flex items-center justify-center flex-col gap-2">

                                            <h1 className="text-[#11112B] text-[48px] leading-[72px] font-bold text-center">35+</h1>

                                            <h4 className="text-[#11112B] text-[20px] leading-[30px] font-normal text-center">Handled Countries</h4>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="container_blc h-[100vh] flex justify-center flex-col">

                    <div className="flex items-center justify-between">

                        <h1 className="text-[#FFFFFF] text-[70px] leading-[110px] font-bold">Client Stories</h1>

                        <img src="/icons/arrow_left_sec.png" alt="" className="w-[48px] h-[48px] cursor-pointer" />

                    </div>

                    <div className="flex items-center justify-center gap-[60px] mt-10 mb-20">

                        <div className="flex flex-col gap-[40px]">

                            <div className="flex flex-col gap-6">

                                <h1 className="text-[#92DEED] text-[48px] leading-[77px] font-bold">Amazing!</h1>

                                <p className="text-[#FFFFFF] text-[16px] leading-[30px] font-normal">“WaveNet's cybersecurity solution gave us the peace of mind we needed to focus on our business. They took the time to understand our unique needs and created a solution that protected our sensitive data and ensured compliance with industry regulations.”</p>

                            </div>

                            <div className="flex items-center justify-end gap-[40px]">

                                <div>

                                    <h4 className="text-[#FFFFFF] text-[20px] leading-[32px] font-bold text-right">Tom Johnson</h4>

                                    <p className="text-[#FFFFFF] text-[18px] leading-[30px] font-normal text-right">CIO of Mika Medika Healthcare</p>

                                </div>

                                <div>

                                    <img src="/images/man.png" alt="" className="w-[68px] h-[68px]" />

                                </div>

                            </div>

                        </div>

                        <div className="bg-[#FFFFFF] w-[2px] h-[383px] opacity-[50%]"></div>

                        <div className="flex flex-col gap-[40px]">

                            <div className="flex flex-col gap-6">

                                <h1 className="text-[#92DEED] text-[48px] leading-[77px] font-bold">Best Service</h1>

                                <p className="text-[#FFFFFF] text-[16px] leading-[30px] font-normal">“We were struggling to keep up with the demands of our growing business until we partnered with WaveNet. Their custom software development solution has helped us streamline our operations and improve efficiency, saving us time and money.”</p>

                            </div>

                            <div className="flex items-center justify-end gap-[40px]">

                                <div>

                                    <h4 className="text-[#FFFFFF] text-[20px] leading-[32px] font-bold text-right">Jane Doe</h4>

                                    <p className="text-[#FFFFFF] text-[18px] leading-[30px] font-normal text-right">COO of DEF Manufacturing</p>

                                </div>

                                <div>

                                    <img src="/images/woman.png" alt="" className="w-[68px] h-[68px]" />

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="flex items-center justify-between">

                        <img src="/icons/logo_fir.png" alt="" />

                        <img src="/icons/logo_fourth.png" alt="" />

                        <img src="/icons/logo_third.png" alt="" />

                        <img src="/icons/logo_sec.png" alt="" />

                        <img src="/icons/logo_fifth.png" alt="" />

                    </div>

                </div>

                <div className="h-[1300px] bg-[#D5D9E5] px-[75px] flex items-center justify-center">

                    <div className="container_blc flex justify-center flex-col">

                        <div className="flex justify-center flex-col gap-[50px]">

                            <div>

                                <h1 className="text-[#11112B] text-[70px] leading-[110px] font-bold text-center">Services</h1>

                            </div>

                            <div className="flex flex-col gap-[64px]">

                                <div className="flex flex-col gap-[24px]">

                                    <div className="flex items-center justify-between">

                                        <h1 className="text-[#11112B] text-[56px] leading-[84px] font-light italic">Web Development</h1>

                                        <img src="/icons/black_arrow_left.png" alt="" className="cursor-pointer" />

                                    </div>

                                    <div>

                                        <div className="w-full h-[2px] bg-[#11112B]"></div>

                                    </div>

                                </div>

                                <div className="flex flex-col gap-[24px]">

                                    <div className="flex items-center justify-between">

                                        <h1 className="text-[#11112B] text-[56px] leading-[84px] font-light italic">Mobile Development</h1>

                                        <img src="/icons/black_arrow_left.png" alt="" className="cursor-pointer" />

                                    </div>

                                    <div>

                                        <div className="w-full h-[2px] bg-[#11112B]"></div>

                                    </div>

                                </div>

                                <div className="flex flex-col gap-[24px]">

                                    <div className="flex items-center justify-center gap-[30px]">

                                        <div className="flex items-start justify-start flex-col gap-[37px]">

                                            <h1 className="text-[#11112B] text-[56px] leading-[72px] font-bold">Cyber Security</h1>

                                            <p className="text-[#11112B] text-[20px] leading-[30px] font-normal">Our cyber security service provides advanced protection for your data and systems <br /> against potential threats and attack ensuring your business operates securely and efficiently.</p>

                                            <img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/arrow-right-80.png" alt="" className="cursor-pointer" />

                                        </div>

                                        <div>

                                            <img src="/images/office.png" alt="" />

                                        </div>

                                    </div>

                                    <div>

                                        <div className="w-full h-[2px] bg-[#11112B]"></div>

                                    </div>

                                </div>

                                <div className="flex flex-col gap-[24px]">

                                    <div className="flex items-center justify-between">

                                        <h1 className="text-[#11112B] text-[56px] leading-[84px] font-light italic">Digital Marketing</h1>

                                        <img src="/icons/black_arrow_left.png" alt="" className="cursor-pointer" />

                                    </div>

                                    <div>

                                        <div className="w-full h-[2px] bg-[#11112B]"></div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Homemain;