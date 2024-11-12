import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { cadastrar } from "../../store/reducers/TarefasReducers";
import { BotaoSalvar, Campo, MainContainer, Titulo } from "../../styles/styles";
import * as enums from "../../utils/enums/EnumsTarefas";
import { Form, Opcao, Opcoes } from "./styleFormulario";
import { useNavigate } from "react-router-dom";

const IndexFormulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL);

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault();

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE,
      })
    );
    navigate("/");
  };
  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridades</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{" "}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  );
};

export default IndexFormulario;
