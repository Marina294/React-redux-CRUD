import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage
    }
    this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
  }
  render() {
    return (
      <div className='note'>
        <form className='form' onSubmit={this.handleEdit}>
          <input required type='text' ref={(input) => this.getTitle = input}
          defaultValue={this.props.post.title} placeholder='Note Title' />
          <textarea required row='5' ref={(input) => this.getMessage = input}
          defaultValue={this.props.post.message} cols='28' placeholder='Note deatil' />
          <button className='button_text'>Update</button>
        </form>
      </div>
    );
  }
}

export default connect()(EditComponent);