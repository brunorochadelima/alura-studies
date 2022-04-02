import Cronometro from "../cronometro";
import Formulario from "../formulário";
import Lista from "../lista";
import React, { useState } from "react";
import style from "../pages/App.module.scss";
import "../pages/reset.scss";
import { ITarefa } from "../../types/tarefa";
import {tempoParaSegundos} from "../../common/utils/date";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  tempoParaSegundos("02:05:03")

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} 
       selecionaTarefa={selecionaTarefa}
      />
      <Cronometro />
    </div>
  );
}

export default App;
