import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as enums from "../../utils/enums/EnumsTarefas";

type FiltroState = {
  termo?: string; //busca do usuário
  criterio: "prioridade" | "status" | "todas"; //usuario pode buscar por esses dois parâmetros
  valor?: enums.Prioridade | enums.Status;
};

const initialState: FiltroState = {
  termo: "",
  criterio: "todas",
};

const filtroSlice = createSlice({
  name: "filtro",
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload;
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio;
      state.valor = action.payload.valor;
    },
  },
});

export const { alteraTermo, alterarFiltro } = filtroSlice.actions;

export default filtroSlice.reducer;
