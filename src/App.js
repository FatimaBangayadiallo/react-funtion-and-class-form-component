import React from 'react';
import ReactDOM from 'react-dom';
import Function from './components/Function'
import ClassComponentForm from './components/class'

class App extends React.Component {

  render(){
    return (
      <div>
      <Function/>
      < ClassComponentForm/>
      </div>

    );
  }

};
export default App;
