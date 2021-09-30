import React from 'react'

import Footer from "./components/Footer/Footer.js"

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar.js"
import Main from "./components/Main"
import Text from "./components/Text"
import Edit from "./components/Edit"
import {Editor, Frame, Element} from "@craftjs/core";
import Movable from "./components/Movable2"
export default function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
    <Route path="/" exact component={Main}/>
   
    <Route path="/editor1" exact component={Text}/>
    <Route path="/editor" exact component={Edit}/>
    <Route path="/movable" exact component={Movable}/>

    </Switch>
    <Footer/>
    </Router>
    
   
      
    </>
  )
}

