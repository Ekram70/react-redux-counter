import cogoToast from 'cogo-toast';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  setCustom,
} from '../../redux/state/counter/counterSlice';

function Counter() {
  const number = useRef();

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
          <div className="my-4">
            <input ref={number} className="form-control" type="number" />
            <button
              onClick={() => {
                if (number.current.value === '') {
                  cogoToast.error('Please enter a number');
                } else if (number.current.value < 0) {
                  cogoToast.error("Value can't be less than 0");
                } else {
                  dispatch(setCustom(number.current.value));
                  number.current.value = '';
                }
              }}
              className="btn my-4 btn-warning"
            >
              Set Custom
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
