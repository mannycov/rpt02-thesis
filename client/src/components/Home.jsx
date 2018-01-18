import React from 'react'
import { Link } from 'react-router-dom'
import HomePageHeader from "./HomePageHeader.jsx";
import { Button, Image } from "semantic-ui-react";

const Home = () => (
	<div>
		<HomePageHeader  />
    <div class="ui raised very padded text container">
      <Image src="https://static.pexels.com/photos/17840/pexels-photo.jpg" />
      <p></p>
      <p></p>
    </div>
	</div>
);

export default Home