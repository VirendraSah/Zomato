import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function DownloadAppNow() {
    const sectionRef = useRef(null);
    const phoneAnimationRef = useRef(null);
    const phoneMobileRef = useRef(null);

    useGSAP(() => {
        const section = sectionRef.current;
        const phoneAnimation = phoneAnimationRef.current;
        const phoneMobile = phoneMobileRef.current;

        if (section && phoneAnimation) {
            gsap.to(phoneAnimation, {
                y: -110,
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 95%", // section top jab viewport ke bottom se 5% touch kare
                    toggleActions: "play none none none",
                },
            });
        }

        if (section && phoneMobile) {
            gsap.fromTo(
                phoneMobile,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 95%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="overflow-hidden w-full pb-10 sm:py-10 sm:h-auto lg:h-lvh sm:px-8"
            id="download-app"
        >
            <div className="max-w-[1200px] sm:bg-[linear-gradient(180deg,_#FFFFFF_0%,_#FFEDEF_100%)] h-full m-auto sm:border-4 sm:border-[#ffdbe0] flex flex-col sm:flex-row items-center justify-around gap-4 sm:gap-8 relative overflow-hidden sm:shadow-[0px_8px_10px_0px_#1C1C1C14] rounded-t-4xl sm:rounded-4xl">

                {/* Mobile view phone */}
                <div className="overflow-hidden sm:hidden h-[50%] bg-gradient-to-t from-[#FFF] to-[#FEDCE0] flex items-end">
                    <figure className="h-full flex items-end" ref={phoneMobileRef}>
                        <img
                            src="images/e6b11be581b91b410684fa16287f565c1738647242.webp"
                            alt="mobile screen-2"
                            className="w-full"
                        />
                    </figure>
                </div>

                {/* Text + buttons */}
                <div className="flex h-[50%] flex-col items-center sm:items-start justify-center gap-4 sm:h-full">
                    <h2 className="text-xl sm:text-xl lg:text-3xl font-bold lexend">
                        Download the app now!
                    </h2>
                    <p className="lexend hidden sm:block sm:text-[15px] lg:text-xl text-[#596378]">
                        Experience seamless online ordering <br /> only on the Zomato app
                    </p>
                    <p className="lexend text-[15px] sm:hidden text-center text-[#596378]">
                        Experience seamless food ordering
                        <br /> with the Zomato app
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-4">
                        <button className="transform transition-transform duration-300 hover:scale-105">
                            <figure className="h-10 sm:h-8 md:h-10 lg:h-12 cursor-pointer">
                                <img
                                    src="images/aad864bd17860b27634fe621001c32db1739350431.webp"
                                    alt="android play store"
                                    className="h-full"
                                />
                            </figure>
                        </button>

                        <button className="transform transition-transform duration-300 hover:scale-105">
                            <figure className="h-10 sm:h-8 md:h-10 lg:h-12 cursor-pointer">
                                <img
                                    src="images/df6464de32f4a09262cee301f65aaa661739351256.webp"
                                    alt="ios play store"
                                    className="h-full"
                                />
                            </figure>
                        </button>
                    </div>
                </div>

                {/* Desktop phone animation */}
                <div
                    className="h-full z-3 bottom-[-100px] mt-5 relative hidden sm:block"
                    id="phone-animation"
                    ref={phoneAnimationRef}
                >
                    <figure className="h-full flex items-end z-2">
                        <img
                            src="images/3f7e2757e62fd22592b879bd56b666011742294630.webp"
                            alt="mobile device screen"
                            className="sm:h-[200px] md:h-[300px] lg:h-[400px]"
                        />
                    </figure>
                    <div className="absolute top-[30%] z-3">
                        <p className="font-bold lexend text-[#596378] sm:text-[13px] lg:text-xl text-center">
                            Scan the QR code to <br /> download the app
                        </p>
                        <figure className="flex items-center justify-center">
                            <img
                                src="images/98cc4eba0a6f59e728e5223a70fd39551742471514.webp"
                                alt="QR code"
                                className="sm:w-[40%] md:w-[50%] mt-4"
                            />
                        </figure>
                    </div>
                </div>

                {/* Background concentric circles */}
                <div className="absolute hidden sm:block right-[-30%] top-[30%] aspect-square w-[90%]">
                    <div className="flex aspect-square w-full items-center justify-center rounded-full border-2 border-red-100">
                        <div className="flex aspect-square w-4/5 items-center justify-center rounded-full border-2 border-red-100">
                            <div className="flex aspect-square w-3/4 items-center justify-center rounded-full border-2 border-red-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DownloadAppNow;
