import React from 'react';
import { BrowserRouter,  Route } from 'react-router-dom';

import Routes from './routes/Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
