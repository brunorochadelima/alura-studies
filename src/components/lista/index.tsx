import { ITarefa } from "../../types/tarefa";
import style from "../lista/Lista.module.scss";
import Item from "./Item";

function Lista({ tarefas }: { tarefas: ITarefa[]}) {
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
