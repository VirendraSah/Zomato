import React, { createContext, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const sectionRef = useRef(null);
    const foodAnimaton = useRef();

    const handleScroll = () => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    //Hero section animation
    useGSAP(
        () => {
            const section = document.querySelector('#hero-section');
            const momoz = document.querySelector('#momoz');
            const burger = document.querySelector('#burger');
            const pizza = document.querySelector('#pizza');
            const angle = 145 * (Math.PI / 180);
            const distance = 300;
            const dx = Math.cos(angle) * distance;
            const dy = Math.sin(angle) * distance;

            // Animate momoz & pizza image
            [momoz, pizza].forEach((el) => {
                gsap.to(el, {
                    x: dx,
                    y: dy,
                    duration: 2,
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 95%',
                        toggleActions: "play none none none",
                    },
                });
            });

            // Burger animation (left → right)
            gsap.to(burger, {
                x: distance,
                y: dy,        
                duration: 1,
                immediateRender: false,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 95%',
                    toggleActions: "play none none none",
                },
            });
        },

        { scope: foodAnimaton }
    );

    return (
        <ScrollContext.Provider value={{ sectionRef, handleScroll, foodAnimaton }}>
            {children}
        </ScrollContext.Provider>
    );
};
