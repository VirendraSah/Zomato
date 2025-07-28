import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

export function Videobanner() {
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