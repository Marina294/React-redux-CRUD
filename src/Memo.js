import React, { Component } from 'react';
import { connect } from 'react-redux';


class Memo extends Component {
  render() {
    return (
      <div className='note'>
        <h2 className='note_title'>{this.props.post.title}</h2>
        <div className='note_message'>
        <p>{this.props.post.message}</p>
        </div>
        <div className="control-buttons">
          <button className="button_text"
            onClick={() => this.props.dispatch({type: 'EDIT_MEMO', id: this.props.post.id})}>
            Edit</button>
          <button className="button_delete"
            onClick={() => this.props.dispatch({type: 'DELETE_MEMO', id: this.props.post.id})}>
            ×</button>
        </div>
      </div>
      
    );
  }
}

export default connect()(Memo);