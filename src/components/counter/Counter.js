import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/state/counter/counterSlice';

function Counter() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <div className="card">
        <div className="card-header bg-dark">
          <h4 className="text-white">Counter App</h4>
        </div>
        <div className="card-body">
          <h1>{count}</h1>
          <div className="my-4">
            <button
              onClick={() => dispatch(increment())}
              className="btn btn-success"
            >
              Increase
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="btn btn-danger mx-2"
            >
              Decrease
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
