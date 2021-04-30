import React, { Component } from 'react';
import {connect} from 'react-redux';
import { motion } from "framer-motion";

class MemoForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message,
      editing:false
    }
    // console.log(data)
    
    this.props.dispatch({
      type:'ADD_MEMO',
      data
    });
    this.getTitle.value = '';
    this.getMessage.value = '';
  }
  render() {
    return (
      <div className='note-container'>
        <form className='form' onSubmit={this.handleSubmit}>
          <input required type='text' ref={(input) => this.getTitle = input } placeholder="Note Title" />
          <textarea required row='10' cols="24" ref={(input) => this.getMessage = input} placeholder="Note Detail" />
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
          > 
            <button className='button_round'>+</button>
          </motion.div>
        </form>
      </div>
    );
  }
}

export default connect()(MemoForm);