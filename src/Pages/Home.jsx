import { Videobanner } from "../components/home/Videobanner"
import { HeroSection } from "../components/home/HeroSection";
import { FeaturesSection } from "../components/home/FeaturesSection";
import { GoldbenefitsSection } from "../components/home/GoldbenefitsSection";
import { Eternal } from "../components/home/Eternal";

// Home page main component
function Home() {
    return (
        <>
            {/* Video banner section at the top */}
            <Videobanner />
            <main>
                <HeroSection />
                <FeaturesSection />
                <GoldbenefitsSection />
                <Eternal/>
            </main>
        </>
    )
}

// Export Home component
export { Home }






