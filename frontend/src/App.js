import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation';
import Home from './components/Home';
import Eusers from './components/eusercomponent/Eusers';
import Manage from './components/eusercomponent/Manage';
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/eusers" element={<Eusers/>} />
          <Route exact path="/manageusers" element={<Manage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
