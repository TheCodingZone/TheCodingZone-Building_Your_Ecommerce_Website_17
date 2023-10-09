import logo from './logo.svg';
import './App.css';
import Header from './Componants/Header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Componants/Login'
import { Fragment } from 'react';
import Signup from './Componants/Signup';
import UserProfile from './Componants/UserProfile';
import LoginPage from './Componants/Login';

function App() {
  return (
    
   <Router>

   <Header/>
   <Routes>
   <Route path='/Login' element={ <Login/>}></Route>
   <Route path='/Signup' element={ <Signup/>}></Route>
   <Route path='/Profile' element={ <UserProfile/>}></Route>
   <Route path='/' element={ <Login/>} exect></Route>
   
    
   </Routes>
   </Router>
  
  );
}

export default App;
