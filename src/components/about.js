import React from "react";

const About = () => {
  return (
    <>
      <div id="about" className="flex items-center justify-center md:pt-20 pt-4 h-[400px]  my-96 w-[90%] mx-auto">
        <div className="flex-col items-center justify-between mx-4 flex md:flex-row md:mx-10">
          <div className="">
            <img
              className="md:h-[350px] md:w-[2100px] h-auto w-full border-r-8 border-b-8 py-3 px-4  border-red-400"
              src="http://thekrisoft.com/theater/img/about.png"
              alt=""
            ></img>
          </div>
          <div className="justify-center md:pl-28 items-start flex flex-col">
            <div className="w-64 flex flex-col">
              <h className="text-4xl text-center font-bold leading-loose bg-red-500 bg-gradient-to-l from-red-950  bg-clip-text text-transparent ">
                ABOUT US
              </h>
              <div className="border-b-2 w-64 -mt-2 border-indigo-500"></div>
              <div className=" flex items-center border-b-2 w-32 ml-14 p-1 border-red-950"></div>
            </div>

            <p className="text-lg text-black leading-loose pt-4">
              Nestled in the heart of Delhi, we are a community of dreamers,
              storytellers, and artists dedicated to bringing stories to life.
              Kapoor Theatre Company was founded with a singular vision: to
              create a space where stories from every corner of India can be
              told and celebrated. Our founders, Vijay Kapoor, have deep roots
              in the Delhi theatre scene and a shared passion for the performing
              arts. Their dream was to create a platform that not only showcases
              the richness of Indian culture but also fosters new and innovative
              voices in the theatre industry. From modern day dramas to our
              musical theatre plays of the historic Mahabharata, we always have
              something for everyone. Our belief is in the power of stories to
              connect, inspire, and transform.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;