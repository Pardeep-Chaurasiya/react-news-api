import Home from './pages/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './components/Footer';
import FetchData from './components/FetchData';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/general' element={<FetchData cat="general"/>} exact/>
        <Route path='/business' element={<FetchData cat="business"/>} />
        <Route path='/entertainment' element={<FetchData cat="entertainment"/>} />
        <Route path='/health' element={<FetchData cat="health"/>} />
        <Route path='/science' element={<FetchData cat="science"/>} />
        <Route path='/sports' element={<FetchData cat="sports"/>} />
        <Route path='/technology' element={<FetchData cat="technology"/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
