import { useState, type FormEvent } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import PriorityDropdown from "../ui/PriorityDropdown";
import { useAddTodoMutation } from "../../redux/api/api";

export function AddTodoModal() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("low");
  const [addTodo, { data, isLoading, isError, isSuccess }] =
    useAddTodoMutation();

  // const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!task || !description) {
      alert("Please fill in all fields");
      return;
    }

    const taskDetails = {
      title: task,
      description,
      priority,
      isCompleted: false,
    };

    addTodo(taskDetails);
    // dispatch(addTodo(taskDetails));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full text-white">
        <h1 className="text-4xl font-bold">Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex justify-center items-center h-full text-white ">
        <h1 className="text-4xl font-bold">
          Something Went Wrong .. Please Try Again Later
        </h1>
      </div>
    );
  }

  if (isSuccess) {
    console.log(data);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white/10 backdrop-blur-xl text-white">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription className="text-sm text-white">
            Add a new task to your todo list. You can also set a priority for
            the task.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} action="">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                onChange={(e) => setTask(e.target.value)}
                id="title"
                placeholder="Task Title"
                className="col-span-3 bg-white/10 backdrop-blur-xl text-white placeholder:text-white  focus:outline-none outline-none"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="descriptions" className="text-right">
                Descriptions
              </Label>
              <Input
                onChange={(e) => setDescription(e.target.value)}
                id="descriptions"
                placeholder="Task Descriptions"
                className="col-span-3 bg-white/10 backdrop-blur-xl text-white placeholder:text-white  focus:outline-none outline-none"
              />
            </div>
            <div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Priority</Label>
                <div className="col-span-3">
                  <PriorityDropdown
                    onSelect={(value) => setPriority(value)}
                    current={priority}
                  />
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
