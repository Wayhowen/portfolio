import React from 'react';
import './App.css';
import './own.css'

function App() {
  return (
    <div className="App">
      <header>
        <div id="header">
          <div id="title">
            <div id="console">Jakub Sowa - Software Engineer</div>
            <div id="console-underscore">_</div>
          </div>
          <nav>
            <div id="navigation">
              <button className="header-button">About me</button>
              <button className="header-button">Experience</button>
              <button className="header-button">Projects</button>
              <button className="header-button">Contact</button>
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
