'use client';
import { IoMdArrowDropright } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Slider from "./Slider";

export function Eternal() {
    // EternalCards Data
    const eternalCardsData = [
        {
            image: "images/d1eee2be61cf47e2332cb7c49475c0981739777714.webp",
            title: "zomato",
            description: "Get the app now to start ordering your favorite dishes!",
            className: "border-[rgb(254_226_226)] from-[#FFEDEF] to-[#FFF5F6]"
        },
        {
            image: "images/071cb96db84f20eea3a39804e113bdee1739777655.webp",
            title: "blinkit",
            description: "Choose from 10,000+ products & get them delivered in minutes",
            className: "from-[#FFF9E5] to-[#FFF9E5] border-[#FAECBD]"
        },
        {
            image: "images/38bf2d77d9391b8b1866e3ae2b5fe19a1739777683.webp",
            title: "district",
            description: "The best of events, movies, dining, and everything you love!",
            className: "from-[#F2ECFF] to-[#FAF8FE] border-[#DFCFFF]"
        },
        {
            image: "images/9207cd0fc68c4ac55cfd3bfa00c02a351739777699.webp",
            title: "hyperpure",
            description: "Offering complete supply chain solution for your restaurant",
            className: "border-[rgb(254_226_226)] from-[#FFEDEF] to-[#FFF5F6]"
        }
    ]
    return (
        <>
            {/* Eternal section: A section that highlights the timeless nature of the brand */}
            <section className='w-full rounded-t-4xl sm:rounded-none sm:pb-20 py-10  sm:h-auto flex justify-center'>
                <div className="flex flex-col gap-2 sm:gap-7">
                    <div>
                        <figure className="h-[76px] w-[114px] sm:w-64 sm:h-44 m-auto flex justify-center">
                            <img src="images/81ed35564614cbdf5188bb72dc7e57b51739536377.avif" alt="eternal logo" className="w-full h-full" />
                        </figure>
                        <div className="flex items-center justify-center gap-2 sm:gap-5 mt-5 sm:mt-10">
                            <div className="w-12 sm:w-28 h-0.5 bg-gradient-to-r from-transparent to-[#D2D2D2]"></div>
                            <span className="text-center text-[rgb(118_124_143)] lexend font-semibold text-[14px] sm:text-xl md:text-2xl">POWERING INDIA’S <br /> CHANGING LIFESTYLES</span>
                            <div className="w-12 sm:w-28 h-0.5 bg-gradient-to-l from-transparent to-[#D2D2D2]"></div>
                        </div>
                    </div>
                    <div className="hidden sm:block">
                        <div className="xl:max-w-[1240px] sm:max-w-[800px] m-auto grid sm:grid-cols-2 xl:grid-cols-4 place-items-center gap-8 px-10">
                            {/* Cards showcasing the brand's timeless nature */}
                            {eternalCardsData.map((cards, index) => (<EternalCards data={cards} key={index} />))}
                        </div>
                    </div>
                    <div className="w-full flex justify-center sm:hidden">
                        <Slider eternalCardsData={eternalCardsData} />
                    </div>

                </div>
            </section>
        </>
    );
}

function EternalCards({ data }) {
    const { image, title, description, className } = data;
    return (
        <>
            <div className={`w-[260px] border-2 hover:scale-[1.05] cursor-pointer duration-300 pb-5 pt-10 px-3 flex flex-col items-center justify-center gap-3 rounded-3xl shadow-lg bg-gradient-to-b ${className}`}>
                <figure className="w-40 m-auto">
                    <img src={image} alt={title} className="rounded-3xl w-full" />
                </figure>
                <div className="flex flex-col items-center px-2 gap-3">
                    <span className="font-bold text-2xl lexend">{title}</span>
                    <span className="text-center lexend text-xl font-medium text-[rgb(89_99_120)]">{description}</span>
                </div>
                <button className="flex items-center justify-center">
                    <span className="lexend">Check it out</span>
                    <IoMdArrowDropright className="text-xl leading-0 text-red-600" />
                </button>
            </div>
        </>
    )
}

function SliderCards({ data }) {
    const { image, title, description } = data;
    return (
        <>
            <div className={`w-[260px] cursor-pointer pb-5 pt-10 px-3 flex flex-col items-center justify-center gap-3`}>
                <figure className="w-30 m-auto">
                    <img src={image} alt={title} className="rounded-3xl w-full" />
                </figure>
                <div className="flex flex-col items-center px-2 gap-3">
                    <span className="font-bold text-xl lexend">{title}</span>
                    <span className="text-center lexend text-sm font-medium text-[rgb(89_99_120)]">{description}</span>
                </div>
                <button className="flex items-center justify-center">
                    <span className="lexend font-semibold">Order now</span>
                    <IoMdArrowDropright className="text-xl leading-0 text-red-600" />
                </button>
            </div>
        </>
    )
}


