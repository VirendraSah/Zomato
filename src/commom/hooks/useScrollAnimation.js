import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimation(ref) {
  useGSAP(() => {
    if (ref.current) {
      gsap.from(ref.current, {
        y: 100,         
        opacity: 0,        
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",  
          toggleActions: "play none none none",
        },
      });
    }
  }, [ref]);
}
