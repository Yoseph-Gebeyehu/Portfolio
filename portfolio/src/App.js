import "./App.css";
import NavBar from "./Home/NavBar";
import HomePage from "./Home/HomePage";
import MySkills from "./Home/MySkills";
import AboutMe from "./Home/AboutMe";
import Portfolio from "./Home/Portfolio";

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <MySkills />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default App;
