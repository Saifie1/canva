import React from 'react'

import Footer from "./components/Footer/Footer.js"

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar.js"
import Main from "./components/Main"
import Text from "./components/Text"
import Edit from "./components/Edit"
export default function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
    <Route path="/" exact component={Main}/>
   
    <Route path="/editor1" exact component={Text}/>
    <Route path="/editor" exact component={Edit}/>
    </Switch>
    <Footer/>
    </Router>
    
   
      
    </>
  )
}

