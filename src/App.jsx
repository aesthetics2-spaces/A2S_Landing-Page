import Features from "./components/Features";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Hero2 from "./components/Hero2";
import Footer from "./components/Footer";
import UpcomingFeatures from "./components/UpcomingFeatures";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";
import FAQ from "./components/FAQ section";

function App() {
  return (
    <>
      <Navbar />
      <CustomCursor/>
        <Hero/>
      <HowItWorks/>
      <Features/>
      <UpcomingFeatures/>
      <FAQ/>
      <Hero2/>
      <Footer/>
      <ScrollToTop/>
    </>
  );
}

export default App;
