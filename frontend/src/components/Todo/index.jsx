import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import TodoCard from "./card";

const GET_TODOS = gql`
  query {
    getTodos {
      id
      todo
      completed
      fullName
    }
  }
`;

const TodoPage = () => {
  const { loading, error, data } = useQuery(GET_TODOS);
  const [todoList, setTodoList] = useState([]);

  console.log(loading, error, data);

  useEffect(() => {
    if (data) {
      setTodoList(data.getTodos);
    }
  }, [data]);

  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold text-white mb-4">Todo List</h1>
      {
          !loading ?       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {todoList.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div> : <div className="text-center text-4xl text-white mt-6 max-w-full">Loading ...</div>
      }

    </div>
  );
};

export default TodoPage;
