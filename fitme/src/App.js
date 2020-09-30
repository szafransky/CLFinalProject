import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
// import './App.css';

function App() {
  return (
    <div className="App">
    <Header title="FitMe"/>
    
     
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
