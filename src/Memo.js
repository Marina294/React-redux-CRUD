import React, { Component } from 'react';
import { connect } from 'react-redux';

class Memo extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.message}</p>
        <button
          onClick={() => this.props.dispatch({type: 'EDIT_MEMO', id: this.props.post.id})}>
          Edit</button>
        <button 
          onClick={() => this.props.dispatch({type: 'DELETE_MEMO', id: this.props.post.id})}>
          Delete</button>
      </div>
    );
  }
}

export default connect()(Memo);