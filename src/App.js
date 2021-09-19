
import './App.css';
import Home from './pages/home/home';
import Buy from './pages/buy/buy';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home}/>
        <Route path="/buy" component={Buy}/>
        <Route path="*" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
