import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about"
import Vision from "../components/ourVision";
import Director from "../components/director";
import Gallery from "../components/gallery";
import Contact from "../components/contact";

function Home() {
  return (
    <div>
     <Header/>
     <Hero/>
     <About/>
     <Vision/>
     <Director/>
     <Gallery/>
     {/* <Contact/> */}
    </div>
  );
}

export default Home;
