import logo from './logo.svg';
import './App.css';
import { PruebasComponent } from './components/PruebasComponent';
import { UseAjax } from './components/UseAjax';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         
        </p>
        <PruebasComponent/>
        <UseAjax/>
      
      </header>
    </div>
  );
}

export default App;
