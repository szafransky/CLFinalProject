import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
// import './App.css';

function App() {
  return (
    <div className="App">
    <Header title="FitMe"/>
    <Footer />
     
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
