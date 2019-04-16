import React, { Component } from 'react';
import './WelcomeOptions.scss';


class WelcomeOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }


  }


  render() {
    return(
      <div className='welcome'>
        <header className='welcome-header'>
          <h1>Methodly: Where Socrates Lives Or Dies According To How Much You Know</h1>
        </header>
        <h3>Please Select A Path</h3>
        <section class='choices'>
          <input type='submit' value='String Methods' onClick={this.props.chooseGamePath}/>
          <input type='submit' value='Math Methods' onClick={this.props.chooseGamePath}/>
        </section>
      </div>
      )

  }




}


 export default WelcomeOptions;