import React from 'react'
import { RiLinkedinFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer className='w-full bg-black py-20 text-white'>
            <div className='max-w-[1000px] m-auto px-5'>
                <figure className='w-[200px] mb-10'>
                    <img src="images/8313a97515fcb0447d2d77c276532a511583262271.webp" alt="zomato-logo" className='w-full' />
                </figure>
                <div className='flex align-start justify-between gap-10'>
                    <div className='flex flex-col gap-5 md:flex-row align-start justify-between w-[50%] md:w-[80%] lg:w-[60%] '>
                        <div>
                            <h2 className='lg:text-xl font-medium lexend mb-3'>Eternal</h2>
                            <ul className='text-[#62626a] lexend flex flex-col gap-2'>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Zomato</li>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Blinkit</li>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>District</li>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Hyperpure</li>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Feeding India</li>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Investor Relations</li>
                            </ul>
                        </div>
                        <div className='hidden md:block lg:hidden '>
                            <h2 className='lg:text-xl font-medium lexend mb-3'>Learn More</h2>
                            <ul className='text-[#62626a] lexend flex flex-col gap-2'>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Privacy</li>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Security</li>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Terms of Service</li>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Help & Support</li>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Report a Fraud</li>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Blog</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='lg:text-xl font-medium lexend mb-3'>For Restaurants</h2>
                            <ul className='text-[#62626a] lexend flex flex-col gap-2'>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Partner With Us</li>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Apps For You</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='lg:text-xl font-medium lexend mb-3'>For Delivery <br /> Partners</h2>
                            <ul className='text-[#62626a] lexend flex flex-col gap-2'>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Partner With Us</li>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Apps For You</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-between flex-col md:flex-row  w-[50%] md:w-[20%] lg:w-[40%] '>
                        <div className='block md:hidden lg:block'>
                            <h2 className='lg:text-xl font-medium lexend mb-3'>Learn More</h2>
                            <ul className='text-[#62626a] lexend flex flex-col gap-2'>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Privacy</li>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Security</li>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Terms of Service</li>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Help & Support</li>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Report a Fraud</li>
                                <li className='hover:text-white cursor-pointer lg:text-[18px] text-[12px]'>Blog</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='lg:text-xl font-medium lexend mb-3'>Social Links</h2>
                            <ul className='text-[#62626a] lexend flex flex-col gap-2'>
                                <li>
                                    <ul>
                                        <li className='inline-block mr-1 bg-white p-[3px] rounded-full'>
                                            <a href="https://www.facebook.com/zomato" target="_blank" rel="noopener noreferrer" className='hover:text-white cursor-pointer text-[18px]'>
                                                <RiLinkedinFill className='text-black text-[16px]' />
                                            </a>
                                        </li>
                                        <li className='inline-block mr-1 bg-white p-[3px] rounded-full'>
                                            <a href="https://www.facebook.com/zomato" target="_blank" rel="noopener noreferrer" className='hover:text-white cursor-pointer text-[18px]'>
                                                <FaInstagram className='text-black text-[16px]' />
                                            </a>
                                        </li>
                                        <li className='inline-block mr-1 bg-white p-[3px] rounded-full'>
                                            <a href="https://www.facebook.com/zomato" target="_blank" rel="noopener noreferrer" className='hover:text-white cursor-pointer text-[18px]'>
                                                <FaYoutube className='text-black text-[16px]' />
                                            </a>
                                        </li>
                                        <li className='inline-block mr-1 bg-white p-[3px] rounded-full'>
                                            <a href="https://www.facebook.com/zomato" target="_blank" rel="noopener noreferrer" className='hover:text-white cursor-pointer text-[18px]'>
                                                <RiFacebookFill className='text-black text-[16px]' />
                                            </a>
                                        </li>
                                        <li className='inline-block mr-1 bg-white p-[3px] rounded-full'>
                                            <a href="https://www.facebook.com/zomato" target="_blank" rel="noopener noreferrer" className='hover:text-white cursor-pointer text-[18px]'>
                                                <FaXTwitter className='text-black text-[16px]' />
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className='flex flex-col justify-center gap-4 mt-4'>
                                <button className='transform transition-transform duration-300 hover:scale-105'>
                                    <figure className='w-[150px] sm:h-8 md:h-10 lg:h-12 cursor-pointer'>
                                        <img src="images/df6464de32f4a09262cee301f65aaa661739351256.webp" alt="ios play store" className='w-full' />
                                    </figure>
                                </button>
                                <button className="transform transition-transform duration-300 hover:scale-105">
                                    <figure className="w-[150px] sm:h-8 md:h-10 lg:h-12 cursor-pointer">
                                        <img
                                            src="images/aad864bd17860b27634fe621001c32db1739350431.webp"
                                            alt="android play store"
                                            className="w-full"
                                        />
                                    </figure>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-10'>
                    <hr className='mb-4 text-[#62626a] lg:block hidden' />
                    <p className='text-[#62626a] text-[10px] lexend '>
                        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners <br className='hidden lg:block' />
                        2008-2025 © Zomato™ Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer