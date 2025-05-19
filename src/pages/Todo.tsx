import TodoContainer from "../components/todo/TodoContainer";
import Container from "../components/ui/Container";

const TodoPage = () => {
  return (
    <Container>
      <h1 className="text-center text-5xl font-semibold my-10 text-white">
        My Todos
      </h1>
      <TodoContainer />
    </Container>
  );
};

export default TodoPage;
