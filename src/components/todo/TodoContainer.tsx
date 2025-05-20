import { useState } from "react";
import { useGetTodosQuery } from "../../redux/api/api";
// import { useAppSelector } from "../../redux/hooks";
import { AddTodoModal } from "./AddTodoModal";
import TodoCard from "./TodoCard";
import { TodoFilter } from "./TodoFilter";

type TTodoProps = {
  _id: string;
  title: string;
  description: string;
  priority?: string;
  isCompleted?: boolean;
  time?: string;
};

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  const { data, error, isLoading } = useGetTodosQuery(priority);

  console.log(priority);
  // const { todos } = useAppSelector((state) =>
  //   state.todos ? state.todos : state.todos
  // );
  if (isLoading) {
    return (
      <div className="flex justify-center items-center text-white">
        <h1 className="text-4xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center  text-white ">
        <h1 className="text-4xl font-bold">
          Something Went Wrong .. Please Try Again Later
        </h1>
      </div>
    );
  }

  const todos: TTodoProps[] = data?.data;

  return (
    <div className="">
      <div className="flex justify-between my-3">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>

      <div className="bg-white/10 backdrop-blur-sm  w-full  rounded-xl p-5 space-y-5">
        {todos.length > 0 ? (
          todos.map((todo) => <TodoCard todo={todo} key={todo._id} />)
        ) : (
          <div className="bg-white/10 backdrop-blur-lg p-5 flex justify-center items-center rounded-md text-4xl font-bold text-white">
            There is no Task Pending
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
