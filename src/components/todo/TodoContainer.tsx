import { useAppSelector } from "../../redux/hooks";
import { AddTodoModal } from "./AddTodoModal";
import TodoCard from "./TodoCard";
import { TodoFilter } from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) =>
    state.todos ? state.todos : state.todos
  );
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
