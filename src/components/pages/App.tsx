import Cronometro  from '../cronometro';
import Formulario from '../formulário';
import Lista from '../lista'
import React, { useState } from "react";
import style from "../pages/App.module.scss"
import '../pages/reset.scss';
import { ITarefa } from '../../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
