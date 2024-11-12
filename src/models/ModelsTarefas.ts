import * as enums from "../utils/enums/EnumsTarefas";

class ModelsTarefas {
  titulo: string;
  prioridade: enums.Prioridade;
  status: enums.Status;
  descricao: string;
  id: number;

  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo;
    this.prioridade = prioridade;
    this.status = status;
    this.descricao = descricao;
    this.id = id;
  }
}

export default ModelsTarefas;
