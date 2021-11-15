
import Settings from '../Timer/Settings';
import Timer from '../Timer/Timer';
import {useState} from 'react'
import SettingsContext from '../Timer/SettingsContext';



function ShowTimer() {

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

export default ShowTimer;
