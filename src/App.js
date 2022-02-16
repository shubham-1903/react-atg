import React from 'react';
import './style.css';
import NavbarComponent from './components/Navbar/NavbarComponent'
import {Button} from 'react-bootstrap'

export default function App() {
  return (
    <>
    <NavbarComponent/>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Button>Test</Button>
    </>
  );
}
