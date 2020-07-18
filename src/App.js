import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import MainLayout from './MainLayout';
import ContainerLayout from './ContainerLayout';
import CardContainer from './CardContainer';
import StyleObject from './StyleObject';


const styles = () => ({
  Paper: {
    padding: 2,
    "font-family": "Impact, Charcoal, sans-serif",
    "font-size": 22,
    marginTop: 15,
    height: 200,
    overflowY: "auto",
    "border-bottom": "solid red 2px"
  }
});



function App() {
  return (

    <CardContainer></CardContainer>
    //  <StyleObject></StyleObject>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
