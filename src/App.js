import './App.css';

import { useHistory } from 'react-router-dom';


function App() {



  return (
    <main>
            <h1>Welcome to React Router!</h1>
           <button type="button" onClick={(e) => {e.push('/Timer/ShowTimer.js')}}>
             ShowTimer
           </button>
    </main>
  );

}

export default App;
