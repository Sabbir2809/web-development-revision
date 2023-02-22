import { useEffect, useState } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import { GoodBye } from './components/HelloWorld';

function App() {
  // Login Part
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    document.title = `Clicked ${counter} times`;
  }, [counter]);

  return (
    <div className='App'>
      <h1>Hi</h1>
      <HelloWorld text='Hello, React!'></HelloWorld>
      <GoodBye text='JavaScript'></GoodBye>
      <h1>{counter}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default App;
