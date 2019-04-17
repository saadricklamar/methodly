import React, { Component } from 'react';
import WelcomeOptions from './WelcomeOptions.js';
import Game from './Game.js';
import logo from './logo.svg';
import './App.scss';


class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSet: [],
      selectedPath: '',
      showWelcomeScreen: true,
      stringMethodQuestions: [],
      stringMethodAnswers: [],
      mathMethodQuestions: [],
      mathMethodAnswers: []
    }
  }

  componentDidMount() {
    fetch('https://fe-apps.herokuapp.com/api/v1/memoize/1901/saadricklamar/methods')
    .then(response => response.json())
    .then(data => {this.setState({ dataSet: data.methods});})
    .catch(error => {throw new Error(error);});
  }

   chooseGamePath = (e) => {
      this.setState({selectedPath: e.target.value, showWelcomeScreen: false})
      setTimeout(this.gamePath, 100); 
  }

  gamePath = () => {
    if(this.state.selectedPath === 'String Methods') {
      let stringQuestions = this.state.dataSet.filter(method => method.type === 'string').map(stringMethod => stringMethod.description)
      let stringAnswers = this.state.dataSet.filter(method => method.type === 'string').map(stringMethod => stringMethod.name)
      this.setState({stringMethodQuestions: stringQuestions, stringMethodAnswers: stringAnswers});
    } else {
      let mathQuestions = this.state.dataSet.filter(method => method.type === 'math').map(mathMethod => mathMethod.description);
      let mathAnswers= this.state.dataSet.filter(method => method.type === 'math').map(mathMethod => mathMethod.name);
      this.setState({mathMethodQuestions: mathQuestions, mathMethodAnswers: mathAnswers});
    }
  }

  
  render() {
    let page;
    if(this.state.showWelcomeScreen) {
      page = <WelcomeOptions chooseGamePath={this.chooseGamePath}
            />     
    } else if(this.state.stringMethodQuestions.length || this.state.mathMethodQuestions.length) {
      page = <Game stringMethodQuestions={this.state.stringMethodQuestions}
                   stringMethodAnswers={this.state.stringMethodAnswers}
                   mathMethodQuestions={this.state.mathMethodQuestions}
                   mathMethodAnswers={this.state.mathMethodAnswers}        
            />
    }
    return(<div>{page}</div>)
  }


}

export default App;
