
import React, { Component } from "react";

class UpdateState extends Component {
  
    state = {
      text: 'click me'
    }
    handleUpdate = (newtext) => {
      this.setState({ text: newtext })
    }
    
    render() {
      return (
        <div>
          <Child
            text={this.state.text}
            updateState={this.handleUpdate}>
          </Child>
        </div>
      );
    }
  }
  class Child extends Component {
    
    render() {
      return (
        <button 
          // Using parent props to update parent state
          onClick={() => this.props
              .updateState('parent state changed')}>
          {this.props.text}
        </button>
      )
    }
  }
    

export default UpdateState;