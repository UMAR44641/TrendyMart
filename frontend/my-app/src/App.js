import './App.css';
import AllRoutes from './pages/AllRoutes';
import Navbar from './components/fahad_components/Navbar';
import Footer from "./components/fahad_components/Footer"


function App() {
  return (
    <div className="App" >
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;