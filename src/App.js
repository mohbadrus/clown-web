import './App.css';
import Navbar from "./Components/Navbar/navbar"
import Aboutus from "./Components/AboutUs/about"
import Services from './Components/Services/service';
import Footer from './Components/Footer/footer'
import Portofolio from './Components/Portofolio/portofolio'

function App() {
  return (
   <>
    <Navbar/>
    <Aboutus/>
    <Services/>
    <Portofolio/>
    <Footer/>
   </>
  );
}

export default App;
