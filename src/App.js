import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import { helloUser } from './api/hello';
import './App.css';
var $ = require('jquery');
class App extends Component {
  onClickBtn() {
    fetch(helloUser).then((res) =>{
      return res.json()
    }).then((res) =>{
      console.log(res);
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a onClick={(e)=>{e.preventDefault(); this.props.history.push(`/xjt1`);}}>xjt1</a>
        <br/>
        <a onClick={(e)=>{e.preventDefault(); this.props.history.push(`/xjt2`);}}>xjt2</a>
        <br/>
        <a onClick={(e)=>{e.preventDefault(); this.props.history.push(`/lazy`);}}>lazy</a>
        <br/>
        <Button type="primary" onClick={this.onClickBtn.bind(this)}>Button</Button>
      </div>
    );
  }
}

export default App;
