import React from "react";
import Image from "../assets/images.jpeg"

const About = () => {
  return (
    <>
    <div id="about" className=" w-full h-[20px] ">
        <img  className=" w-full h-[650px]"alt=""></img>
    </div>
    <div className="flex items-center justify-center  pt-20 h-1/2  ">
      <div className="flex items-center justify-between my-10  w-3/4  mx-10 ">
        <div className="h-1/2  w-[2100px] pb-28">
          <img
            className="h-full w-full border-r-8 border-b-8 py-3 px-4  border-red-400"
            src="http://thekrisoft.com/theater/img/about.png"
            alt=""
          ></img>
        </div>
        <div className="justify-center  pl-36 items-start flex flex-col">
            <div className="bg-yellow-300 w-64 flex flex-col">
            <h className="text-4xl text-center font-bold leading-loose bg-red-500 bg-gradient-to-l from-red-950  bg-clip-text text-transparent -mt-36 ">
            ABOUT US
          </h>
        <div className="border-b-2 w-64 -mt-2 border-indigo-500">

        </div>
        <div className=" flex items-center border-b-2 w-32 ml-14 p-1 border-red-950">

        </div>
            </div>
          
          <p className="text-lg text-black leading-loose">
            Nestled in the heart of Delhi, we are a community of dreamers,
            storytellers, and artists dedicated to bringing stories to life.
            Kapoor Theatre Company was founded with a singular vision: to create
            a space where stories from every corner of India can be told and
            celebrated. Our founders, Vijay Kapoor, have deep roots in the Delhi
            theatre scene and a shared passion for the performing arts. Their
            dream was to create a platform that not only showcases the richness
            of Indian culture but also fosters new and innovative voices in the
            theatre industry. From modern day dramas to our musical theatre
            plays of the historic Mahabharata, we always have something for
            everyone. Our belief is in the power of stories to connect, inspire,
            and transform.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
