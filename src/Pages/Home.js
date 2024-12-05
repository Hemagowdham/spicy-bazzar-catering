import About from "../Components/About";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import HomePageContact from "../Components/HomePageContact";
import HomePageHeader from "../Components/HomePageHeader";
import HomePageMenu from "../Components/HomePageMenu";

export default function Home() {
    return(
        <>
        <HomePageHeader />
        <Hero />
        <About />
        <HomePageMenu />
        <HomePageContact />
        <Footer />
        </>
    );
}