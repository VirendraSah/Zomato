import { VideoBanner } from "../components/home/VideoBanner"
import { HeroSection } from "../components/home/HeroSection";
import { FeaturesSection } from "../components/home/FeaturesSection";
import { GoldbenefitsSection } from "../components/home/GoldbenefitsSection";
import { Eternal } from "../components/home/Eternal";
import DownloadAppNow from "../components/home/DownloadAppNow";
import Footer from "../components/home/Footer";

// Home page main component
function Home() {
    return (
        <>
            {/* Video banner section at the top */}
            <VideoBanner />
            <main>
                <HeroSection />
                <FeaturesSection />
                <GoldbenefitsSection />
                <Eternal/>
                <DownloadAppNow/>
                <Footer/>
            </main>
        </>
    )
}

// Export Home component
export { Home }






