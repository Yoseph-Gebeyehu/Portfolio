import "./App.css";
import NavBar from "./Home/NavBar";
import Home from "./Home/HomePage";
import HomePage from "./Home/HomePage";
import MySkills from "./Home/MySkills";
import AboutMe from "./Home/AboutMe";

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <MySkills />
      <AboutMe />
    </div>
  );
}

export default App;
