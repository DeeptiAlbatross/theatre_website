import React from "react";

const hero = () => {
  return (
    <div>
      <div
        className="relative bg-cover pb-10 "
        style={{
          backgroundImage:
            "url(https://cdn.create.vista.com/api/media/small/454847026/stock-photo-red-curtain-theatre-background)",
          minHeight: "100%",
        }}
      >
        
        <div className=" inset-0 flex items-start pt-36  md:pt-52 justify-center">
          <h className="text-4xl text-white font-serif text-center">
            A Play by : Vijay Kapoor{" "}
          </h>
        </div>
        <div className="flex flex-wrap md:top-1/2 top-0 w-full  justify-center">
          <img
            className="md:h-[350px] md:w-[460px] h-[350px] w-[350px] mix-blend-screen"
            src="https://brightspotcdn.byui.edu/dims4/default/7f14fdd/2147483647/strip/true/crop/6881x4913+0+0/resize/800x571!/quality/90/?url=http%3A%2F%2Fbyu-idaho-brightspot-production-us-east-2.s3.us-east-2.amazonaws.com%2Fb7%2F39%2Ff595c4c043478bf6e6274eb67d9d%2F230215-drama-notredame-066.jpg"
            alt=""
          ></img>
          <img
            className="md:h-[350px] md:w-[460px] h-[350px] w-[350px] mix-blend-screen"
            src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F605a0bbc-f3d0-4ea0-a375-c306697e8886.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"
            alt="img"
          ></img>
          <img
            className="md:h-[350px] md:w-[460px] h-[350px] w-[350px] mix-blend-screen"
            src="https://s3.us-west-2.amazonaws.com/assets.eastidahonews.com/wp-content/uploads/2019/10/19090046/The-Winters-Tale.jpg"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default hero;