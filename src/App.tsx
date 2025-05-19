import TodoPage from "./pages/Todo";

function App() {
  return (
    <div className="relative h-full w-full bg-slate-950 ">
      <div className="  h-full w-full rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
        <div className="absolute   h-full w-full rounded-full ">
          <TodoPage />
        </div>
      </div>
    </div>
  );
}

export default App;
