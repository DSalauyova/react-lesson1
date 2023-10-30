import logo from './logo.svg';
import './App.css';
import Liste from './Liste/Liste';
import ListOfGoals from './ListOfGoals/ListOfGoals';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          That's My New Text in Red
        </p>
        <ListOfGoals></ListOfGoals>
        <Liste></Liste>
      </header>
    </div>
  );
}

export default App;