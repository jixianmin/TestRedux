import './App.css';
import { useEffect, useState } from 'react';

function App({ store }) {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return () => {
      unsubscribe();
    };
  }, [store]);

  return (
    <div className='App'>
      <header className='App-header'>{JSON.stringify(state)}</header>
    </div>
  );
}

export default App;
