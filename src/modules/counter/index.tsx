'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/core/redux/store';
import { counterActions } from '@/core/redux/slices/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state: RootState) => state.counter);

  const onIncreaseClick = () => {
    dispatch(counterActions.increment());
  };

  const onDecreaseClick = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <div className="min-w-40 rounded-lg border-[1px] border-primary bg-primary/10 p-3 py-5 text-center text-2xl font-bold">
        {counter?.value || 0}
      </div>
      <div className="mt-2 flex items-start">
        <button
          className="mr-0.5 flex flex-1 cursor-pointer items-center justify-center rounded-lg border-[1px] border-primary bg-primary/50 p-3 py-1 pb-2 text-4xl"
          onClick={onDecreaseClick}
        >
          -
        </button>
        <button
          className="ml-0.5 flex flex-1 cursor-pointer items-center justify-center rounded-lg border-[1px] border-primary bg-primary/50 p-3 py-1 pb-2 text-4xl"
          onClick={onIncreaseClick}
        >
          +
        </button>
      </div>
    </div>
  );
};
