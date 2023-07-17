
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
