import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { Button } from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const sekcje = ["Piłka nożna", "Szachy", "Robotyka", "Pływanie"];
  const [count, setCount] = useState(0);

  return (
    <div>
    
    <label><h2>Liczba Sekcji: {sekcje.length}</h2></label>
    <p>
    1.Piłka nożna
    <p>2.Szachy</p>
    <p>3.Robotyka</p>
    <p>4.Pływanie</p>
    </p>
     <form>
      imię i nazwisko:
      <p>
      <input type='text' id="imieNazwisko"></input>
      </p>
      Numer sekcji:
      <p>
      <input type='text' id="numerSekcji"></input>
      </p>

      <button type="submit">Zapisz</button>
    </form>
    </div>
   
  )
}

export default App
