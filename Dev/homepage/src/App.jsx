import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
function App() {
  return (

<div>

<BrowserRouter>

<Navbar/>
<Routes>
<Route path='/' element={<Navigate to='/home'/>}/>
<Route path='home' element={<Home/>}/>
<Route path='signup' element={<Signup/>}/>
<Route path='login' element={<Login/>}/>


</Routes>

</BrowserRouter> 



    </div>
  );
}

export default App;
