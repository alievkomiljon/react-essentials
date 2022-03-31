import logo from './logo.svg';
import React from 'react';
import './App.css';


function SecretComponent(){
  return <h1>Secret component</h1>;
}

function RegularComponent(){
  return <h1>Everyone can see this component</h1>;
}

function App(props) {
  return (
  <>
  {props.authorized ? <SecretComponent /> : <RegularComponent />}
    
  </>    
  );
}

export default App;
