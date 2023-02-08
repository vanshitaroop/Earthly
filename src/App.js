import './App.css';
import { Navbarp } from './components/Navbarp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import  Product  from './components/Product';

function App() {
  return (
    <div className="App">
     <Navbarp/>
     <Home/>
     <Product/>
    </div>
  );
}
export default App;
