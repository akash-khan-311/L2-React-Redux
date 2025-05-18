import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import type { RootState } from "./redux/store";

function App() {
  const { count } = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-400 rounded-md p-14">
          <button
            onClick={() => dispatch(increment())}
            className="text-xl px-8 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition-all duration-300"
          >
            Increment
          </button>

          <h2 className="text-7xl text-center m-10">{count}</h2>
          <button
            onClick={() => dispatch(decrement())}
            className="text-xl px-8 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition-all duration-300"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
