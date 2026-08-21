import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import PortfolioHero from "./PortfolioHero";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
function Home() {
  return (
    <>
      <PortfolioHero />
      <Projects />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
