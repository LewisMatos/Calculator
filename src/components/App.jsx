import React, { Component } from 'react';
import Button from './Button';
import Buttons from './Buttons';
import Display from './Display';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  parse() {
    let number = this.state.display.join('').split(/[-|+|*|/|]/);
    let operator = this.state.display
      .join('')
      .split(/[\d]/)
      .filter(x => x);
    return { number, operator };
  }

  calculate() {
    let { number, operator } = this.parse();

    let sum = Number(number[0]);
    operator.forEach((op, idx) => {
      let num = Number(number[idx + 1]);
      switch (op) {
        case '+':
          sum = sum + num;
          break;
        case '-':
          sum = sum - num;
          break;
        case '*':
          sum = sum * num;
          break;
        case '/':
          sum = sum / num;
          break;
        default:
          sum = 0;
          break;
      }
    });
    this.setState({
      display: [sum],
    });
  }

  handleClick(e) {
    var value = e.target.dataset.value;
    switch (value) {
      case 'clear':
        this.setState({ display: [] });
        break;
      case 'equal':
        this.calculate();
        break;
      default:
        this.setState({
          display: [...this.state.display, value],
        });
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <Display data={this.state.display} />
        <Buttons>
          <Button onClick={this.handleClick} label="C" value="clear" />
          <Button onClick={this.handleClick} label="7" color="dark" value="7" />
          <Button onClick={this.handleClick} label="4" color="dark" value="4" />
          <Button onClick={this.handleClick} label="1" color="dark" value="1" />
          <Button onClick={this.handleClick} label="0" color="dark" value="0" />

          <Button onClick={this.handleClick} label="&#x2797;" value="/" />
          <Button onClick={this.handleClick} label="8" color="dark" value="8" />
          <Button onClick={this.handleClick} label="5" color="dark" value="5" />
          <Button onClick={this.handleClick} label="2" color="dark" value="2" />
          <Button onClick={this.handleClick} value="null" color="dark" />

          <Button onClick={this.handleClick} label="&#x2716;" value="*" />
          <Button onClick={this.handleClick} label="9" color="dark" value="9" />
          <Button onClick={this.handleClick} label="6" color="dark" value="6" />
          <Button onClick={this.handleClick} label="3" color="dark" value="3" />
          <Button label="" value="null" color="dark" />

          <Button onClick={this.handleClick} label="&#x2796;" value="-" />
          <Button onClick={this.handleClick} label="+" size="2" value="+" />
          <Button onClick={this.handleClick} label="=" size="2" value="equal" />
        </Buttons>
      </div>
    );
  }
}

export default App;
