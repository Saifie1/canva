import React from 'react'

import Footer from "./components/Footer/Footer.js"

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar.js"
import Main from "./components/Main"

export default function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
    <Route path="/" exact component={Main}/>
   
    
    </Switch>
    <Footer/>
    </Router>
    
   
      
    </>
  )
}

