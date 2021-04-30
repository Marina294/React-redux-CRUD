import React, { Component } from 'react';
import MemoForm from './MemoForm';
import AllMemos from './AllMemos';
import { motion } from "framer-motion";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className="navbar">
        <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        Note Down Something
      </motion.h1>
          {/* <h1>Note Down Something</h1> */}
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
