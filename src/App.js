import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import MainLayout from './MainLayout';
import ContainerLayout from './ContainerLayout';
import CardContainer from './CardContainer';
import StyleObject from './StyleObject';

function App() {
  return (

    // <CardContainer></CardContainer>
     <StyleObject></StyleObject>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
