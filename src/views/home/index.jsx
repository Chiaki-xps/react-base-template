import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, sub } from '@/store/home';

const Home = memo(() => {
  const counter = useSelector((state) => state.home.counter);
  const dispatch = useDispatch();

  const addFuc = () => {
    dispatch(add(1));
  };

  const subFuc = () => {
    dispatch(sub(1));
  };

  return (
    <div>
      <div>React App</div>
      <div>{counter}</div>
      <button onClick={addFuc}>+1</button>
      <button onClick={subFuc}>-1</button>
    </div>
  );
});

export default Home;
