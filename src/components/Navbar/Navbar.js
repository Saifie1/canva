import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
import {FaBars} from "react-icons/fa"
import {BiSearch} from "react-icons/bi"
import {AiOutlineUser} from "react-icons/ai"
import Draggable from 'react-draggable';
export default function Navbar() {
	const  handleStart=()=>{
		console.log('fds')
	 
	   }
	   const  handleDrag=()=>{
		 console.log('fds')
	 
	   }
	   const  handleStop=()=>{
		 console.log('fds')
	 
	   }
	return(
		<>

		<div className="col-md-12 navbar navbar-expand-lg navbar-light bg-light">
		<ul className="nav-items navbar-nav mr-auto mt-2 mt-lg-">
		<li  class="collapse navbar-collapse" id='navbarToggle' ><Link to="/">logo</Link></li>
		
		<li>
		<Draggable
      
	  handle=".handle"
	  defaultPosition={{x: 0, y: 0}}
	  position={null}
	  grid={[25, 25]}
	  scale={1}
	  onStart={handleStart}
	  onDrag={handleDrag}
	  onStop={handleStop}>
	  <div  className="handle btn btn-warning">
	Buttons
	  </div>
	 
	</Draggable>
		

		</li>
		
	{	
		<Draggable
      
	  handle=".handle"
	  defaultPosition={{x: 0, y: 0}}
	  position={null}
	  grid={[25, 25]}
	  scale={1}
	  onStart={handleStart}
	  onDrag={handleDrag}
	  onStop={handleStop}>
	  <div type='button' className="btn bg-black">
		<div className="handle">Drag from here</div>
		<div>This readme is really dragging on...</div>
	  </div>
	 
	</Draggable> ||  <div type='button' className="btn">
		<div className="handle">Drag from here</div>
		<div>This readme is really dragging on...</div>
	  </div>}

	
		</ul>
		<FaBars class="navbar-toggler navbar-toggler-icon"  data-toggle="collapse" data-target="#navbarToggle"/>

		</div>


		</>


		)
	}