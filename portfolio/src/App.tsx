import React from 'react';
import './App.css';
import './own.css'
import HeaderButton from "./components/HeaderButton/HeaderButton";
import ConsoleText from "./components/ConsoleText/ConsoleText";

function App() {
  return (
    <div className="App">
      <header>
        <div id="header">
          <div id="title">
            <ConsoleText mainText="Jakub Sowa - Software Engineer"/>
          </div>
          <nav>
            <div id="navigation">
              <HeaderButton mainText="About me"/>
              <HeaderButton mainText="Experience"/>
              <HeaderButton mainText="Projects"/>
              <HeaderButton mainText="Contact"/>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="main">
          <div id="content"> should be some content</div>
        </div>
      </main>
      <footer>
        Test footer
      </footer>
    </div>
  );
}

export default App;
