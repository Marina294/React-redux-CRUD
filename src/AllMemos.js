import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Memo from './Memo';
import EditComponent from './EditComponent';
import { motion } from "framer-motion";

class AllMemos extends Component {
  render() {
    return (
      <div className='all_notes'>
        <div className='section'>
          <motion.h1
          className='note_heading'
          initial={{ y: 600 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          >
            Notes
          </motion.h1>
        </div>
        {/* {console.log(this.props.posts)} */}
        {/* {this.props.posts.map((post) => <Memo key={post.id} post={post} />)} */}
        {this.props.posts.map((post) => (
          <div key={post.id}>
            {post.editing ? <EditComponent key={post.id} post={post} /> :
            <Memo key={post.id} post={post}/>}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state
  }
}

export default connect(mapStateToProps)(AllMemos);