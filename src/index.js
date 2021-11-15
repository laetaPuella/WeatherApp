import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import SearchBar from './SearchBar';
import {getCurrentDate} from './Date';

var mykey = config.MY_KEY;
var secretkey = config.SECRET_KEY;

const App = () => {
  return (
  <div>
    <div>
      <h1 className="h1">WeatherApp</h1>
      <p className="date">{getCurrentDate()}</p>
      <main>
      <SearchBar />
      </main>
    </div>
  </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
