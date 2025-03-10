import "./App.css";
import Navbar from "./components/Navbar";
import { Contact } from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Home from "./components/sections/Home";
import Parcours from "./components/sections/Parcours";
import Projets from "./components/sections/Projets";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Parcours />
      <Projets />
      <Contact />
    </>
  );
}

export default App;
