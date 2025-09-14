import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-primary-dark flex flex-col gap-20">
        <Introduction />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;
