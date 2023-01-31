import './App.css';

import React from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPFinder from './IPFinder'

function App() {
  return (
    <header className="App-header">
      <Banner title={'Sextant Field Tool'} />
      <div className="all-cards">
        <Exhibit header="IP Addresses">
          <IPFinder IPv4={true}/>
          <IPFinder IPv4={false}/>
        </Exhibit>
      </div>
    </header>

  );
}

export default App;
