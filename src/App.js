import Header from "./components/Header";
import Slider from "./components/Slider";
import Testimonials from "./components/Testimonials";
import ClientSlider from "./components/ClientSlider";
import Footer from "./components/Footer";
import VideoSection from "./components/VideoSection";
import About from "./components/About";
import Services from "./components/Services";
import Counter from "./components/Counter";
import Advantages from "./components/Advantages";
import StartSection from "./components/StartSection";
import ParallaxSections from "./components/ParallaxSections";
import Services_new from "./components/Services_new";
import FeatureBOx from "./components/FeatureBOx";
import Info from "./components/Info";
import Animate from "./components/Animate";

function App() {
  return (
    <div>
        <Header />
        <Slider />
        <About />
        <Services />
        <Animate />
        <Info />
        <FeatureBOx />
        <Services_new />
        <ParallaxSections />
        <StartSection />
        <Advantages />
        <Counter />
        <VideoSection />
        <ClientSlider />
        <Testimonials />
        <Footer />
        <a className="scroll-top-arrow" href="javascript:void(0);">
          <i className="ti-arrow-up" />
        </a>
      </div>
  );
}

export default App;
