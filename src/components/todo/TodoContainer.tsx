import { useGetTodosQuery } from "../../redux/api/api";
// import { useAppSelector } from "../../redux/hooks";
import { AddTodoModal } from "./AddTodoModal";
import TodoCard from "./TodoCard";
import { TodoFilter } from "./TodoFilter";

type TTodoProps = {
  id: string;
  title: string;
  description: string;
  priority?: string;
  isCompleted?: boolean;
  time?: string;
};

const TodoContainer = () => {
  const { data, error, isLoading } = useGetTodosQuery(null);

  console.log(data);
  // const { todos } = useAppSelector((state) =>
  //   state.todos ? state.todos : state.todos
  // );
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full text-white">
        <h1 className="text-4xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-full text-white ">
        <h1 className="text-4xl font-bold">
          Something Went Wrong .. Please Try Again Later
        </h1>
      </div>
    );
  }

  const todos: TTodoProps[] = data?.data;
  console.log(todos);
  return (
    <div className="">
      <div className="flex justify-between my-3">
        <AddTodoModal />
        <TodoFilter />
      </div>

      <div className="bg-primary-gradient w-full h-full rounded-xl p-5 space-y-5">
        {todos.length > 0 ? (
          todos.map((todo) => <TodoCard todo={todo} key={todo.id} />)
        ) : (
          <div className="bg-white p-5 flex justify-center items-center rounded-md text-4xl font-bold">
            There is no Task Pending
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
