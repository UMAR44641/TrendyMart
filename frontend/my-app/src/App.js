import './App.css';
import AllRoutes from './pages/AllRoutes';
import Navbar from './components/fahad_components/Navbar';
import MensShorts from './pages/ujjwal/MensShorts';

function App() {
  return (
    <div className="App" >
      <Navbar/>
      <AllRoutes/>
      {/* <MensShorts/> */}
    </div>
  );
}

export default App;