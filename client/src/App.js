import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      german: "",
      english: ""
    }
  }

  handleGermanWord = (e) =>{
    this.setState({
      german: e.target.value
    })
    console.log('german:' + this.state.german)
  }

  handleEnglishWord = (e) =>{
    this.setState({
      english: e.target.value
    })
  }

  submitRequest = (e) => {
    axios.post('http://localhost:3001/api/insert',
     {
       german: this.state.german,
       english: this.state.english
     }).then(()=>{
       alert('succesful insert')
     })
  }

  render() {
    return (
      <div className="App">
        <h1>CRUD APPLICATION</h1>

        <div className="form">
          <label>Word in German</label>
          <input type="text" name="german" onChange={this.handleGermanWord} value={this.state.german}/>
          <label>Word in English</label>
          <input type="text" name="english" onChange={this.handleEnglishWord} value={this.state.english}/>
          <button onClick={this.submitRequest}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
