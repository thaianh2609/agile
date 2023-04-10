import './App.css';
import Header from './components/header';
import LoopSlider from './components/loopSlider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './components/Profile';
function App() {
  return (
    <div className='containers'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
