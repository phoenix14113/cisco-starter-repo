import './App.css';
import React from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <header className="App-header">
        <Banner title={'Sextant Field Tool'}/>
        <div class="all-cards">
          <Exhibit header="hello" children={[<p>I</p>,<p>love</p>,<p>you.</p>]}/>
          <Exhibit header="World" children={[<p>You</p>,<p>are</p>,<p>Great.</p>]}/>
        </div>
    </header>

  );
}

export default App;
