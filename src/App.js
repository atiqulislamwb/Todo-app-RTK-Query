import React from "react";

import {
  useGetTodosQuery,
  useGetTodoQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "./redux-query/services/todoApi";

function App() {
  const {
    data: todos,
    error,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetTodosQuery();

  const [addTodo] = useAddTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  return (
    <div className="font-mono ">
      <h1>React Redux Toolkit RTK Query </h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...isFetching</h2>}
      {error && <h2>Something went wrong</h2>}

      {isSuccess && (
        <div className=" gap-5 flex flex-wrap items-center justify-center">
          {todos?.map((item) => (
            <div
              key={item.id}
              className="w-64 h-64 inline-block p-3 bg-slate-700 overflow-y-scroll text-white"
            >
              <h4>{item.email}</h4>

              <div>
                <TodoDetails id={item.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export const TodoDetails = (id) => {
  const { data } = useGetTodoQuery(id);
  console.log(data);
  return <pre>{JSON.stringify(data, undefined, 2)}</pre>;
};

export default App;
