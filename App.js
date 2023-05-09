import logo from './logo.svg';
import './App.css';
import DisplayJSX from './Component/DisplayJSX';
import DisplayArray from './Component/DisplayArray';
import Addition from './Component/Addition';
import Default from './Component/ShowHide'
import ToggleVisibility from './Component/ShowHide';
import CounterApp from './Component/CounterApp'
import UpdateState from './Component/UpdateState'

function App() {
  return (
    // <div className="App">
    //   <DisplayJSX/>
    // </div>

    // <div className="App">
    //     <h2>Elements of array are:</h2>
    //     <DisplayArray/>
    // </div>

    // <div className="App">
    //   <h2>Addition is:</h2>
    //   <Addition/>
    // </div>

    // <div className="App">
    //   <ToggleVisibility>
    //     <Default />
    //   </ToggleVisibility>
    // </div>

    <div className="App">
      <CounterApp/>
    </div>
    // <div className="App">
    //   <UpdateState/>
    // </div>
  );
}

export default App;
