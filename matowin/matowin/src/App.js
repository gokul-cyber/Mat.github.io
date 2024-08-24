import './App.css';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Home from './components/Home';
import OurInfrastructure from './components/OurInfrastructure';
import Products from './components/Products';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <div className='our_infra'>
      <OurInfrastructure />
      </div>
      <AboutUs />
      <Services />
      <Products />
    </div>
  );
}

export default App;
