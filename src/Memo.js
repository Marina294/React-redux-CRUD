import React, { Component } from 'react';
import { connect } from 'react-redux';
import { motion } from "framer-motion";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

class Memo extends Component {
  render() {
    return (
      <div >
        <motion.div
          className='note'
          initial={{ y: 600 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          >
        <h2 className='note_title'>{this.props.post.title}</h2>
        <div className='note_message'>
        <p>{this.props.post.message}</p>
        </div>
        <div className="control-buttons">
        <motion.div 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
          > 
          <EditOutlinedIcon className="button_text"
            onClick={() => this.props.dispatch({type: 'EDIT_MEMO', id: this.props.post.id})} />
          {/* <button className="button_text"
            onClick={() => this.props.dispatch({type: 'EDIT_MEMO', id: this.props.post.id})}>
            Edit</button> */}
        </motion.div>
        <motion.div 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
        > 
          <DeleteOutlinedIcon className="button_delete"
            onClick={() => this.props.dispatch({type: 'DELETE_MEMO', id: this.props.post.id})} />
          {/* <button className="button_delete"
            onClick={() => this.props.dispatch({type: 'DELETE_MEMO', id: this.props.post.id})}>
            ×</button> */}
        </motion.div>       
        </div>
        </motion.div>
      </div>
      
    );
  }
}

export default connect()(Memo);