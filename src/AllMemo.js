import React, { Component } from 'react';

import { connect } from 'react-redux'; 

class AllMemo extends Component {
  render() {
    return (
      <div>
        <h1>All Memo</h1>
        {/* {console.log(this.props.posts)} */}
        {this.props.posts.map((post) => <post key={post.id} post={post} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state
  }
}

export default connect(mapStateToProps)(AllMemo);