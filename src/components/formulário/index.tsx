import React from "react";
import Botao from "../botão";
import style from "../formulário/Formulario.module.scss"

class Formulario extends React.Component {
  // em class componentes o state deve vir antes do render
  state = { 
    tarefa: "",
    tempo: "00:00"
  }

  adicionarTarefa(evento: React.FormEvent) {
    evento.preventDefault();
    console.log('state: ', this.state);
  }


  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input 
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
            id="tarefa"
            placeholder="O que você quer estudar"
            required
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input type="time"
          name="tempo"
          value={this.state.tempo} 
          onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
          id="tempo"
          step="1"
          min="00:00:00"
          max="01:30:00" 
          required/>
        </div>
        <Botao>Adicionar</Botao>
      </form>
    );
  }
}

export default Formulario;
