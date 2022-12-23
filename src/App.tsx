import { useState } from 'react';
import reactLogo from './assets/react.svg';
import flow from 'lodash/flow';
import split from 'lodash/fp/split';
import './App.css';

import styled from '@emotion/styled';

const Button = styled.button`
  color: turquoise;
`;
export const confNumbers = flow(split(/[;,\s]+/))('e') as string[];

export const Deps = () => {
  return (
    <div>
      {JSON.stringify({
        flow,
      })}
    </div>
  );
};
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Deps />
      <div>
        <Button>This my button component.</Button>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
