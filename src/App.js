import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import List from './components/List'
import a11yErrors from './components/A11yMessages/reducer'
import A11yMessages from './components/A11yMessages'
import Errors from './components/Errors'

const rootReducer = combineReducers({
  form: formReducer,
  a11yErrors
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export {
  store
};

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <A11yMessages />
            <Errors />
            <List/>
          </div>
      </Provider>
    );
  }
}

export default App;
