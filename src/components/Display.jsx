import React, { Component } from 'react';

class Display extends Component {
  render() {
    var string = this.props.data.join('');
    return (
      <div className="Display">
        <div className="Display-name">Basio</div>
        <div className="Display-calc">{string}</div>
      </div>
    );
  }
}
export default Display;
