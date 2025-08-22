import { HeroSection } from "../components/home/HeroSection";
import { FeaturesSection } from "../components/home/FeaturesSection";
import { GoldbenefitsSection } from "../components/home/GoldbenefitsSection";
import { Eternal } from "../components/home/Eternal";
import DownloadAppNow from "../components/home/DownloadAppNow";
import Footer from "../components/home/Footer";
import { Video } from "../components/home/Video";
import { useContext } from 'react';
import { ScrollContext } from '../context/ScrollContext';

// Home page main component
function Home() {
    // Use scroll context for sectionRef and handleScroll
    const { sectionRef, handleScroll} = useContext(ScrollContext);
    return (
        <>
            {/* Video banner section at the top */}
            <Video handleScroll={handleScroll}/>
            <main>
                <HeroSection sectionRef={sectionRef}/>
                <FeaturesSection />
                <GoldbenefitsSection />
                <Eternal />
                <DownloadAppNow />
                <Footer />
            </main>
        </>
    )
}

// Export Home component
export { Home }






