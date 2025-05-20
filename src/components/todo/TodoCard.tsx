import { useEffect, useState } from "react";

import { Button } from "../ui/button";
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../../redux/api/api";

type TodoCardProps = {
  _id: string;
  title: string;
  description: string;
  priority?: string;
  isCompleted?: boolean;
  time?: string;
};

const TodoCard = ({ todo }: { todo: TodoCardProps }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [updateTodo, { isLoading }] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
    console.log(!isChecked);

    const options = {
      id: todo._id,
      data: {
        title: todo.title,
        description: todo.description,
        priority: todo.priority,
        isCompleted: !isChecked,
      },
    };

    updateTodo(options);
  };

  const handleDeleteTodo = (id: string) => {
    deleteTodo(id);
  };

  useEffect(() => {
    setIsChecked(todo.isCompleted ?? false);
  }, [todo.isCompleted]);

  console.log(todo.isCompleted);

  return (
    <div className="flex flex-1  justify-between items-center bg-white/20 backdrop-blur-xl p-3 rounded-md text-white">
      {isLoading && (
        <div className="size-6 animate-spin">
          <svg
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 611.999 611.999"
          >
            <g>
              <g>
                <path
                  d="M44.563,250.179l237.89,41.871c0.485,0.085,0.964,0.118,1.451,0.118c4.33-0.027,7.831-3.545,7.831-7.88
			c0-1.831-0.624-3.516-1.672-4.853l-39.919-61.25c24.027-10.024,64.762-23.283,112.095-23.283c24.594,0,48.118,3.69,69.918,10.972
			c19.861,6.631,47.495,24.447,70.4,45.389c16.415,15.01,31.403,32.073,45.896,48.573c3.34,3.802,6.682,7.607,10.048,11.396
			c1.521,1.713,3.677,2.648,5.894,2.648c0.788,0,1.581-0.116,2.357-0.361c2.961-0.928,5.101-3.508,5.468-6.588l0.116-0.991
			c6.506-56.017-7.174-114.855-37.531-161.427c-32.502-49.852-84.035-85.972-145.111-101.71
			c-24.353-6.275-49.973-9.456-76.149-9.456c-34.717,0-69.827,5.501-104.373,16.35c-18.876,5.971-37.136,13.429-54.376,22.198
			L110.264,3.574c-1.714-2.631-4.832-3.978-7.921-3.467c-3.096,0.526-5.584,2.838-6.333,5.887L38.278,240.535
			c-0.521,2.118-0.142,4.359,1.05,6.186C40.519,248.549,42.415,249.802,44.563,250.179z"
                />
                <path
                  d="M572.67,365.274c-1.191-1.827-3.087-3.08-5.236-3.458l-237.888-41.872c-3.094-0.54-6.212,0.8-7.942,3.419
			c-1.73,2.619-1.74,6.017-0.027,8.648l40.278,61.802c-24.027,10.024-64.762,23.283-112.093,23.283
			c-24.594,0-48.118-3.692-69.92-10.974c-19.864-6.632-47.498-24.449-70.4-45.389c-16.415-15.01-31.403-32.071-45.896-48.568
			c-3.34-3.803-6.684-7.608-10.049-11.398c-2.065-2.323-5.301-3.219-8.265-2.282c-2.964,0.935-5.101,3.526-5.456,6.612l-0.111,0.962
			c-6.508,56.021,7.172,114.855,37.532,161.42c32.5,49.855,84.034,85.977,145.109,101.712c24.358,6.275,49.982,9.456,76.16,9.456
			c0.003,0,0.002,0,0.007,0c34.71,0,69.819-5.499,104.355-16.35c18.876-5.971,37.136-13.427,54.375-22.196l44.53,68.321
			c1.47,2.255,3.967,3.578,6.6,3.578c0.438,0,0.88-0.036,1.321-0.109c3.096-0.526,5.583-2.838,6.335-5.887l57.734-234.541
			C574.242,369.342,573.863,367.103,572.67,365.274z"
                />
              </g>
            </g>
          </svg>
        </div>
      )}
      <input
        onChange={handleCheckboxChange}
        checked={isChecked}
        type="checkbox"
        className="peer sr-only opacity-0 "
        id={todo._id}
      />
      <label
        htmlFor={todo._id}
        className="relative  flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500"
      ></label>
      <p className="font-semibold capitalize flex  flex-1 ml-4">{todo.title}</p>
      <p className="capitalize flex  flex-1"> {todo.description}</p>
      <div className="capitalize flex   flex-1 items-center gap-2">
        <div
          className={`h-3 w-3 rounded-full ${
            todo.priority === "high"
              ? "bg-red-600"
              : todo.priority === "medium"
              ? "bg-yellow-600"
              : "bg-green-600"
          }`}
        />
        <div>{todo.priority}</div>
      </div>
      <div className="capitalize flex  flex-1 items-center gap-2">
        {todo.isCompleted ? (
          <p className="text-green-400">Done</p>
        ) : (
          <p className="text-red-400">Pending</p>
        )}
      </div>
      <p>{todo.time}</p>
      <div className="flex gap-5">
        <Button
          onClick={() => handleDeleteTodo(todo._id)}
          variant={"destructive"}
        >
          <svg
            xmlns=""
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Button>
        <Button
          disabled={todo.isCompleted}
          className="disabled:cursor-not-allowed"
          variant={"default"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
