import './App.css';
import React from 'react';


function App() {
  return (
    <header className="App-header">
        <Banner/>
        <div>
          <Exhibit header="hello" children={[<p>I</p>,<p>love</p>,<p>you.</p>]}/>
          <Exhibit header="World" children={[<p>You</p>,<p>are</p>,<p>Great.</p>]}/>
        </div>
    </header>

  );
}
function Banner () {

    return (
      <h1>Sextant Field Tool</h1>
    )
  
}
function Exhibit (props) {

    return (
      
      <card class="data-points">
        <h2>{props.header}</h2>
        {props.children}
      </card>
    )

}

export default App;
