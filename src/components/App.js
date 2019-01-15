import React, { Component } from 'react';
import {connect} from 'react-redux';
class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.textValue}</h1>  
      </div>
    )
  }
}
const mapStateToProps = state=> ({
  textValue  : state.sayHello.textValue
})

export default connect(mapStateToProps , {})(App) ;
