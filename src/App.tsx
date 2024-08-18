
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { appRoute } from './routes';
import "@ravenpay/raven-bank-ui/dist/esm/styles/index.css";


function App() {
  return (
    <div className="App">
        <Routes>
        {appRoute?.map((route, idx) => (
              <Route key={idx} path={route.path} element={<route.element />} />
            ))}
        </Routes>
    </div>
  );
}

export default App;
