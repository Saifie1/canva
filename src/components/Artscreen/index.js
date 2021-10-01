import React, { useState } from 'react'
import "./custom.css"
import {BsSearch} from "react-icons/bs"
import {FaShare, FaCommentDots} from "react-icons/fa"


export default function Artscreen() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return(
    
  <>
    <nav class="navbar mb-0 navbar-expand-md navbar-dark bb-1" aria-label="Fourth navbar example">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="./images/logo.png" height="50"/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsCollapse" aria-controls="navbarsCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse w-100" id="navbarsCollapse">
          <ul class="navbar-nav  mb-2 mb-md-0">
            <li class="nav-item dropdown">
              <a class="nav-link mr-20  dropdown-toggle btn btn-default" href="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">File</a>
              <ul class="dropdown-menu" aria-labelledby="dropdown04">
                <li><a class="dropdown-item" href="#">Action</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="btn btn-default" href="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Import</a>
            </li>
            
          </ul>
          <form>
            <div class="input-group">
              <span class="input-group-text fa fa-search pt-2 bg-white br-0" id="basic-addon1">
              <BsSearch/></span>
              <input type="text" class="form-control bl-0 pl-0 ml--2" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"/>
            </div>
          </form>
          <div class="rightNavbar">
              <div>
                <a class="btn btn-primary mr-20" href="#">
                <i class="fa fa-external-link-alt"></i> Export</a>
              </div>
              <div class="d-block mlr-20">
                <img src="./images/share.png" height="20"/>
                <p class="mb-0">Share</p>
              </div>
              <div class="d-block mlr-20">
                <img src="./images/save.png" height="20"/>
                <p class="mb-0">Save</p>
              </div>
              <div class="d-block mlr-20">
                <img src="./images/preview.png" height="20"/>
                <p class="mb-0">Preview</p>
              </div>
              <div class="d-block mlr-20">
                <img src="./images/dummy.png" height="50" width="50" class="profileImg"/>
              </div>
          </div>
        </div>
      </div>
    </nav>
    <nav class="navbar  navbar2 mb-0 navbar-expand-md navbar-dark" aria-label="Fourth navbar example">
      <div class="container-fluid w-96">
        <div class="d-flex justify-content-between align-items-center w-100">
            <div class="leftCont">
              <img src="./images/share-iconl.png" height="22"  />
              <img src="./images/share-icon.png" height="22"  />
            </div>
            <div class="leftCont">
            
            </div>
            <div class="leftCont">
              <FaCommentDots class="defaultColor fs-30"/>
            </div>
        </div>
      </div>
    </nav>
    <div class="d-flex flex-column flex-shrink-0 bg-light w-4 min-h-100 editMenu">
      <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
        
        <li class="nav-item pt-11">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/cursor.png" class="bi" width="24" height="24" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/brush.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/pen.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/crop.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/scissor.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/text.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/fr-bg.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/img.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/square.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/dot.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/eraser.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/del.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>

      
      </ul>
    </div>
    </>
    )
}