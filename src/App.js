import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { INC,DEC,TOG } from './actions'

function App() {
  const count = useSelector(state => state.counter)
  const toggle = useSelector(state => state.toggler)
  const dispatch = useDispatch()

  return (
    <div className="App">
        <p>Value: {count}</p>
        <button onClick={()=>dispatch({type:INC})}>Increase+1</button>
        <button onClick={()=>dispatch({type:DEC})}>Decrease-1</button>
        <button onClick={()=>dispatch({type:TOG})}>{toggle? 'Dark':'Light'}</button>
        <p className={toggle? 'light':'dark'}>Value: {toggle? 'Light':'Dark'}</p>
    </div>
  );
}

export default App;
