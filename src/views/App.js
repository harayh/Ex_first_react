import logo from './logo.svg';
import './App.scss';
// import Mycomponent from './Example/Mycomponent';
import Parentcomponent from './ToDoAp/ParentComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi I'm HNT
        </p>
        {/* <Mycomponent /> */}
        <Parentcomponent />
      </header>
    </div>
  );
}

export default App;
