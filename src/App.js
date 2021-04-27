import React, { Component } from 'react';
import MemoForm from './MemoForm';
import AllMemo from './AllMemo';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <MemoForm />
        <AllMemo />
      </div>
    );
  }
}


// class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//         <h1>HELLO</h1>
//       </div>
//     );
//   }
// }

export default App;
