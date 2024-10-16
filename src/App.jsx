import "./App.css";
import { motion } from "framer-motion";
import Navbar from "./component/Navbar/Navbar";
import Home from "./page/home/Home";
import About from "./page/about/About";
import { Projects } from "./page/projects/Projects";
import Experience from "./page/experience/Experience";
import Footer from "./component/footer/Footer";
import ContactUs from "./page/contactUs/ContactUs";

function App() {
  return (
    <>
      <motion.div
        className="bg-slate-900 min-h-screen text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <Home />
        <About />
        <Projects /> 
        <Experience />
        <ContactUs />
        <Footer />
      </motion.div>
    </>
  );
}

export default App;
