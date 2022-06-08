import React from 'react';
import { AppRouter} from './Components/router/AppRouter'
import Whatsapp from './Components/Whatsapp/Whatsapp';

function App() {

  return (
    <div className="App">
      <AppRouter/>
      <Whatsapp/>
    </div>
  );
}

export default App;