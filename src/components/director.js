import React from "react";

const director = () => {
  return (
    <>
      <div id="director" className=" w-full h-[20px] my-36 ">
        <img
          className="w-full h-[650px] hidden md:flex"
          src="https://i.pinimg.com/originals/22/a5/a7/22a5a7b9dbc0e29ccef006dea5981367.png"
          alt=""
        ></img>
      </div>
      <div className="flex items-center justify-center pt-20 w-[90%] mx-auto">
        <div className="flex-col justify-between mx-4 md:flex-row flex">
          <div className="">
            <img
              className="md:h-[350px] md:w-[1400px] h-auto w-full border-r-8 border-b-8 py-3 px-4  border-red-400"
              src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"
              alt=""
            ></img>
          </div>
          <div className="md:pl-28 items-start flex flex-col">
            <div className="w-64 flex flex-col">
              <h className="text-4xl text-center font-bold leading-loose bg-red-500 bg-gradient-to-l from-red-950  bg-clip-text text-transparent ">
                DIRECTOR
              </h>
              <div className="border-b-2 w-64 -mt-2 border-indigo-500"></div>
              <div className=" flex items-center border-b-2 w-32 ml-14 p-1 border-red-950"></div>
            </div>

            <p className="text-lg text-black leading-loose pt-4">
              Our founders, Vijay Kapoor, have deep roots in the Delhi theatre
              scene and a shared passion for the performing arts. Their dream
              was to create a platform that not only showcases the richness of
              Indian culture but also fosters new and innovative voices in the
              theatre industry. From modern day dramas to our musical theatre
              plays of the historic Mahabharata, we always have something for
              everyone. Our belief is in the power of stories to connect,
              inspire, and transform.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default director;