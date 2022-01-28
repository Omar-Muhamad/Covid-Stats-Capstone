import { useDispatch, useSelector } from 'react-redux';
import { increament, decreament } from '../Redux/counter/counter';

const Home = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <section className="hero">
      <h1>React Redux Template</h1>
      <button type="button" onClick={() => dispatch(increament())}>+</button>
      <p>{counter}</p>
      <button type="button" onClick={() => dispatch(decreament())}>-</button>
    </section>
  );
};

export default Home;
