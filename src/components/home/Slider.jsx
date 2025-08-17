import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./Home.css";

export default function Slider({ eternalCardsData }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <React.Fragment>
            <div className="border-2 max-w-[288px] m-auto border-[#F2F4F7] rounded-2xl">
                <Swiper
                    loop={true}
                    spaceBetween={0}
                    navigation={false}
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    freeMode={true}
                    modules={[Autoplay, FreeMode, Navigation, Thumbs]}
                    className="m-auto max-w-[288px] max-h-[145px] mb-5 mt-3 mySwiper"
                >
                    {eternalCardsData.map((cards, index) => (
                        <SwiperSlide key={index} className="max-w-[60%]">
                            <figure className="w-30 m-auto">
                                <img src={cards.image} alt={cards.title} className="rounded-3xl w-full" />
                            </figure>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={0}
                    loop={true}
                    slidesPerView={"auto"}
                    freeMode={true}
                    watchSlidesProgress={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[FreeMode, Navigation, Thumbs,Autoplay]}
                    className="m-auto max-w-[218px] max-h-[124px]"
                >
                    {eternalCardsData.map((cards, index) => (
                        <SwiperSlide key={index} className="max-w-[100%]">
                            <div className={`cursor-pointer pb-5 flex flex-col items-center justify-center gap-3`}>
                                <div className="flex flex-col items-center px-2 gap-3">
                                    <span className="font-bold text-xl lexend">{cards.title}</span>
                                    <span className="text-center lexend text-sm font-medium text-[rgb(89_99_120)]">{cards.description}</span>
                                </div>
                                <button className="flex items-center justify-center">
                                    <span className="lexend font-semibold">Order now</span>
                                    <IoMdArrowDropright className="text-xl leading-0 text-red-600" />
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </React.Fragment>
    );
}
