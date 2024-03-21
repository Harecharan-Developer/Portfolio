import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonWebsite from './buttonwebsite'

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const EntryFlag = count === 1 && count1 === 0 && count2 === 1;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Enter the code to get started</h1>
      <h4>Clue: to know the code, do what you do when something is not rendering (as a non-programmer)</h4>
      <div className="card">
        <button onClick={() => setCount(prevCount => prevCount + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount1(prevCount => prevCount + 1)}>
          count is {count1}
        </button>
        <button onClick={() => setCount2(prevCount => prevCount + 1)}>
          count is {count2}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div>
        {EntryFlag && <ButtonWebsite />}
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
