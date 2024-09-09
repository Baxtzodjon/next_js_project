import React from "react";

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
    return (
        <>

            <footer className="container_blc flex flex-col gap-[80px] py-[50px]">

                <div className="flex justify-between">

                    <div>

                        <div className="flex flex-col gap-[170px]">

                            <a href="#">

                                <img src="/icons/logo.png" alt="" className="w-[176px] h-[28px] object-cover" />

                            </a>

                            <div className="flex gap-[32px]">

                                <a href="#">

                                    <img src="/icons/instagram.png" alt="" className="w-[33px] h-[32px] object-contain" />

                                </a>

                                <a href="#">

                                    <img src="/icons/facebook.png" alt="" className="w-[33px] h-[32px] object-contain" />

                                </a>

                                <a href="#">

                                    <img src="/icons/twitter.png" alt="" className="w-[33px] h-[32px] object-contain" />

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="flex gap-[80px]">

                        <div className="flex flex-col gap-6">

                            <div>

                                <h4 className="text-[#FFFFFF] text-[28px] leading-[40px] font-semibold">Explore</h4>

                            </div>

                            <div className="flex flex-col gap-4">

                                <a href="#" className="text-[#FFFFFF] text-[18px] leading-[30px] font-normal opacity-[75%] hover:[#f5f5f5] hover:opacity-[100%] duration-200">About Us</a>

                                <a href="#" className="text-[#FFFFFF] text-[18px] leading-[30px] font-normal opacity-[75%] hover:[#f5f5f5] hover:opacity-[100%] duration-200">Services</a>

                                <a href="#" className="text-[#FFFFFF] text-[18px] leading-[30px] font-normal opacity-[75%] hover:[#f5f5f5] hover:opacity-[100%] duration-200">Pricing</a>

                                <a href="#" className="text-[#FFFFFF] text-[18px] leading-[30px] font-normal opacity-[75%] hover:[#f5f5f5] hover:opacity-[100%] duration-200">Blog</a>

                                <a href="#" className="text-[#FFFFFF] text-[18px] leading-[30px] font-normal opacity-[75%] hover:[#f5f5f5] hover:opacity-[100%] duration-200">Contact</a>

                            </div>

                        </div>

                        <div className="flex flex-col gap-6">

                            <div>

                                <h4 className="text-[#FFFFFF] text-[28px] leading-[40px] font-semibold">Contact</h4>

                            </div>

                            <div className="flex flex-col gap-4">

                                <a href="#" className="text-[#FFFFFF] text-[18px] leading-[30px] font-normal opacity-[75%] hover:[#f5f5f5] hover:opacity-[100%] duration-200">Email</a>

                                <a href="#" className="text-[#FFFFFF] text-[18px] leading-[30px] font-normal opacity-[75%] hover:[#f5f5f5] hover:opacity-[100%] duration-200">Phone</a>

                                <a href="#" className="text-[#FFFFFF] text-[18px] leading-[30px] font-normal opacity-[75%] hover:[#f5f5f5] hover:opacity-[100%] duration-200">Address</a>

                                <a href="#" className="text-[#FFFFFF] text-[18px] leading-[30px] font-normal opacity-[75%] hover:[#f5f5f5] hover:opacity-[100%] duration-200">Social Media</a>

                            </div>

                        </div>

                        <div className="flex flex-col gap-6">

                            <div className="text-[#FFFFFF] text-[28px] leading-[40px] font-semibold">Newsletter</div>

                            <div className="flex flex-col gap-[43px]">

                                <p className="text-[#FFFFFF] text-[18px] leading-[30px] font-normal opacity-[75%]">Subscribe to our newsletter to stay informed about <br /> our latest products, services, and promotions. <br /> Feel free to unsubscribe anytime!</p>

                                <div className="relative">

                                    <input type="text" placeholder="Enter Your Email Address ..." className="w-[400px] h-[80] bg-[#11112B] rounded-[5px] border-[1px] border-solid border-[#D5D9E5] outline-none px-6 py-[18px] text-[#FFFFFF] text-[18px] leading-[30px] font-normal" />

                                    <img src="/icons/arrow_left_sec.png" className="absolute top-[20px] right-6 cursor-pointer" alt="" />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div>

                    <div className="flex flex-col gap-4">

                        <div className="w-full border-2 border-solid border-[#FFFFFF] opacity-[50%]"></div>

                        <div className="flex items-center justify-between">

                            <span className="text-[#FFFFFF] text-[14px] leading-[26px] font-normal opacity-[50%]">Copyright © 2023 for WaveNet. All rights reserved.</span>

                            <span className="text-[#FFFFFF] text-[14px] leading-[26px] font-normal opacity-[50%]">Terms & Condition  |  Privacy Policy</span>

                        </div>

                    </div>

                </div>

            </footer>

        </>
    )
}

export default Footer;