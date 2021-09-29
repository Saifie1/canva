import React, { useState } from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
import {FaBars} from "react-icons/fa"
import {BiSearch} from "react-icons/bi"
import {AiOutlineUser} from "react-icons/ai"
import Draggable from 'react-draggable';
export default function Navbar() {

	const [array,setArray]=useState([])
	const arr=[]
	const  handleStart=()=>{
		
	 
	   }
	   const  handleDrag=()=>{
	
	   }
	   const  handleStop=()=>{
	
	 
	   }
	   React.useEffect(()=>{

	   },[array])
	return(
		<>

		<div className="element col-md-12 navbar navbar-expand-lg navbar-light bg-light">
		<ul className="nav-items navbar-nav mr-auto mt-2 mt-lg-">
		<li  className=" collapse navbar-collapse" id='navbarToggle' ><Link>logo</Link></li>
	
		{/* <li>{JSON.stringify(array)}</li> */}
		<li>
	
   
	  <div  className="handle btn btn-warning btn-block" onClick={()=>{console.log('df')
	  if(array.length<1){
	setArray([...array,'buttons'])}
	  }}>
	Buttons
	  </div>
	  {array.map(item=>{
			return(
				<>
				<Draggable
      
	  handle=".handle"
	  defaultPosition={{x: 0, y: 0}}
	  position={null}
	  grid={[25, 25]}
	  scale={1}
	  onStart={handleStart}
	  onDrag={handleDrag}
	  onStop={handleStop}>
	  <div  className="handle btn btn-warning block">
	{item}
	<button type="button" class="btn" onClick={()=>{console.log('df')
	  if(array.length<2){
	setArray([])}
	  }}>X</button>
	  </div>
	 
	</Draggable>
				</>
			)
			console.log(item)
		})}
	 

		

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