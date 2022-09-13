import React, { Component } from "react"
import { Grid } from "@mui/material"
import Slider from "react-slick"
import Image from "next/image"
import CardComponent from "../Hero/Card"
import tech from "../../public/img/tech.png"
import sir from "../../public/img/sir.png"
import phd from "../../public/img/phd.png"
import miss from "../../public/img/miss.png"

const Slides = () =>{

    const settings = {
      autoplay:true,
      autoplaySpeed: 1500,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    }

    return (
      <div className="programs">

        <div className="px-[10rem] space-y-[2rem] flex flex-col items-center justify-center">
          <h1 className="text-[#0B3954]">Programs</h1>
          <p className="text-[#0B3954]">We learned about honesty and integrity – that the truth matters, that you don’t take shortcuts or play by your own set of rules and success doesn’t count unless you earn it.</p>
        </div>

        <div className="flex justify-center py-10">
      
          <Slider className="w-[70rem] flex justify-evenly" {...settings}>
            <CardComponent  title = "BICE" content = "Hello there good people Hello there good people Hello there good people Hello there good people Hello there good people" src = {tech} />
            <CardComponent  title = "MICE" content = "Hello there good people Hello there good people Hello there good people Hello there good people Hello there good people" src = {sir}/>
            <CardComponent  title = "MISS" content = "Hello there good people Hello there good people Hello there good people Hello there good people Hello there good people" src = {miss}/>
            <CardComponent  title = "PHD" content = "Hello there good people Hello there good people Hello there good people Hello there good people Hello there good people" src = {phd}/>
          </Slider>	
          
        </div>
      </div>
      
    );
  }

  export default Slides