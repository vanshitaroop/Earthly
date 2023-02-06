import './App.css';
import { Navbarp } from './components/Navbarp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { Container } from 'react-bootstrap';
import { Contactus } from './components/Contactus';
import { Project } from './components/Project';
function App() {
  return (
    <div className="App">
      
      <Navbarp/>
     <Home/>
      
     
    </div>
  );
}
export default App;
