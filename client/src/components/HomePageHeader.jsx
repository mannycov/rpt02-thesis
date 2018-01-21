import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Image } from "semantic-ui-react";


const HomePageHeader = () => (
	<div>
		<div className="ui attached stackable menu">

			<div class="ui container">
    		<a class="ui small image">
      		<Image src="https://thumb1.shutterstock.com/display_pic_with_logo/165062914/522985843/stock-vector-warrior-fitness-gym-logo-design-template-522985843.jpg" />
    		</a>

    		<a class="item">
      		<i class="grid layout icon"></i> Browse
    		</a>
    		<a class="item">
      		<i class="mail icon"></i> Messages
    		</a>

    		<div class="ui simple dropdown item">
      	 	More
      		<i class="dropdown icon"></i>
		      <div class="menu">
		        <a class="item"><i class="edit icon"></i> Find a Competition</a>
		        <a class="item"><i class="globe icon"></i> About Us</a>
		        <a class="item"><i class="settings icon"></i> Contact </a>
		      </div>
    		</div>
  		</div>

			<div className="item">
				<Link to="/signupform">
					<Button className="ui button" role="button">
						Sign up
					</Button>
				</Link>
			</div>
			<div className="item">
				<Button className="ui button" role="button">
					Log-in
				</Button>
			</div>
		</div>
	</div>
);

export default HomePageHeader
