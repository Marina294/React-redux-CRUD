import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import Memo from './Memo';

class AllMemos extends Component {
  render() {
    return (
      <div>
        <h1>All Memos</h1>
        {/* {console.log(this.props.posts)} */}
        {this.props.posts.map((post) => <Memo key={post.id} post={post} />)}
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