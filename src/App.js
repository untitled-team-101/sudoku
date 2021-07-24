import {HashRouter, Route, Switch} from 'react-router-dom'
import Game from "./components/Game";
import Home from "./components/Home";

import './styles/App.scss'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path={'/'}>
            <Home/>
          </Route>
          <Route exact path={'/game'}>
            <Game/>
          </Route>
          <Route path={'/'}>
            <h1>404 Error</h1>
            <h2>Kat gya TERA!! Kuch ni hai idhar</h2>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
