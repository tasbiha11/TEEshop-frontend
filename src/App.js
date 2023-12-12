import About from "./components/About";
import Collection from "./components/Collection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Print from "./components/Print";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Collection></Collection>
      <Print></Print>
      <Reviews></Reviews>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
