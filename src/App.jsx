import axios from 'axios';
import { useEffect, useState } from 'react'


import './App.css'
import Loading from './components/Loading';

import Weather from './components/Weather';

function App() {

  const [ws, setws] = useState('')
  const [load, setload] = useState(false)


  const changeload = () => {

    setTimeout(() => {
      setload(true)

    }, 5000)

  }


  useEffect(() => {


    function success(pos) {
      var crd = pos.coords;

      // console.log('Your current position is:');
      // console.log('Latitude : ' + crd.latitude);
      // console.log('Longitude: ' + crd.longitude);
      // console.log('More or less ' + crd.accuracy + ' meters.');

      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=cfbabd5a23db066ab174c9347f775332`)
        .then(res => setws(res.data))
    }

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    navigator.geolocation.getCurrentPosition(success, error);


  }, [])




  return (
    <div className="App">

      {load ?
        <Weather ws={ws} />
         : 
       <Loading changeload={changeload}/>
        
       } 




    </div>
  )
}

export default App
