import React from 'react';
import Provider from './context/appProvider';
import Main from './Pages/Main';
import './Styles/Main.css';

function App() {
  return (
    <div className="overlay">
      <Provider>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
