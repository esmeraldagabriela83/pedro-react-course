import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import AppPedro from "./js/AppPedro.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App propColor={"red"} propNr={4} propText={"App"}/>
  </React.StrictMode>
);


//---------------------------------

const rootPedro = ReactDOM.createRoot(document.getElementById('rootPedro'));
rootPedro.render(
  <React.StrictMode>
    <AppPedro propColor={"green"} propNr={7} propText={"AppPedro"}/>
  </React.StrictMode>
);


//---------------------------------
