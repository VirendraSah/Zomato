import React from 'react'

function DownloadAppNow() {
    return (
        <React.Fragment>
            <section className='w-full pb-10 sm:py-10  sm:h-auto lg:h-lvh sm:px-8'>
                <div className='max-w-[1200px] sm:bg-[linear-gradient(180deg,_#FFFFFF_0%,_#FFEDEF_100%)] h-full m-auto sm:border-4 sm:border-[#ffdbe0] flex flex-col sm:flex-row items-center justify-around gap-4 sm:gap-8 relative overflow-hidden sm:shadow-[0px_8px_10px_0px_#1C1C1C14] rounded-t-4xl sm:rounded-4xl'>
                    <div className='sm:hidden h-[50%] bg-gradient-to-t from-[#FFF] to-[#FEDCE0] flex items-end'>
                        <figure className='h-full flex items-end'>
                            <img src="images/e6b11be581b91b410684fa16287f565c1738647242.webp" alt="mobile screen-2" className='w-full' />
                        </figure>
                    </div>
                    <div className='flex h-[50%] flex-col items-center sm:items-start justify-center gap-4 sm:h-full'>
                        <h2 className='text-xl sm:text-xl lg:text-3xl font-bold lexend'>Download the app now!</h2>
                        <p className='lexend hidden sm:block sm:text-[15px] lg:text-xl text-[#596378]'>Experience seamless online ordering <br /> only on the Zomato app</p>
                        <p className='lexend text-[15px] sm:hidden text-center text-[#596378]'>Experience seamless food ordering<br /> with the Zomato app</p>
                        <div className='flex items-center justify-center gap-4 mt-4'>
                            <button className="transform transition-transform duration-300 hover:scale-105">
                                <figure className="h-10 sm:h-8 md:h-10 lg:h-12 cursor-pointer">
                                    <img
                                        src="images/aad864bd17860b27634fe621001c32db1739350431.webp"
                                        alt="android play store"
                                        className="h-full"
                                    />
                                </figure>
                            </button>

                            <button className='transform transition-transform duration-300 hover:scale-105'>
                                <figure className='h-10 sm:h-8 md:h-10 lg:h-12 cursor-pointer'>
                                    <img src="images/df6464de32f4a09262cee301f65aaa661739351256.webp" alt="ios play store" className='h-full' />
                                </figure>
                            </button>
                        </div>
                    </div>
                    <div className='h-full z-3 mt-5 relative hidden sm:block'>
                        <figure className='h-full flex items-end z-2'>
                            <img src="images/3f7e2757e62fd22592b879bd56b666011742294630.webp" alt="mobile device screen" className='sm:h-[200px] md:h-[300px] lg:h-[400px]' />
                        </figure>
                        <div className='absolute top-[30%] z-3'>
                            <p className='font-bold lexend text-[#596378] sm:text-[13px] lg:text-xl text-center'>Scan the QR code to <br /> download the app</p>
                            <figure className='flex items-center justify-center'>
                                <img src="images/98cc4eba0a6f59e728e5223a70fd39551742471514.webp" alt="QR code" className='sm:w-[40%] md:w-[50%]  mt-4' />
                            </figure>
                        </div>
                    </div>
                    <div class="absolute hidden sm:block right-[-30%] top-[30%] aspect-square w-[90%]">
                        <div class="flex aspect-square w-full items-center justify-center rounded-full border-2 border-red-100">
                            <div class="flex aspect-square w-4/5 items-center justify-center rounded-full border-2 border-red-100">
                                <div class="flex aspect-square w-3/4 items-center justify-center rounded-full border-2 border-red-100">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default DownloadAppNow