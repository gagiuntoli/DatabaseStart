import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      german: "",
      english: "",
      wordList: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/get').then((response)=>{
      this.setState({
        wordList: response.data
      })
    })
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

     let wordList = [...this.state.wordList];
     wordList.push({
       german: this.state.german,
       english: this.state.english
     })
     this.setState({
       wordList: wordList,
     })
  }

  deleteCard = (id) => {
    console.log(this.state.wordList[id])
    // Delete from database
    axios.delete(`http://localhost:3001/api/delete/${this.state.wordList[id].german}`);

    let wordList = [...this.state.wordList]
    wordList.splice(id, 1);
    this.setState({
      wordList: wordList
    })
  }

  render() {

    const wordlist = this.state.wordList.map((word, id) => {
      return (
          <div className="mycard" key={id}>
          <div className="col m5 l5">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{word.german}</span>
                <p>Explanation: {word.english}</p>
              </div>
              <div className="card-action">
                <button onClick={(e) => {this.deleteCard(id)}}>Delete</button>
              </div>
            </div>
          </div>
          </div>
      )
    })
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
        {wordlist}
      </div>
    );
  }
}


export default App;
