import { configureStore } from "@reduxjs/toolkit";

import { todosApi } from "../services/todoApi";

export default configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
