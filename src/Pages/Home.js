import About from "../Components/About";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import HomeContact from "../Components/HomeContact";
import HomeHeader from "../Components/HomeHeader";
import HomeMenu from "../Components/HomeMenu";

export default function Home() {
    return(
        <>
        <HomeHeader />
        <Hero />
        <About />
        <HomeMenu />
        <HomeContact />
        <Footer />
        </>
    );
}