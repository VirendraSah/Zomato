import React, { useContext } from 'react';
import { ScrollContext } from '../../context/ScrollContext';
import { useRef } from "react";
import useScrollAnimation from '../../commom/hooks/useScrollAnimation';

export function HeroSection({ sectionRef }) {
    const { foodAnimaton } = useContext(ScrollContext);
    const ref = useRef(null);
    useScrollAnimation(ref);

    return (
        <>
            {/* Hero section with images and main headline */}
            < section
                ref={(el) => {
                    ref.current = el;     
                    sectionRef.current = el;
                }}
                className=' w-full pb-20 rounded-t-4xl sm:rounded-none' id='hero-section'>
                <div className='w-full relative h-max' ref={foodAnimaton}>
                    {/* Decorative images and main text */}
                    <div className='w-full h-[28em] md:h-[40em] relative flex items-center justify-center overflow-hidden'>
                        {/* Left track image */}
                        <figure className='absolute w-[70%] left-[-50%] top-[5%] h-full hidden sm:block'>
                            <img src="images/901001826baf04838b1bf505176ff0b11742453501.webp" alt="track" className='w-[100%] max-h-full' />
                        </figure>
                        {/* Tomato image bottom left */}
                        <figure className='absolute w-[50px] left-1/12 bottom-[5%]'>
                            <img src="images/9ef1cc6ecf1d92798507ffad71e9492d1742892584.webp" alt="tomato" className='w-[100%]' />
                        </figure>
                        {/* Leaf image top left */}
                        <figure className='absolute max-w-[50px] top-1/12 left-2/6'>
                            <img src="images/70b50e1a48a82437bfa2bed925b862701742892555.webp" alt="Leaf" className='w-[100%]' />
                        </figure>
                        {/* Burger image left */}
                        <figure className='absolute max-w-1/5 top-1/5 left-[-300px] sm:left-[-35%] md:left-[-30%] lg:left-[-17%]' id='burger'>
                            <img src="images/364f85b5586700f0a3f7108cedf543011739962117.webp" alt="Burger" className='w-[100%]' />
                        </figure>
                        {/* Main headline and description */}
                        <div className='flex items-center justify-center flex-col text-center gap-7 absolute top-3/6 -translate-y-3/6'>
                            <h3 className='font-semibold text-[#ef4f5f] leading-9 md:leading-14 text-2xl sm:text-4xl  md:text-5xl Montserrat'>Better food for <br />
                                more people</h3>
                            <p className='font-light md:font-normal text-[#596378] leading-6  md:leading-7 text-[14px] sm:text-[16px] md:text-[20px] Montserrat'>
                                For over a decade, we’ve <br className='sm:hidden' /> enabled our <br className='hidden sm:block' />
                                customers to <br className='sm:hidden' /> discover new tastes, <br className='hidden sm:block' />
                                delivered <br className='sm:hidden' /> right to their doorstep
                            </p>
                        </div>
                        {/* Right track image */}
                        <figure className='absolute w-[70%] right-[-50%] top-[-15%] h-full hidden sm:block'>
                            <img src="images/901001826baf04838b1bf505176ff0b11742453501.webp" alt="track" className='w-[100%] max-h-full' />
                        </figure>
                        {/* Tomato image top right */}
                        <figure className='absolute w-[50px] right-[4%] top-5/12 rotate-45'>
                            <img src="images/9ef1cc6ecf1d92798507ffad71e9492d1742892584.webp" alt="tomato" className='w-[100%]' />
                        </figure>
                        {/* Momoz plate image top right */}
                        <figure className='absolute max-w-1/5 right-[-200px]  sm:right-[-27%] md:right-[-20%] lg:right-[-10%] top-[-25%]' id='momoz'>
                            <img src="images/3d1b3a891e2c59fd5ae7654dd207370b1739514134.webp" alt="Burger" className='w-[100%]' />
                        </figure>
                        {/* Pizza image bottom right */}
                        <figure className='absolute max-w-1/5 bottom-[50%] sm:bottom-[40%] md:bottom-[35%] right-[-200px] sm:right-[-25%] md:right-[-20%] lg:right-[-15%]' id='pizza'>
                            <img src="images/c7523de995639024918c6947c4b2cdcd1742894059.webp" alt="pizza" />
                        </figure>
                    </div>
                    {/* Cards section showing stats */}
                    <div className='w-full py-5 px-3'>
                        <div className='w-full sm:w-max  m-auto md:px-5 py-[25px] grid grid-cols-1 sm:grid-cols-3 sm:border-2 border-[#fae5e7] sm:shadow-[0px_0px_31px_14px_rgba(0,0,0,.04)] rounded-4xl relative h-[235px] sm:h-max '>
                            {/* Restaurants card */}
                            <Cards
                                Numbers={'3,00,000+'}
                                Value={'restaurants'}
                                src={'images/d19ec60986487a77bcb026e5efc3325f1742908200.webp'}
                                alt={'shop-icon'}
                                className="border-[#fae5e7] shadow-[0px_0px_31px_14px_rgba(0,0,0,.04)] py-3 sm:py-0 rounded-xl sm:rounded-none sm:shadow-none absolute sm:static left-2/4 -translate-x-[60%] sm:translate-none bg-white w-max"
                            />

                            {/* Cities card */}
                            <Cards
                                Numbers={'800+'}
                                Value={'cities'}
                                src={'images/e7533c4081d6140da37b9f430cb7b8051743006192.webp'}
                                alt={'Location-icon'}
                                className=" border-[#fae5e7] shadow-[0px_0px_31px_14px_rgba(0,0,0,.04)] py-3 sm:py-0 rounded-xl sm:rounded-none sm:shadow-none absolute sm:static left-2/4 -translate-x-0/4 sm:translate-none sm:w-auto top-[70px] bg-white rotate-[12deg] sm:rotate-none w-max"
                            />

                            {/* Orders delivered card */}
                            <Cards
                                Numbers={'3 billion+'}
                                Value={'orders delivered'}
                                src={'images/713443cc5944ce4284d7e49e75e2aacf1742466222.webp'}
                                alt={'envolpe-icon'}
                                noBorder
                                className="border-[#fae5e7] shadow-[0px_0px_31px_14px_rgba(0,0,0,.04)] py-3 sm:py-0 rounded-xl sm:rounded-none sm:shadow-none absolute sm:static left-2/4 -translate-x-[60%] rotate-[-3deg] sm:rotate-none sm:translate-none bottom-[20px] bg-white w-max"
                            />
                        </div>
                    </div>
                </div>
            </section >
        </>

    );
}

function Cards({ Numbers, Value, src, alt, noBorder, className }) {
    return (
        <>
            <div className={`flex items-center gap-3 px-4 justify-center ${className} ${!noBorder ? 'sm:border-r sm:border-[#0000003f]' : ''}`}>
                <p className='font-bold text-2xl lg-text-3xl text-[#596378] text-start leading-6'>{Numbers} <br /> <span className='font-medium text-[16px] lg:text-[18px] text-[#596378]'>{Value}</span></p>
                <figure className=''>
                    <img src={src} alt={alt} className='max-h-10 lg:max-h-14' />
                </figure>
            </div>
        </>
    )
}