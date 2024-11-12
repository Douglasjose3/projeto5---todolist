import { configureStore } from "@reduxjs/toolkit";
import tarefasReducers from "./reducers/TarefasReducers";
import filtroReducer from "./reducers/FiltroReducers";

// Configura a store do Redux
const store = configureStore({
  reducer: {
    // Adiciona o reducer de tarefas à store
    tarefas: tarefasReducers,
    filtro: filtroReducer,
  },
});

// Define o tipo RootReducer, baseado no tipo de estado retornado pelo store
export type RootReducer = ReturnType<typeof store.getState>;

export default store;
