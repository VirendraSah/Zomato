import React from 'react'
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

function Home() {
    return (
        <>
            <Videobanner />
            <main>
                <section className='w-full pb-20'>
                    <div className='w-full relative h-max'>
                        <div className='w-full h-[28em] md:h-[40em] relative flex items-center justify-center overflow-hidden'>
                            <figure className='absolute w-[70%] left-[-50%] top-[5%] h-full hidden sm:block'>
                                <img src="images/901001826baf04838b1bf505176ff0b11742453501.webp" alt="track" className='w-[100%] max-h-full' />
                            </figure>
                            <figure className='absolute w-[50px] left-1/12 bottom-[5%]'>
                                <img src="images/9ef1cc6ecf1d92798507ffad71e9492d1742892584.webp" alt="tomato" className='w-[100%]' />
                            </figure>
                            <figure className='absolute max-w-[50px] top-1/12 left-2/6'>
                                <img src="images/70b50e1a48a82437bfa2bed925b862701742892555.webp" alt="Leaf" className='w-[100%]' />
                            </figure>
                            <figure className='absolute max-w-1/5 top-2/5 left-3 sm:left-1/12' id='burger'>
                                <img src="images/364f85b5586700f0a3f7108cedf543011739962117.webp" alt="Burger" className='w-[100%]' />
                            </figure>
                            <div className='flex items-center justify-center flex-col text-center gap-7 absolute top-3/6 -translate-y-3/6'>
                                <h3 className='font-semibold text-[#ef4f5f] leading-9 md:leading-14 text-2xl sm:text-4xl  md:text-5xl Montserrat'>Better food for <br />
                                    more people</h3>
                                <p className='font-light md:font-normal text-[#596378] leading-6  md:leading-7 text-[14px] sm:text-[16px] md:text-[20px] Montserrat'>
                                    For over a decade, we’ve <br className='sm:hidden' /> enabled our <br className='hidden sm:block' />
                                    customers to <br className='sm:hidden' /> discover new tastes, <br className='hidden sm:block' />
                                    delivered <br className='sm:hidden' /> right to their doorstep
                                </p>
                            </div>
                            <figure className='absolute w-[70%] right-[-50%] top-[-15%] h-full hidden sm:block'>
                                <img src="images/901001826baf04838b1bf505176ff0b11742453501.webp" alt="track" className='w-[100%] max-h-full' />
                            </figure>
                            <figure className='absolute w-[50px] right-[4%] top-5/12 rotate-45'>
                                <img src="images/9ef1cc6ecf1d92798507ffad71e9492d1742892584.webp" alt="tomato" className='w-[100%]' />
                            </figure>
                            <figure className='absolute max-w-1/5 right-[12%] top-[5%]' id='#manchurian'>
                                <img src="images/3d1b3a891e2c59fd5ae7654dd207370b1739514134.webp" alt="Burger" className='w-[100%]' />
                            </figure>
                            <figure className='absolute max-w-1/5 bottom-[5%] right-1/12'>
                                <img src="images/c7523de995639024918c6947c4b2cdcd1742894059.webp" alt="pizza" />
                            </figure>
                        </div>
                        <div className='w-full py-5 px-3'>
                            <div className='w-full sm:w-max  m-auto md:px-5 py-[25px] grid grid-cols-1 sm:grid-cols-3 sm:border-2 border-[#fae5e7] sm:shadow-[0px_0px_31px_14px_rgba(0,0,0,.04)] rounded-4xl relative h-[235px] sm:h-max '>
                                <Cards
                                    Numbers={'3,00,000+'}
                                    Value={'restaurants'}
                                    src={'images/d19ec60986487a77bcb026e5efc3325f1742908200.webp'}
                                    alt={'shop-icon'}
                                    className="border-[#fae5e7] shadow-[0px_0px_31px_14px_rgba(0,0,0,.04)] py-3 sm:py-0 rounded-xl sm:rounded-none sm:shadow-none absolute sm:static left-2/4 -translate-x-[60%] sm:translate-none bg-white w-max"
                                />

                                <Cards
                                    Numbers={'800+'}
                                    Value={'cities'}
                                    src={'images/e7533c4081d6140da37b9f430cb7b8051743006192.webp'}
                                    alt={'Location-icon'}
                                    className=" border-[#fae5e7] shadow-[0px_0px_31px_14px_rgba(0,0,0,.04)] py-3 sm:py-0 rounded-xl sm:rounded-none sm:shadow-none absolute sm:static left-2/4 -translate-x-0/4 sm:translate-none sm:w-auto top-[70px] bg-white rotate-[12deg] sm:rotate-none w-max"
                                />

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
                </section>
                <section className='w-full bg-gradient-to-b from-[#FFEDEF] to-[#FFFFFF] pt-10 pb-20'>
                    <div className='w-full max-w-[1320px] m-auto flex flex-col'>
                        <div className='flex flex-col gap-5'>
                            <div className='md:w-full w-9/12 m-auto'>
                                <h2 className='font-semibold text-[30px]  sm:text-[64px] leading-10 sm:leading-[72px] text-center text-[#ef4f5f]'>What’s waiting for you <br className='hidden sm:none' /> on the app?</h2>
                            </div>
                            <div className='md:w-full w-9/12 m-auto'>
                                <p className='text-center font-normal text-[#596378] leading-8 text-2xl'>Our app is packed with features that <br className='hidden sm:block' /> enable you to experience food <br className='hidden sm:block' />delivery like never before</p>
                            </div>
                        </div>
                        <div className='hidden sm:none relative py-5 sm:flex items-center justify-center gap-5'>
                            <div className='flex flex-col items-center'>
                                <div className='relative min-w-[165px] md:w-[185px] h-[217px] md:h-[265px]'>
                                    <div className='flex gap-3 w-[165px] md:w-[185px] h-[117px] md:h-[142px] absolute'>
                                        <Smallcard image={'images/d0f1639403f80f8f2c19e0d538222e661742455804.webp'} name={'Healthy'} className={'absolute left-0 top-[20px]'} />
                                        <Smallcard image={'images/82f145180cd6f920a8a8617dda366a0a1742455963.webp'} name={'Veg Mode'} className={'absolute right-0'} />
                                    </div>
                                    <div className='flex gap-3 w-[165px] md:w-[185px] h-[117px] md:h-[142px] absolute bottom-0 right-0 '>
                                        <Smallcard image={'images/5e7aab0f183b36fc12c29279f0cb55181742462245.webp'} name={<>Plan <br /> a Party</>} className={'absolute left-0 top-[20px]'} />
                                        <Smallcard image={'images/867f86a10503998e437963bb37c451591742455764.webp'} name={'Gift Cards'} className={'absolute right-0'} />
                                    </div>
                                </div>
                            </div>
                            <div className='relative'>
                                <figure className='w-[214px]'>
                                    <img src="images/3f7e2757e62fd22592b879bd56b666011742294630.webp" alt="phone" className='w-full' />
                                </figure>
                                <div className={`border border-gray-200 rounded-2xl pb-2 shadow-lg aspect-[26/29] w-[105px] flex flex-col items-center justify-around h-min absolute left-[50%] transform translate-x-[-50%] translate-y-[-119%] bg-white`}>
                                    <img src='images/cc1caf220c91be38dd94cce12b416fcd1746550226.webp' alt='Schedule your order' />
                                    <p className='lexend text-[#293142] text-[14px] text-center'>Schedule <br />
                                        your order</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='relative w-[165px] md:w-[185px] h-[217px] md:h-[265px]'>
                                    <div className='flex gap-3 w-[165px] md:w-[185px] h-[117px] md:h-[142px] absolute'>
                                        <Smallcard image={'images/6e27c9acde6045c272a28e6eb275727e1742455789.webp'} name={'Gourmet'} className={'absolute left-0 top-[20px]'} />
                                        <Smallcard image={'images/813952c961fd13588cb71867d84ea7dc1742455815.webp'} name={'Offers'} className={'absolute right-0'} />
                                    </div>
                                    <div className='flex gap-3 w-[165px] md:w-[185px] md:h-[142px] h-[117px] absolute bottom-0 right-0 '>
                                        <Smallcard image={'images/06d090307e02772693ac06123b53459b1742455939.webp'} name={<>Food <br /> on Train</>} className={'absolute left-0 top-[20px]'} />
                                        <Smallcard image={'images/5e973dd10c387878009c66d625ae541a1746550690.webp'} name={'Collections'} className={'absolute right-0'} />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-16 md:-bottom-11  left-0 h-[112px] w-full bg-[linear-gradient(0deg,_rgba(255,_255,_255,_100)_0%,_rgba(255,_255,_255,_50)_70%,_rgba(255,_255,_255,_0)_100%)]  "></div>
                        </div>
                        {/* Mobile view */}
                        <div className='sm:hidden relative py-5 flex items-center justify-center gap-5'>
                            <div className='flex items-center'>
                                <div className='flex gap-3 pt-5'>
                                    <div className='flex flex-col gap-3'>
                                        <Smallcard image={'images/82f145180cd6f920a8a8617dda366a0a1742455963.webp'} name={'Veg Mode'} />
                                        <Smallcard image={'images/d0f1639403f80f8f2c19e0d538222e661742455804.webp'} name={'Healthy'} />
                                        <Smallcard image={'images/5e973dd10c387878009c66d625ae541a1746550690.webp'} name={'Collections'} />
                                    </div>
                                    <div className='flex flex-col gap-3 -translate-y-5'>
                                        <Smallcard image={'images/cc1caf220c91be38dd94cce12b416fcd1746550226.webp'} name={<>Schedule <br /> your order</>} />
                                        <Smallcard image={'images/5e7aab0f183b36fc12c29279f0cb55181742462245.webp'} name={<>Plan <br /> a Party</>} />
                                        <Smallcard image={'images/813952c961fd13588cb71867d84ea7dc1742455815.webp'} name={'Offers'} />
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <Smallcard image={'images/06d090307e02772693ac06123b53459b1742455939.webp'} name={<>Food <br /> on Train</>} />
                                        <Smallcard image={'images/6e27c9acde6045c272a28e6eb275727e1742455789.webp'} name={'Gourmet'} />
                                        <Smallcard image={'images/867f86a10503998e437963bb37c451591742455764.webp'} name={'Gift Cards'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='relative'>
                    <div className="relative mb-14 flex w-screen flex-col items-center justify-center overflow-hidden bg-black px-10  py-[20vw] text-white xl:px-20 xl:py-72">
                        <img src="images/6ecb2e1b4e412376645848c9c39098a81739521607.webp" className="absolute left-0 top-20 z-[99]  size-28 lg:size-36 xl:size-44 2xl:size-48 " style={{opacity: 1, transform: "none"}} />
                        <img src="images/ef5bc22bc703882ccb11a5b75ad6704b1743059783.webp" className="absolute right-4 top-[2%] z-[99] size-36 lg:size-44 xl:size-56 2xl:size-64  " style={{opacity: 1, transform: "none"}} />
                        <img src="images/eae1c0140168456506dca2736dc9b1c61742909660.webp" className="absolute  z-[99] size-24 lg:size-28 xl:size-36 2xl:size-44 will-change-transform  bottom-[5vw] right-[20vw]  " style={{opacity: 1, transform: "none"}} />
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
                            <div className="inline-flex  items-center justify-center gap-2 ">
                                <div className="mb-1 mr-1"><span className="z-icon bg-gradient-to-br from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-transparent text-base leading-5 my-class"></span></div>
                                <div className=" text-subHeading tracking-[4px] text-center text-white">
                                    <span>
                                        GOLD BENEFITS
                                    </span>
                                </div>
                                <div className="mb-1">
                                    <span className="z-icon bg-gradient-to-br from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-transparent text-base leading-5 my-class"></span>
                                </div>
                            </div>
                            <div className="flex flex-row justify-start gap-10">
                                <div className="flex  items-center gap-6 rounded-3xl   md:max-w-[384px] lg:aspect-auto  xl:max-w-[557px]">
                                    <img src="images/bc9d2a579285cbdaa101b8fe2ba68f601741779645.webp" className="aspect-square h-full max-h-[74px]" />
                                    <div className="flex w-full flex-col items-start justify-center">
                                        <div className="text-subtitle bg-gradient-to-br from-[#FEF3E0] to-[#FFFEFC] bg-clip-text  text-start font-medium text-transparent xl:text-2xl ">
                                            Free Delivery
                                        </div>
                                        <div className="mt-1 bg-gradient-to-br from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-start  text-sm font-normal  text-transparent lg:text-base xl:text-xl">
                                            At all restaurants within 7 km
                                        </div>
                                    </div>
                                </div>
                                <div className="flex  items-center gap-6 rounded-3xl   md:max-w-[384px] lg:aspect-auto  xl:max-w-[557px]">
                                    <img src="images/d668ed26c7d4771318d0aa03b3f905e71741779899.webp" className="aspect-square h-full max-h-[74px]" />
                                    <div className="flex w-full flex-col items-start justify-center">
                                        <div className="text-subtitle bg-gradient-to-br from-[#FEF3E0] to-[#FFFEFC] bg-clip-text  text-start font-medium text-transparent xl:text-2xl ">Up to 30% extra off</div>
                                        <div className="mt-1 bg-gradient-to-br from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-start  text-sm font-normal  text-transparent lg:text-base xl:text-xl">At 20,000+ partner restaurants</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-1/2">
                            <img src="images/f64b00427de0a6858432f039ef9e03731739364398.webp" className="aspect-[2466/1089] w-full" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-1/2">
                            <img src="images/e80d61bfc77eb2ac157e9807ab021e7b1739365197.webp" className="aspect-[2466/1089] w-full" />
                        </div>
                        <div className="absolute top-0 l-0 bg-white w-full h-[0px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                <circle cx="100" cy="-380" r="400" fill="white" stroke="white"></circle>
                            </svg>
                        </div>
                        <div className="l-0 absolute bottom-0 h-[0px] w-full rotate-180 bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                <circle cx="100" cy="-380" r="400" fill="white" stroke="white"></circle>
                            </svg>
                        </div>
                    </div>
                    <div className="l-0 absolute bottom-0 h-[0px] w-full rotate-180 bg-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle cx="100" cy="-380" r="400" fill="white" stroke="white"></circle></svg></div>
                </section>
            </main>
        </>
    )
}

export { Home }

function Smallcard({ image, name, className }) {
    return (
        <>
            <div className={`border border-gray-200 rounded-2xl pb-2 shadow-lg aspect-[26/29] w-max flex flex-col items-center justify-around bg-white h-min px-1 ${className}`}>
                <figure className='w-[69.41px] h-[43.53px] md:w-[80.25px] md:h-[50.53px]'>
                    <img src={image} alt={name} />
                </figure>
                <p className='lexend text-[#293142] text-[14px] text-center'>{name}</p>
            </div>
        </>
    )
}

function Videobanner() {
    return (
        <>
            <section className='w-full h-[100vh] object-cover relative' id='Header'>
                <video className='w-[100%] h-[100%] object-cover relative' autoPlay loop muted>
                    <source src="public/video/zomato.mp4" className='w-[100%]' type="video/mp4" />
                </video>
                <div className='w-[100%] h-[100%] bg-gradient-to-b from-[#00000023] to-[#0f0f0fe1] absolute z-[9] top-0 flex  justify-end items-center flex-col text-white text-center gap-5 pb-20'>
                    <figure className='w-[150px] sm:w-[200px] mb-4'>
                        <img src="/public/images/8313a97515fcb0447d2d77c276532a511583262271.webp" alt="zomato" className='w-100%' />
                    </figure>
                    <p className='font-semibold sm:font-bold text-2xl sm:text-6xl leading-8 sm:leading-13 Montserrat'>India’s #1 <br />
                        <span className='text-2xl sm:text-5xl font-semibold p-0 Montserrat'>food delivery app </span></p>
                    <p className='text-sm sm:text-xl font-light sm:font-semibold leading-5 sm:leading-7'>Experience fast & easy online ordering <br />
                        on the Zomato app</p>
                    <div className='w-full flex gap-5 items-center justify-center px-5'>
                        <figure className='h-[70px] hidden sm:block'>
                            <img src="public/images/aad864bd17860b27634fe621001c32db1739350431.webp" alt="google-play-btn" className='h-full' />
                        </figure>
                        <figure className='h-[70px] hidden sm:block'>
                            <img src="public/images/df6464de32f4a09262cee301f65aaa661739351256.webp" alt="apple-app-store" className='h-full' />
                        </figure>
                        <button type="button" className="w-full block sm:hidden focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-3">Order on app</button>
                    </div>
                </div>
                <div className='hidden sm:block'>
                    <button className='flex items-center justify-center font-semibold absolute bottom-[10px] text-white z-[9] left-[50%] translate-x-[-50%] BtnScrolldown cursor-pointer'>
                        Scroll down
                        <MdOutlineKeyboardDoubleArrowDown />
                    </button>
                </div>
            </section>
        </>
    )
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




