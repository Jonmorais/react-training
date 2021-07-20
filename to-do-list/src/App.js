import React from 'react';
import logo from './logo.svg';
import './App.css';



const Task = (value) => {
  return <li>{value}</li>;
};

const compromissos = [
  'Exame de Sangue',
  'Academia',
  'Nutricionista',
  'Palestra',
];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>To-do list</p>
        <ul>{compromissos.map((compromisso) => Task(compromisso))}</ul>
      </header>
    </div>
  );
}

// class App extends React.component {
//   render() {
//     return (
//     <ul>{compromissos.map((compromisso) => Task(compromisso))}</ul>
//     );
//   }
// }

export default App;
