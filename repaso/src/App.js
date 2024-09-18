import logo from './logo.svg';
import './App.css';
import { EjercicioComponente } from './components/EjercicioComponente';
;

function App() {
  
 const date = new Date();
 const newyear= date.getFullYear();

  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       <EjercicioComponente year={newyear}/>
      </header>
    </div>
  );
}

export default App;
