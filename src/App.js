import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <h2>Welcome to Rockford Website</h2>
        <p>Your content goes here</p>
      </main>
    </div>
  );
}

export default App;
