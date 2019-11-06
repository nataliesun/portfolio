import React, { Component } from 'react';
import posed from 'react-pose';
import './StartPage.scss'

const Box = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

class StartPage extends Component {
  state = { isVisible: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 2000);
  }

  render() {
    return (
      <Box
        className="box"
        pose={this.state.isVisible ? 'visible' : 'hidden'}
      />
    );
  }
}

export default StartPage;