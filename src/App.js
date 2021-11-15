import './App.css';
import Settings from './Settings';
import Timer from './Timer';
import {useState} from 'react'
import SettingsContext from './SettingsContext';


function App() {

   const [showSettings, setShowSettings] = useState();
   const [workMinutes, setWorkMinutes]= useState(45)

  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        setWorkMinutes,
    

      }}> 
        {
          showSettings ? <Settings/> : <Timer/>
        }
      </SettingsContext.Provider>
      

    </main>
  );
}

export default App;
