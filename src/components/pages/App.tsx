import Cronometro from "../cronometro";
import Formulario from "../formulário";
import Lista from "../lista";
import React, { useState } from "react";
import style from "../pages/App.module.scss";
import "../pages/reset.scss";
import { ITarefa } from "../../types/tarefa";
import { tempoParaSegundos } from "../../common/utils/time";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }

  function finalizarTarefa() {
    if (selecionado) {
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }
          return tarefa;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
