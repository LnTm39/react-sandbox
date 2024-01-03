import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Clock from './components/Clock'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
    <Welcome name='Toto'/>
    <Welcome name='Michel'/>
    <Welcome name='Patrick'/>
    <Clock />
    <Button />
    </div>
  );
}

export default App;
