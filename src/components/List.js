import React, { Component } from 'react';
import {
  setA11yError,
  clearA11yErrors
} from './A11yMessages/actions';
import { connect } from "react-redux";

const ERROR = "I am the error"

class List extends Component {
  constructor(props){
    super(props);
    this.handleClickError = this.handleClickError.bind(this);
    this.handleClickOk = this.handleClickOk.bind(this);
    this.state = {
      showError: false
    };
  }

  // First example
  handleClickError(e) {
    this.props.dispatch(clearA11yErrors()); //To trigger announce of the same error I should set empty string

    //setTimeout(() => this.props.dispatch(setA11yError(ERROR)), 200) // <- works fine every time (number could be different and depends on how complicated your component)

    // requestAnimationFrame(() => this.props.dispatch(setA11yError(ERROR))) // <- doesn't work as replacement for setTimeout

    this.props.dispatch(setA11yError(ERROR)) // <- works only if you previously click "Here is no error" button. If you click just first and second button it doesn't work

    this.setState({
      showError: true
    })
  }

  handleClickOk(e) {
    this.props.dispatch(clearA11yErrors());
    this.setState({
      showError: false
    })
  }

  render() {
    return (
      <ul>
        <li>
          <button type="button" onClick={ this.handleClickError }>Here is an error</button>
        </li>
        <li>
          <button type="button" onClick={ this.handleClickError }>Here is the same error for another action</button>
        </li>
        <li>
          <button type="button" onClick={ this.handleClickOk }>Here is no error</button>
        </li>
      </ul>
    )
  }
}

export default connect()(List);
