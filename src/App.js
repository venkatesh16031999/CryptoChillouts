import './App.css';
import Header from './components/Header/Header';
import Home from './pages/home/home';
import Roadmap from './pages/roadmap/roadmap';
import Members from './pages/members/Members';
import Chillouts from './pages/chillouts/chillouts'
import { Switch, Route } from 'react-router-dom';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBLUNSZMw-UUeSAuEWld0cH7HAlOWBE674",
  authDomain: "cryptochillouts.firebaseapp.com",
  projectId: "cryptochillouts",
  storageBucket: "cryptochillouts.appspot.com",
  messagingSenderId: "1083966010589",
  appId: "1:1083966010589:web:06d16238a2bdb7db169734",
  measurementId: "G-H136X1GG89"
};

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <Header></Header>
      </div>
      <div className="body">
          <Switch>
            <Route path="/home" exact component={Home}/>
            <Route path="/roadmap" exact component={Roadmap}/>
            <Route path="/members" exact component={Members}/>
            <Route path="/chillouts" exact component={Chillouts}/>
            <Route path="/" exact component={Home} />
            <Route path="*" component={Home} />
          </Switch>
      </div>
    </div>
  );
}

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export default App;
