import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
import {FaBars} from "react-icons/fa"
import {BiSearch} from "react-icons/bi"
import {AiOutlineUser} from "react-icons/ai"

export default function Navbar() {

	return(
		<>

		<div className="col-md-12 navbar navbar-expand-lg navbar-light bg-light">
		<ul className="nav-items navbar-nav mr-auto mt-2 mt-lg-">
		<li  class="collapse navbar-collapse" id='navbarToggle' ><Link to="/">logo</Link></li>
		
		<li>
		

		</li>
		
		


	
		</ul>
		<FaBars class="navbar-toggler navbar-toggler-icon"  data-toggle="collapse" data-target="#navbarToggle"/>

		</div>


		</>


		)
	}