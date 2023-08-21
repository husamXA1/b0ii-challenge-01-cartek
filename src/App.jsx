import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = React.useState(0);
  const themes = ["aston", "lexus"];

  function switchTheme() {
    setTheme((oldTheme) => (oldTheme + 1) % themes.length);
  }

  return (
    <div className={`app ${themes[theme]}`}>
      <div className="overlay"></div>
      <Header switchTheme={switchTheme} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
