import React from 'react'
import { Link } from 'react-router-dom'
import HomePageHeader from "./HomePageHeader.jsx";
import { Button, Image } from "semantic-ui-react";

const Home = () => (
	<div >
		<HomePageHeader  />

    <div class="ui masthead masthead-main segment ">

      <div className="ui fluid image">
        <a class="ui right corner label">
          <i class="facebook icon"></i>
        </a>
        <Image src="https://static.pexels.com/photos/17840/pexels-photo.jpg" />
        <div class="ui middle aligned centered stackable grid container">
          <div style={{position: 'absolute', bottom: 0, top: 55, width: '100%', height: 'auto' }} >
            <div class="row">
              <div class="ten center aligned wide column">
                <h1 class="ui header" id="tagline">
                  <span>To Be the Best, You Have to Beat the Best</span>
                  <div class="sub header small white">
                  <h2>"Start competing today!"</h2>

                  </div>
                  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                  <div className="item">
                    <Link to="/signupform">

                      <Button class="ui button huge green" role="button">
                      Sign up
                      </Button>
                    </Link><br /><br />
                    Setup an account in seconds
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="mgb-alternating">
      <div class="ui container">
      <div class="ui section divider">
          </div>
          <div class="ui middle aligned equal width stackable grid">
            <div class="column">
              <img class="mgb-alternating-media ui image" src="https://media.istockphoto.com/photos/tug-of-war-picture-id503870180?k=6&m=503870180&s=612x612&w=0&h=J7xJTbTxgmAl7HHt-aOA-dV6m90f1G3oReAC4A-s5_U=" />
            </div>
            <div class="column">
              <h3 class="ui header">Compete with friends and locals
                <span class="sub header">Login with Facebook to start competing with your friends. Or find locals who have similar goals that want to compete!
                </span>
              </h3>
              <a class="ui big primary fluid button" href="/signupform">

                Try it

              </a>
            </div>
          </div>
          <div class="ui section divider">
          </div>
          <div class="ui middle aligned equal width stackable mobile vertically reversed grid ">
            <div class="column">
              <h3 class="ui header">
                Bragging Rights
                  <span class="sub header">
                    Earn trophies when you win against your friends. Show em who's boss by winning multiple trophies and claiming your spot at the top.
                  </span>
              </h3>
              <a class="ui big primary fluid button" href="/trophies">
                Earn Trophies
              </a>
            </div>
            <div class="nine wide computer ten wide tablet column">
              <img  src="https://media.istockphoto.com/photos/competitive-chefs-picture-id476610355?k=6&m=476610355&s=612x612&w=0&h=IJ36E658aqk5Ciq7hapR4-QPR4xIp1Yihll3tj_aTgE=" alt="Duck" />
            </div>
          </div>
      </div>
    </section>

    <footer class="ui inverted vertical segment">
      <div class="ui container">
        <div class="ui equal width stackable grid">
          <div class="column">
            <h4 class="ui inverted header">Compete today
            </h4>
            <p>Set goals for yourself and compete with friends who may have similar goals!
            </p>
          </div>
        <div class="column">
          <h4 class="ui inverted header">
            Get Fit
          </h4>
          <div class="ui inverted list">
            <div class="item">
              Run a marathon
            </div>
            <div class="item">
              Lift more
            </div>
          </div>
        </div>
        <div class="column">
          <h4 class="ui header">
            Make Friends
          </h4>
          <div class="ui inverted list">
            <div class="item">Help each other get better
            </div>
            <div class="item">Find locals that want to compete
            </div>
          </div>
        </div>
        <div class="column">
          <h4 class="ui inverted header">
            Have Fun
          </h4>
          <div class="ui inverted list">
            <div class="item">We're all trying to get better. Compete and have fun along the way.
            </div>

          </div>
        </div>
        </div>
        <div class="ui equal width stackable grid">
          <div class="eight wide column">
            Copyright ©2018 BCM Inc.
          </div>
          <div class="column">
            <div class="ui equal width grid">
              <div class="column">
                <div class="ui small inverted horizontal divided link list">
                  <a class="item" href="https://www.hackreactor.com" target="_blank" rel="noopener noreferrer">
                  Hack Reactor</a>
                  <a class="item" href="fake@fake.com">Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>




  </div>


);

export default Home