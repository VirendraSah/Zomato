export function FeaturesSection() {
    return (
        <>
            {/* Features section: What’s waiting for you on the app? */}
            <section className='w-full bg-gradient-to-b from-[#FFEDEF] to-[#FFFFFF] pt-10 pb-20'>
                <div className='w-full max-w-[1320px] m-auto flex flex-col'>
                    <div className='flex flex-col gap-5'>
                        {/* Section heading */}
                        <div className='md:w-full w-9/12 m-auto'>
                            <h2 className='font-semibold text-[30px]  sm:text-[64px] leading-10 sm:leading-[72px] text-center text-[#ef4f5f]'>What’s waiting for you <br className='hidden sm:none' /> on the app?</h2>
                        </div>
                        {/* Section description */}
                        <div className='md:w-full w-9/12 m-auto'>
                            <p className='text-center font-normal text-[#596378] leading-8 text-2xl'>Our app is packed with features that <br className='hidden sm:block' /> enable you to experience food <br className='hidden sm:block' />delivery like never before</p>
                        </div>
                    </div>
                    {/* Desktop view: feature cards around phone image */}
                    <div className='hidden sm:none relative py-5 sm:flex items-center justify-center gap-5'>
                        {/* Left feature cards */}
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
                        {/* Center phone image and schedule card */}
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
                        {/* Right feature cards */}
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
                        {/* Gradient overlay for bottom fade effect */}
                        <div className="absolute -bottom-16 md:-bottom-11  left-0 h-[112px] w-full bg-[linear-gradient(0deg,_rgba(255,_255,_255,_100)_0%,_rgba(255,_255,_255,_50)_70%,_rgba(255,_255,_255,_0)_100%)]  "></div>
                    </div>
                    {/* Mobile view: stacked feature cards */}
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
        </>
    );
}

// Smallcard component for feature icons
function Smallcard({ image, name, className }) {
    return (
        <>
            {/* Card with image and label */}
            <div className={`border border-gray-200 rounded-2xl pb-2 shadow-lg aspect-[26/29] w-max flex flex-col items-center justify-around bg-white h-min px-1 ${className}`}>
                <figure className='w-[69.41px] h-[43.53px] md:w-[80.25px] md:h-[50.53px]'>
                    <img src={image} alt={name} />
                </figure>
                <p className='lexend text-[#293142] text-[14px] text-center'>{name}</p>
            </div>
        </>
    )
}