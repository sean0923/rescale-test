import React, { Component } from 'react';
import './App.css';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import RecursiveComponent from './components/RecursiveComponent';
import SecondTest from './components/SecondTest';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import testData from './data/testData';

class App extends Component {
  render() {
    return (
      <div>
        <RecursiveComponent testData={testData} />
        <SecondTest />
      </div>
    );
  }
}

export default App;
