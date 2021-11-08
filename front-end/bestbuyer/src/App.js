import React from 'react';
import Provider from './context/appProvider';
import PageRoutes from './Routes/index';
import './Styles/Main.css';

function App() {
  return (
    <div className="overlay">
      <Provider>
        <PageRoutes />
      </Provider>
    </div>
  );
}

export default App;
