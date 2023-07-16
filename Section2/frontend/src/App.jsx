import { BrowserRouter,  Navigate, Route, Routes} from 'react-router-dom';
import Home from './components/Home'
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';


function App() {
  return (
    <div> 
      

      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Navigate to = "/home" />} />
          <Route path='home' element={<Home />}/>
          <Route path='login' element= {<Login /> } />
          <Route path='signup' element= {<SignUp /> } />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
