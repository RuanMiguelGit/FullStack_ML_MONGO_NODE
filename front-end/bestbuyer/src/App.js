import React from 'react';
import Provider from './context/appProvider';
import Main from './Pages/Main';
function App() {
  return (
    <div className="App">
      <Provider>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
