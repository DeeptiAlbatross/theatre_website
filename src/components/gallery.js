import React from "react";

const gallery = () => {
  return (
    <div
      id="show"
      className="px-4 md:px-40 lg:px-16  my-48"  >
      <h className="text-4xl  text-center font-bold leading-loose bg-red-500 bg-gradient-to-l from-red-950  bg-clip-text text-transparent  ">
        GALLERY
      </h>
      <div className="border-b-2 w-64 -mt-2 border-indigo-500"></div>
      <div className=" flex items-center border-b-2 w-32 ml-14 p-1 border-red-950"></div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-2 my-10 ">
        <img
          src="https://www.shutterstock.com/image-photo/actors-actresses-play-modern-lyrical-600nw-1905059638.jpg"
          alt=""
          className="w-full h-4/5"
        ></img>
        <img
          src="https://m.economictimes.com/thumb/msid-57850758,width-1200,height-900,resizemode-4,imgsize-126516/world-theatre-day-a-look-at-whats-trending-in-bengalurus-drama-scene.jpg"
          alt=""
          className="w-full h-4/5"
        ></img>
        <img
          src="https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2020/02/k-6.jpg"
          alt=""
          className="w-full h-4/5"
        ></img>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9b/A_scene_from_drama_Chandalika.JPG"
          alt=""
          className="w-full h-4/5"
        ></img>
        <img
          src="https://www.seymourcentre.com/media/0dkprmzx/dramafest2019-0273.jpg?anchor=center&mode=crop&width=1024&height=768&rnd=133056582674370000"
          alt=""
          className="w-full h-4/5"
        ></img>
        <img
          src="https://playinginpuddles.com.au/wp-content/uploads/2020/11/Kids-On-Stage-OGrady-Drama-Academy-Australia-23.jpg"
          alt=""
          className="w-full h-4/5"
        ></img>
      </div>
    </div>
  );
};

export default gallery;
