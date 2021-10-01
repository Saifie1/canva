import React, { useState } from 'react'
import "./custom.css"
import {BsFillBellFill, BsFileEarmarkPlus} from "react-icons/bs"
import {GiBatMask, GiPlasticDuck} from "react-icons/gi"
import {BiFileBlank, BiGlobe} from "react-icons/bi"
import {FaRegCommentDots} from "react-icons/fa"
import {IoIosListBox} from "react-icons/io"
import {AiFillCamera} from "react-icons/ai"
import {Link} from "react-router-dom"
 
export default function Profile() {
  return(
  <>
    <nav class="navbar mb-0 navbar-expand-md navbar-dark bb-1" aria-label="Fourth navbar example">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="./images/logo.png" height="50"/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsCollapse" aria-controls="navbarsCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsCollapse">
          
          <div class="rightNavbar">
              
              <div class="d-block mlr-20">
                <BsFillBellFill class="defaultColor bellIcon"/>
              </div>
              <div class="d-block profileicn">
                <GiBatMask class="batIcon"/>
              </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="row">
      <div class="col-sm-2">
        <div class="d-flex flex-column flex-shrink-0 bg-light editMenu">
        <ul class="nav nav-pills nav-flush flex-column mb-auto pl-2">
          
          <li class="nav-item pt-4">
            <a href="#" class="nav-link active" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
              Home
            </a>
          </li>
          <li class="nav-item bb-1 pt-2">
            <a href="#" class="nav-link d-flex align-item-baseline pt-3" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
              <BiFileBlank class="defaultColor fs-15" />
              <p class="defaultColor mb-0 ml-2">Drafts</p>
            </a>
          </li>
          <li class="nav-item bb-1 pt-2">
            <a href="#" class="nav-link d-flex align-item-baseline pt-3" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
              <BiGlobe class="defaultColor fs-20" />
              <p class="defaultColor mb-0 ml-2">Community <br/><br/> Discover other users made content</p>
            </a>
          </li>

          <li class="nav-item pt-2">
            <a href="#" class="nav-link d-flex align-item-baseline pt-3" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
              <FaRegCommentDots class="defaultColor fs-15" />
              <p class="defaultColor mb-0 ml-2">Collaborate</p>
            </a>
          </li>

          <li class="nav-item pt-2">
            <a href="#" class="nav-link d-flex align-item-baseline pt-3" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
              <IoIosListBox class="defaultColor fs-15" />
              <p class="defaultColor mb-0 ml-2">Storyboard</p>
            </a>
          </li>

        
        </ul>

        

      </div>
      </div>
      <div class="col-sm-10 pl-5 mt-5">
        <h2 className=" target fs-20 defaultColor pb-3">Create Your Story</h2>
          <div className="createStory pb-3 pl-5 pr-5">
            <div class="row">
              <div class="col-sm-3 pl-5 pr-5">
                <a class="text-center storyCont"  data-toggle="modal" data-target="#welcomeModal">
                  <img src="./images/dummy.png" class="rounded img-fluid" />
                  <h5 class="defaultColor mt-4 mb-1">Manga</h5>
                  <p>5 in x 7.5 in</p>
                </a>
              </div>
              <div class="col-sm-3 pl-5 pr-5">
                <a href="#" class="text-center storyCont">
                  <img src="./images/dummy.png" class="rounded img-fluid" />
                  <h5 class="defaultColor mt-4 mb-1">Webtoon</h5>
                  <p>800 in x 1280 in</p>
                </a>
              </div>
              <div class="col-sm-3 pl-5 pr-5">
                <a href="#" class="text-center storyCont">
                  <img src="./images/dummy.png" class="rounded img-fluid" />
                  <h5 class="defaultColor mt-4 mb-1">Comic</h5>
                  <p>6.256 in x 10.25 in</p>
                </a>
              </div>
              <div class="col-sm-3 pl-5 pr-5">
                <a href="#" class="text-center storyCont">
                  <BsFileEarmarkPlus class="customSizeIcon"/>
                  <h5 class="defaultColor mt-4 mb-1">Custom Size</h5>
                  <p>W_____ H______</p>
                </a>
              </div>
            </div>
          </div>

          <h2 class="fs-20 defaultColor pb-2 mt-4">Recent</h2>
            <div class="row w-98">
              <div class="col-sm-4">
                <div class="card recentPost">
                    <div class="postImgCont pl-3 pr-3 pt-3 pb-3">
                      <img src="./images/dummy.png" class="rounded img-thumbnail w-50 img-fluid " />
                    </div>
                    <div class="pl-3 pt-3">
                      <h5 class="defaultColor mb-0">Pink Lemonade Tears</h5>
                      <p>Webtoon: Edited 12 hours ago</p>
                    </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card recentPost">
                    <div class="postImgCont pl-3 pr-3 pt-3 pb-3">
                      <img src="./images/dummy.png" class="rounded img-thumbnail w-50 img-fluid " />
                    </div>
                    <div class="pl-3 pt-3">
                      <h5 class="defaultColor mb-0">Pink Lemonade Tears</h5>
                      <p>Comic: Edited 2 days ago</p>
                    </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card recentPost">
                    <div class="postImgCont pl-3 pr-3 pt-3 pb-3">
                      <img src="./images/dummy.png" class="rounded img-thumbnail w-50 img-fluid " />
                    </div>
                    <div class="pl-3 pt-3">
                      <h5 class="defaultColor mb-0">Hero Hitman</h5>
                      <p>Webtoon: Edited 7 days ago</p>
                    </div>
                </div>
              </div>

            </div>
          
      </div>
    </div>
  
    <div class="target modal" id="welcomeModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body text-center  pt-5 pb-4">
            <div id="sliderIndicators" data-interval="false" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators mb-4">
                <li data-target="#sliderIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#sliderIndicators" data-slide-to="1" class="mt-0"></li>
                <li data-target="#sliderIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner" >
                <div class="carousel-item active">
                  <h2 class="defaultColor text-center welcomeHead">Welcome to story storystorm.co</h2>
                  <p class="grayColor text-center fs-15">Tell us who are you</p>
                  <div class="form-group mt-4 mb-4">
                      <input class="form-control w-65 userInput" placeholder="Enter username" />
                  </div>

                  <div class="form-group">
                    <select class="form-control w-65 userInput">
                      <option value="0">What can best describe what you do?</option>
                    </select>
                  </div>

                  <button class="carousel-control-next" href="#sliderIndicators" role="button" data-slide="next" type="button" class="btn btn-primary mt-4 w-40 nxtBtn">Next</button>
                </div>
                <div class="carousel-item">
                  <h2 class="defaultColor text-center welcomeHead mb-4">Choose Profile Icon</h2>
                  <div class="iconContainer mt-3 d-flex flex-wrap justify-content-around">
                    <div class="iconCont">
                      <GiPlasticDuck class="fs-40 grayColor" />
                    </div>
                    <div class="iconCont">
                      <GiPlasticDuck class="fs-40 grayColor" />
                    </div>
                    <div class="iconCont">
                      <GiPlasticDuck class="fs-40 grayColor" />
                    </div>
                    <div class="iconCont">
                      <GiPlasticDuck class="fs-40 grayColor" />
                    </div>
                    <div class="iconCont">
                      <GiPlasticDuck class="fs-40 grayColor" />
                    </div>
                    
                  </div>

                  <div class="iconContainer mt-4 d-flex flex-wrap justify-content-around">
                    <div class="iconCont">
                      <GiPlasticDuck class="fs-40 grayColor" />
                    </div>
                    <div class="iconCont">
                      <GiPlasticDuck class="fs-40 grayColor" />
                    </div>
                    <div class="iconCont">
                      <GiPlasticDuck class="fs-40 grayColor" />
                    </div>
                    <div class="iconCont">
                      <GiPlasticDuck class="fs-40 grayColor" />
                    </div>
                      <div class="iconCont">
                        <AiFillCamera class="fs-40 grayColor" />
                      </div>
                    
                    
                  </div>

                  <button class="carousel-control-next" href="#sliderIndicators" role="button" data-slide="next" type="button" class="btn btn-primary mt-4 w-40 nxtBtn">Next</button>

                </div>
                <div class="carousel-item">
                  <h2 class=" defaultColor text-center welcomeHead">Start Creating</h2>
                  <p class="grayColor text-center fs-15 mb-4">Choose template to get started</p>
                  <div class="row">
                    <div class="col-sm-4">
                        <a href="/art" class="text-center storyCont">
                          <img src="./images/dummy.png" class="rounded img-fluid" />
                          <h5 class="defaultColor mt-4 mb-1">Manga</h5>
                          <p>5 in x 7.5 in</p>
                        </a>
                    </div>
                    
                    <div class="col-sm-4">
                        <a href="/art" class="text-center storyCont">
                          <img src="./images/dummy.png" class="rounded img-fluid" />
                          <h5 class="defaultColor mt-4 mb-1">Webtoon</h5>
                          <p>800 in x 1280 in</p>
                        </a>
                    </div>
                    <div class="col-sm-4">
                        <a href="/art" class="text-center storyCont">
                          <img src="./images/dummy.png" class="rounded img-fluid" />
                          <h5 class="defaultColor mt-4 mb-1">Comic</h5>
                          <p>6.256 in x 10.25 in</p>
                        </a>
                    </div>
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}