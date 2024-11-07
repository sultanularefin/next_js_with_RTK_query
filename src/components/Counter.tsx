import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {decrement, selectCount} from "@/lib/features/counter/counterSlice";
import {incrementAsync} from "@/lib/features/counter/thunks/counter_thunks";
const Counter = () => {

    const dispatch = useAppDispatch();
    const count:number= useAppSelector(selectCount);

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() =>
            dispatch(incrementAsync(10))}>Increment
        </button>
        <button
            onClick={() => dispatch(decrement())}>
            Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
