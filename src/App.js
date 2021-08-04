import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Project from './pages/Project/Project';
import Contact from './pages/Contact/Contact';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';


const App = () => {
  return (
   <>
   <Navbar/>
   <Switch>
     <Route exact path='/' component= {Home} />
     <Route exact path='/about' component= {About} />
     <Route exact path='/project' component= {Project} />
     <Route exact path='/contact' component= {Contact} />
     <Redirect to='/'/>
    </Switch>
    <Footer/>
   </>
  )
}

export default App

