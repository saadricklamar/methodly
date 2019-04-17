import React, { Component } from 'react';
import './Game.scss';



class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      currentCard: 0,
      currentQuestion: '',
      wrongCounter: 0,
      incorrectQuestions: []
    }

  }

  handleChange = (e) => {
    this.setState({answer: e.target.value})
  }

  matchAnswer = () => {
    this.state.currentCard++;
   if(this.props.stringMethodAnswers.length) {
      let result = this.props.stringMethodAnswers.find(methodAnswer => {
        return this.state.answer === methodAnswer 
    });
   if(this.state.answer === result) {
        this.rightAnswer();     
      } else {
        this.wrongAnswer();
      }
    this.setState({currentQuestion: this.props.stringMethodQuestions.pop()})
   } else if(this.props.mathMethodAnswers.length) {
      let result = this.props.mathMethodAnswers.find(methodAnswer => {
        return this.state.answer === methodAnswer 
    });
   if(this.state.answer === result) {
        this.rightAnswer();     
      } else {
        this.wrongAnswer();
      }
    this.setState({currentQuestion: this.props.mathMethodQuestions.pop()})
  }
  document.querySelector('#answer-input').value = '';
  this.setState({answer: ''});
}

  rightAnswer = () => {
   document.querySelector('.right-answer').style.display = 'block'
   setTimeout(this.hideRightAnswer, 2000)
  }

  hideRightAnswer= () => {
    document.querySelector('.right-answer').style.display = 'none'
  }


  wrongAnswer = () => {
    document.querySelector('.wrong-answer').style.display = 'block'
    setTimeout(this.hideWrong, 2000)
    this.state.wrongCounter++;
    if(this.state.wrongCounter === 1) {
      document.querySelector('#OneX').style.display = 'inline-block';
    } else if(this.state.wrongCounter === 2) {
      document.querySelector('#OneX').style.display = 'inline-block';
      document.querySelector('#TwoX').style.display = 'inline-block';
    } else if(this.state.wrongCounter === 3) {
      document.querySelector('#OneX').style.display = 'inline-block';
      document.querySelector('#TwoX').style.display = 'inline-block';
      document.querySelector('#ThreeX').style.display = 'inline-block';
    }
    this.state.incorrectQuestions.push(this.state.currentQuestion)
    this.saveToStorage();
  }

  hideWrong = () => {
    document.querySelector('.wrong-answer').style.display = 'none'
  }

  gameOver = () => {
    window.location.reload();
  }

   saveToStorage = () => {
      let stringifiedCards = JSON.stringify(this.state.incorrectQuestions);
      localStorage.setItem('saveToStudyLater', stringifiedCards);
  }
  
  studyIncorrectCards() {
      let localStorageCards = JSON.parse(localStorage.getItem('saveToStudyLater'))
      this.setState({currentQuestion: this.localStorageCards.pop()})
  } 

  render() { 
    console.log(this.state.currentCard)
    let question;
      if (this.state.currentCard === 0) {
         question = this.props.stringMethodQuestions[0] || this.props.mathMethodQuestions[0];
      } else {
        question = this.state.currentQuestion
      } 
      if (this.state.wrongCounter === 3) {
        document.querySelector('#answer-submit').disabled = true;
        question = `Oh no! You killed Socrates. You need more practice. Please click the restart button.`
      }
      if(this.state.currentCard === 10 && !this.props.stringMethodQuestions.length || this.state.currentCard === 25 && !this.props.mathMethodQuestions.length) {
        document.querySelector('#answer-submit').disabled = true;
        question = 'Congrats on not killing Socrates! You are a master of these methods. Click restart to try another.'
      }
    return(
      <div className='welcome'>
        <p className='right-answer'>Correct Answer!</p>
        <p class='wrong-answer'>Wrong Answer!</p>
          <article className='card'>
            <h2 className='question'>{question}</h2> 
          </article>
          <input type='text' id='answer-input' placeholder='Enter Answer Here' onChange={this.handleChange}/>
          <input type='Submit' id='answer-submit' onClick={this.matchAnswer}/> 
          <input type='Submit' id='restart' value='Restart' onClick={this.gameOver}/> 
          <section className='wrong'>
            <i className='fas fa-times' id='OneX'></i>
            <i className='fas fa-times' id='TwoX'></i>
            <i className='fas fa-times' id='ThreeX'></i>
          </section>
      </div>
      )
  }




}


 export default Game;