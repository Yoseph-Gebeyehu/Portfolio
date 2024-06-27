import "./App.css";
import NavBar from "./Home/NavBar";
import HomePage from "./Home/HomePage";
import MySkills from "./Home/MySkills";
import AboutMe from "./Home/AboutMe";
import Portfolio from "./Home/Portfolio";
import Footer from "./Home/Footer";

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <HomePage />
      <MySkills />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
