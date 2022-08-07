import React from "react";
import { useGetTodoQuery } from "../redux-query/services/todoApi";

const TodoDetails = () => {
  const { data } = useGetTodoQuery();
  console.log(data);
  return <div>TodoDetails</div>;
};

export default TodoDetails;
