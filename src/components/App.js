import React, { Component } from 'react';
import {connect} from 'react-redux';
class App extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">{this.props.textValue}</h1>
            <p>thanks </p>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state=> ({
  textValue  : state.sayHello.textValue
})

export default connect(mapStateToProps , {})(App) ;
