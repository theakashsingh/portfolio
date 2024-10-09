import "./App.css";
import { motion } from "framer-motion";
import Navbar from "./component/Navbar/Navbar";
import Home from "./page/Home/Home";

function App() {
  return (
    <>
      <motion.div
        className="bg-slate-900 min-h-screen text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <Home />
      </motion.div>
    </>
  );
}

export default App;
