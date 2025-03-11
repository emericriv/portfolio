import "./App.css";
import Navbar from "./components/Navbar";
import { Contact } from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Home from "./components/sections/Home";
import Parcours from "./components/sections/Parcours";
import Projets from "./components/sections/Projets";
import SocialMediaComponent from "./components/SocialMediaComponent";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <SocialMediaComponent />
      <Home />
      <Experience />
      <Parcours />
      <Projets />
      <Contact />
    </>
  );
}

export default App;
