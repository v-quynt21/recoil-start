import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  RecoilRoot,
  atom,
  useRecoilState,
  useRecoilValue
} from 'recoil'

const textState = atom({
  key: 'textState',
  default: ''
});

function CharacterCounter(){
  return (
      <div>
          <TextInput/>
          <CharacterCounter/>
      </div>
  )
}
function TextInput(){
  const [text, setText] = useRecoilState(textState);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event?.target?.value);
      // setText(event.target.value);
  };
  return (
      <div>
          <input type="text" value={text} onChange={onChange}/>
          <br/>
          Echo: {text}
      </div>
  );
}

function App(){
  return (
      <RecoilRoot>
          <CharacterCounter/>
      </RecoilRoot>
  )
}

function App11() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
