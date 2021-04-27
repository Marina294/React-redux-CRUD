import React, { Component } from 'react';
import {connect} from 'react-redux';

class MemoForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message
    }
    console.log(data)
    
    this.props.dispatch({
      type:'ADD_POST',
      data
    });
    this.getTitle.value = '';
    this.getMessage.value = '';
  }
  render() {
    return (
      <div>
        <h1>Create Memo</h1>
        <form onSubmit={this.handleSubmit}>
          <input required type="text" ref={(input) => this.getTitle = input } placeholder="Enter Memo Title" />
          <br />
          <br />
          <textarea required row="5" ref={(input) => this.getMessage = input} cols="28" placeholder="Enter Memo Detail" />
          <br />
          <br />
          <button>Add New Memo</button>
        </form>
      </div>
    );
  }
}

export default connect()(MemoForm);