import logo from './logo.svg';
import './App.css';
import MiprimerComponente from './MiprimerComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { CuartoComponente } from './CuartoComponente';


function App() {
   
   const fichaMedica = {
    altura:185,
    grupo: "H+",
    salud: 'Buena',
   }
  
  return (

<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello-React
        </p>
        <CuartoComponente/>
        <TercerComponente
          let nombre = 'Jose'
          let apellido= 'Fernández'
          let ficha ={fichaMedica}
        />
        <SegundoComponente/>
        <MiprimerComponente/>
      </header>
    </div>
  );
}

export default App;
