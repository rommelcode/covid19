import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import MainLayout from './MainLayout';
import ContainerLayout from './ContainerLayout';
import CardContainer from './CardContainer';

function App() {
  return (

    // <CardContainer></CardContainer>
     <MainLayout></MainLayout>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
