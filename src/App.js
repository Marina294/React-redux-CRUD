import React, { Component } from 'react';
import MemoForm from './MemoForm';
import AllMemos from './AllMemos';

class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <h1>Note Down Something</h1>
        </div>
        <MemoForm />
        <AllMemos />
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>HELLO</h1>
//       </div>
//     );
//   }
// }

export default App;
