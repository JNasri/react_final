import "./App.css";
import Banner from "./components/header/banner/Banner";
import NavigateBar from "./components/header/nav/Nav";
import SwitchLang from "./components/langButton/SwitchLang";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Education from "./components/education/Education";

function App() {
  return (
    <div className="App bg-dark">
      <SwitchLang />
      <Banner />
      <NavigateBar />
      <Education />
    </div>
  );
}

export default App;
