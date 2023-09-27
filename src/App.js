import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Banner from "./components/header/banner/Banner";
import NavigateBar from "./components/header/nav/Nav";
import SwitchLang from "./components/langButton/SwitchLang";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import ContactForm from "./components/footer/ContactForm";

function App() {
  return (
    <div className="App bg-dark" style={{ direction: "ltr" }}>
      <SwitchLang />
      <Banner />
      <NavigateBar />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <ContactForm/>
    </div>
  );
}

export default App;
