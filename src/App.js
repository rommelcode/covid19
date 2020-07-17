import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import MainLayout from './MainLayout';
import ContainerLayout from './ContainerLayout';

function App() {
  return (

    <MainLayout></MainLayout>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
