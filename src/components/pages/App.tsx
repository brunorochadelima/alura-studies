import React from 'react';
import Cronometro  from '../cronometro';
import Formulario from '../formulário';
import Lista from '../lista'
import style from "../pages/App.module.scss"
import '../pages/reset.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario/>
      <Lista/>
      <Cronometro/>
    </div>
  );
}

export default App;
