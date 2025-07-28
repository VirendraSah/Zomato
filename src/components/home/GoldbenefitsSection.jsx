export function GoldbenefitsSection() {
    return (
        <>
            {/* Gold benefits section */}
            <section className='relative'>
                <div className=" relative flex flex-col items-center justify-center overflow-hidden bg-black -z-30 px-1 sm:px-10  py-[20vw] text-white xl:px-20 xl:py-72 rounded-t-3xl sm:rounded-none h-lvh sm:h-auto">
                    {/* Decorative background images */}
                    <img src="images/67960dbea89626613dfe59ebe00475011741697422.webp" alt="bg-ring" className='sm:hidden w-full h-full absolute -z-20' />
                    <img src="images/6ecb2e1b4e412376645848c9c39098a81739521607.webp" className="absolute left-0 top-7 sm:top-20 z-[99] size-18  sm:size-28 lg:size-36 xl:size-44 2xl:size-48 " style={{ opacity: 1, transform: "none" }} />
                    <img src="images/ef5bc22bc703882ccb11a5b75ad6704b1743059783.webp" className="absolute right-4 top-[2%] z-[99] size-24 sm:size-36 lg:size-44 xl:size-56 2xl:size-64  " style={{ opacity: 1, transform: "none" }} />
                    <img src="images/eae1c0140168456506dca2736dc9b1c61742909660.webp" className="absolute  z-[99] size-10 sm:size-15 lg:size-28 xl:size-36 2xl:size-44 will-change-transform  bottom-[5vw] right-[6vw] sm:right-[20vw]  " style={{ opacity: 1, transform: "none" }} />
                    {/* Gold logo and description */}
                    <div className="flex w-fit flex-col  items-center justify-center gap-8 2xl:gap-16  ">
                        <div className="flex  w-[45%] flex-col items-center justify-center gap-6">
                            <div>
                                <img alt="Gold logo" src="images/5f94743e20e3f668953fda8b0e56f2f71742996005.webp" className="mx-auto h-auto w-3/5" />
                            </div>
                            <div className="text-subtitle font-normal bg-gradient-to-r from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-center text-transparent">
                                <div className="">India’s Top Savings </div>
                                <div className="">Program for Food Lovers</div>
                            </div>
                        </div>
                        {/* Gold benefits title with stars */}
                        <div className="inline-flex  items-center justify-center gap-2 ">
                            <i className="fa-solid fa-star bg-gradient-to-br from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-transparent"></i>

                            <div className=" text-subHeading tracking-[4px] text-center text-white flex items-center gap-3">
                                <span className='sm:text-2xl text-[13px]'>
                                    GOLD BENEFITS
                                </span>
                            </div>

                            <i className="fa-solid fa-star bg-gradient-to-br from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-transparent"></i>
                        </div>
                        {/* Gold benefits cards */}
                        <div className="flex flex-row justify-around sm:justify-center gap-5 sm:gap-10 items-center w-full ">
                            <div className="flex max-w-36 sm:flex-1/2 border border-[#c4ae8952] sm:border-0 sm:w-full  items-center gap-6 rounded-3xl   sm:max-w-[384px] lg:aspect-auto  xl:max-w-[557px] flex-col sm:flex-row">
                                <img src="images/bc9d2a579285cbdaa101b8fe2ba68f601741779645.webp" className="aspect-square h-full max-h-[111px] sm:max-h-[74px]" />
                                <div className="flex w-full flex-col items-center sm:items-start lg:items-start justify-center px-5 pb-2">
                                    <div className="text-subtitle bg-gradient-to-br from-[#FEF3E0] to-[#FFFEFC] bg-clip-text text-center sm:text-start lg:text-start font-medium text-transparent xl:text-2xl text-sm">
                                        Free <br className='sm:hidden' /> Delivery
                                    </div>
                                    <div className="mt-1 bg-gradient-to-br from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text sm:text-start font-normal  text-transparent lg:text-base xl:text-xl text-center text-[10px]">
                                        At all restaurants within 7 km
                                    </div>
                                </div>
                            </div>

                            <div className="flex max-w-36 border border-[#c4ae8952] sm:border-0 items-center gap-6 rounded-3xl sm:max-w-[384px] lg:aspect-auto  xl:max-w-[557px] flex-col sm:flex-row">
                                <img src="images/d668ed26c7d4771318d0aa03b3f905e71741779899.webp" className="aspect-square h-full max-h-[111px] sm:max-h-[74px]" />
                                <div className="flex w-full flex-col sm:items-start lg:items-start justify-center px-5 pb-2">
                                    <div className="text-subtitle bg-gradient-to-br from-[#FEF3E0] to-[#FFFEFC] bg-clip-text text-sm sm:text-start font-medium text-transparent xl:text-2xl text-center">Up to 30% <br className='sm:hidden' /> extra off</div>
                                    <div className="mt-1 bg-gradient-to-br from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text sm:text-start  text-[10px] font-normal  text-transparent text-center lg:text-base xl:text-xl sm:text-sm ">At 20,000+ partner restaurants</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Decorative bottom left image */}
                    <div className="absolute bottom-0 left-0 w-1/2">
                        <img src="images/f64b00427de0a6858432f039ef9e03731739364398.webp" className="aspect-[2466/1089] w-full hidden sm:block" />
                    </div>
                    {/* Decorative bottom right image */}
                    <div className="absolute bottom-0 right-0 w-1/2">
                        <img src="images/e80d61bfc77eb2ac157e9807ab021e7b1739365197.webp" className="aspect-[2466/1089] w-full hidden sm:block" />
                    </div>
                    {/* Top white SVG curve */}
                    <div className="absolute hidden sm:block top-0 l-0 bg-white w-full h-[0px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                            <circle cx="100" cy="-380" r="400" fill="white" stroke="white"></circle>
                        </svg>
                    </div>
                    {/* Bottom white SVG curve */}
                    <div className="l-0 hidden sm:block absolute bottom-0 h-[0px] w-full rotate-180 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                            <circle cx="100" cy="-380" r="400" fill="white" stroke="white"></circle>
                        </svg>
                    </div>
                </div>
                {/* Mobile bottom white SVG curve */}
                <div className="l-0 hidden absolute bottom-0 h-[0px] w-full rotate-180 bg-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle cx="100" cy="-380" r="400" fill="white" stroke="white"></circle></svg></div>
            </section>
        </>
    );
}