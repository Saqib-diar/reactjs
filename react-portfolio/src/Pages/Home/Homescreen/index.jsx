import AboutMe from "../AboutMe";
import ContactMe from "../ContectMe";
import Footer from "../Footer";
import HeroSection from "../Herosection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonial";

function Home () {
    return (
        <>
        <HeroSection/>
        <MySkills />
        <MyPortfolio />
        <AboutMe />
        <Testimonial />
        <ContactMe />
        <Footer />
        </>
    )
}

export default Home;