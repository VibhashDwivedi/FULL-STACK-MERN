import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Left from './components/Left';
import Right from './components/Right';
import Relevant from './components/Relevant';
import Latest from './components/Latest';
import Home2 from './components/Home2';
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
<Route path='left' element={<Left/>}/>
<Route path='right' element={<Right/>}/>
<Route path='latest' element={<Latest/>}/>
<Route path='relevant' element={<Relevant/>}/>
<Route path='navbar2' element={<Navbar/>}/>
<Route path='home2' element={<Home2/>}/>


</Routes>

</BrowserRouter> 



    </div>
  );
}

export default App;
