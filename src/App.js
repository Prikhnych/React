import "./App.css";


import Header from "../src/models/header/Header.jsx";
import Nav from "../src/models/nav__bar/Nav.jsx";
import Futer from "../src/models/futer/Futer.jsx";
import Content from "./models/content/MainContent/Content.jsx";

function App() {
  return (
    <div className="App">
      <div className="app__wrap">
        <Header />
        <Nav />
        <Content />
        <Futer />
      </div>
    </div>
  );
}

export default App;
