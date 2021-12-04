import React from 'react';
import './App.css';
import colors from './colorsData.js';

class App extends React.Component {
  constructor() {
    super();
    console.log(this)
    this.state = {
      filterText: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ filterText: event.target.value })}

  render() {
    return(
      <main>
        <input value={ filterText } type="text" onChange={ this.handleChange } />
        <ul>
          {
            colors
              .filter(({ name }) => name.includes(filterText))
              .map(({ name, hex }) => (
                <li key={ hex }>
                  <div style={ { background: hex } } className="color-display" />
                  {name}
                </li>
              ))
          }
        </ul>
      </main>
    )
  }
}

export default App;
