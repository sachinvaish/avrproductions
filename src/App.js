import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Counter from "./components/Counter";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
        <Header /> 
        <Slider />
        <About />
        <Counter />
        <Services />
        <Contact/>
        <Footer />
        <a className="scroll-top-arrow" href="#">
          <i className="ti-arrow-up" />
        </a>
      </div>
  );
}

export default App;
