import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as enums from "../../utils/enums/EnumsTarefas"; // Importa enums que representam prioridades e status das tarefas

// Define a interface Tarefa para garantir o formato dos itens no estado
type Tarefa = {
  id: number;
  titulo: string;
  descricao: string;
  prioridade: enums.Prioridade;
  status: enums.Status;
};

type TarefasState = {
  itens: Tarefa[];
};

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: "Estudar titulo 1",
      descricao: "Estudar descrição",
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
    },
    {
      id: 2,
      titulo: "Estudar titulo 2",
      descricao: "Estudar descrição",
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA,
    },
    {
      id: 3, // Corrigido ID para ser único
      titulo: "Estudar titulo 3",
      descricao: "Estudar descrição",
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDA,
    },
  ],
};

const tarefasSlices = createSlice({
  name: "tarefas",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      // Remove a tarefa cujo ID corresponde ao ID passado na ação
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload),
      ];
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      );
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload;
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, "id">>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLocaleLowerCase() ===
          action.payload.titulo.toLocaleLowerCase()
      );

      if (tarefaJaExiste) {
        alert("Já existe uma tarefa com esse nome");
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1];
        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1,
        };
        state.itens.push(tarefaNova);
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      );
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE;
      }
    },
  },
});

// Exporta a ação "remover" para ser utilizada em outros componentes
export const { remover, editar, cadastrar, alteraStatus } =
  tarefasSlices.actions;

// Exporta o reducer para ser integrado na store principal
export default tarefasSlices.reducer;
