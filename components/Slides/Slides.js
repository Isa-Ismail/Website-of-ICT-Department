import React, { Component } from "react"
import { Grid } from "@mui/material"
import Slider from "react-slick"
import Image from "next/image"

const Slides = () =>{

    const settings = {
      autoplay:true,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
      <div className="flex justify-center py-10 bg-white">
    
				<Slider className="w-[50%]" {...settings}>
					
					<div className="text-center px-10">
						<Image className="rounded-md" src="/img/shop.png" height={650} width={650}/>
            <p>Earthquake</p>
					</div>
					<div className="text-center px-10">
						<Image className="rounded-md" src="/img/shop.png" height={650} width={650}/>
            <p>Flood</p>
					</div>
					<div className="text-center px-10">
						<Image className="rounded-md" src="/img/shop.png" height={650} width={650}/>
            <p>Storm</p>
					</div>
          <div className="text-center px-10">
						<Image className="rounded-md" src="/img/shop.png" height={650} width={650}/>
            <p>Storm</p>
					</div>
          <div className="text-center px-10">
						<Image className="rounded-md" src="/img/shop.png" height={650} width={650}/>
            <p>Storm</p>
					</div>
          <div className="text-center px-10">
						<Image className="rounded-md" src="/img/shop.png" height={650} width={650}/>
            <p>Storm</p>
					</div>
				
				</Slider>	
      </div>
    );
  }

  export default Slides