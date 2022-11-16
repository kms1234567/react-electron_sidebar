import * as React from 'react'
import './App.css';
import TitleBar from 'frameless-titlebar';
import { Collapse } from 'antd';
import Tree  from './TreeView';

function App() {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="App">
      <TitleBar
          title='Milliman'
          app="Electron"
        />
      <Collapse className="Collapse" defaultActiveKey={['1']} onChange={onChange}>
        <Tree />
      </Collapse>
    </div>
  );
}

export default App;
