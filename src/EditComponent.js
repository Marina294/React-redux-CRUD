import React, { Component } from 'react';
import { connect } from 'react-redux';
import { motion } from "framer-motion";
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';

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
          <motion.div 
            className='button_text'
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
          > 
            <button className='button_text'>
              <CheckOutlinedIcon />
            </button>
          </motion.div>
        </form>
      </div>
    );
  }
}

export default connect()(EditComponent);