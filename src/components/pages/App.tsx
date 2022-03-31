import Cronometro  from '../cronometro';
import Formulario from '../formulário';
import Lista from '../lista'
import React, { useState } from "react";
import style from "../pages/App.module.scss"
import '../pages/reset.scss';

function App() {
  const [tarefas, setTarefas] = useState([
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "03:00:00",
    },
    {
      tarefa: "Typescript",
      tempo: "01:00:00",
    },
  ]);

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
