import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { shallow } from 'enzyme';

const mockSetTimeout = jest.useFakeTimers();
const mockFunc = jest.fn();
const mockStringQuestions = ["Returns the character at the specified index (position)", "Returns the Unicode of the character at the specified index", "Joins two or more strings, and returns a new joined strings", "Checks whether a string ends with a specified string/characters", "Converts Unicode values to characters", "Checks whether a string contains the specified string/characters", "Returns the position of the first found occurence of a specified value in a string", "Returns the position of the last found occurence of a specified value in a string", "Compares two strings in the current locale", "Searches a string for a match against a regular expression, and returns the matches", "Searches a string for a specified value, or regula…expression, and returns the position of the match", "Searches a string for a specified value, or regula…expression, and returns the position of the match", "Extracts a part of a string and returns a new string", "Splits a string into an array of substrings", "Checks whether a string begins with specified characters", "Extracts the characters from a string, beginning a…on, and through the specified number of character", "Extracts the characters from a string, between two specified indices", "Converts a string to lowercase letters, according to the host's locale", "Converts a string to uppercase letters, according to the host's locale", "Converts a string to lowercase letters", "Returns the value of a String object", "Converts a string to uppercase letters", "Removes whitespace from both ends of a string", "Returns the primitive value of a String object"];

const mockStringAnswers = ["charAt()", "charCodeAt()", "concat()", "endsWith()", "fromCharCode()", "includes()", "indexOf()", "lastIndexOf()", "localCompare()", "match()", "replace()", "search()", "slice()", "split()", "startsWith()", "substr()", "substring()", "toLocaleLowerCase()", "toLocaleUpperCase()", "toLowerCase()", "toString()", "toUpperCase()", "trim()", "valueOf()"];

const mockMathQuestions = ["Returns a random number between 0 and 1", "Rounds x to the nearest integer", "Returns the value of x to the power of y", "Returns x, rounded downwards to the nearest integer", "Returns the number with the highest value", "Returns the number with the lowest value", "Returns the absolute value of x", "Returns x, rounded upwards to the nearest integer", "Returns the value of Ex"];

const mockMathAnswers = ["random()", "round(x)", "pow(x,y)", "floor(x)", "max(x,y,z,...,n)", "min(x,y,z,...,n)", "abs(x)", "ceil(x)", "exp(x)"];

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  it('Should have default states', () => {
    expect(wrapper.state()).toEqual ({
      dataSet: [],
      selectedPath: '',
      showWelcomeScreen: true,
      stringMethodQuestions: [],
      stringMethodAnswers: [],
      mathMethodQuestions: [],
      mathMethodAnswers: []
    });
  });
  it('Should have the function chooseGamePath', () => {
    const mockEvent = {target:{value: 'e'}}
    wrapper.instance().chooseGamePath(mockEvent);
  });
  it('Should change the state of showWelcomeScreen', () => {
    expect(wrapper.state('showWelcomeScreen')).toEqual(true);
    const mockEvent = {target:{value: 'e'}}
    wrapper.instance().chooseGamePath(mockEvent);
    expect(wrapper.state('showWelcomeScreen')).toEqual(false);
  });
  it('Should setState of selectedPath', () => {
    expect(wrapper.state('selectedPath')).toEqual('')
    const mockEvent = {target:{value: 'e'}}
    wrapper.instance().chooseGamePath(mockEvent);
    expect(wrapper.state('selectedPath')).toEqual('e')
  });
  it('Should have the function gamePath', () => {
    wrapper.instance().gamePath();
  });
  it('Should check if setTimeout has been called', () => {
    expect(setTimeout).toHaveBeenCalledTimes(3);
    });
  // it('Should setState of stringMethodQuestions', () => {
  //   expect(wrapper.state('stringMethodQuestions')).toEqual([])
  //   wrapper.instance().gamePath();
  //   wrapper.setState({stringMethodQuestions: mockStringQuestions})
  //   expect(wrapper.state('stringMethodQuestions')).toEqual({mockStringQuestions})
  // });
  
});
