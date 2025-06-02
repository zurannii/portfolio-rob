import Footer from "@/components/Footer";
import { HeroSection } from "./HeroSection/page";
import { InfoSection } from "./InfoSection/page";
import { IntroSection } from "./IntroSection";

export default function InitialPage () {
    return(
        <main>
            <HeroSection />
            <IntroSection />
            <InfoSection />
            <Footer />
        </main>
    );
}