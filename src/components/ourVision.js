import React from "react";

const OurVision = () => {
  return (
    <div id="Vision" className="w-full">
      <img
        className="w-full h-[650px] hidden md:flex absolute"
        src="https://static.vecteezy.com/system/resources/previews/038/811/569/non_2x/ai-generated-beautiful-background-for-theatre-advertising-free-photo.jpeg"
        alt=""
      />
      <div className="px-4 pt-8 pb-2">
        <div className="text-center relative">
          <h2 className="text-4xl font-bold leading-loose text-transparent bg-gradient-to-l from-red-950 bg-clip-text sm:text-5xl">
            OUR VISION
          </h2>
          <div className="border-b-2 border-indigo-500 w-16 mx-auto my-2 sm:w-32 " ></div>
        </div>
        <div className="mt-6 space-y-6 text-lg text-black md:text-white sm:text-xl  relative">
          <p className="">
            REDISCOVER THE CLASSICS Experience the timeless beauty of classic
            plays and epic tales of Mahabharata with our spectacular musical
            performances. Don't miss the chance to witness these legendary
            stories unfold on stage, filled with music, drama, and magic.
          </p>
          <p className="leading-loose">
            To create a theatrical experience that goes beyond traditional
            storytelling, making an everlasting impression on our audiences.
          </p>
          <p className="leading-loose">
            To bring forth old-age epic tales that extend the cultural and
            generational gap, promoting a better understanding and appreciation
            of our shared history.
          </p>
          <p className="leading-loose">
            To offer an open and welcoming space in which artists of all
            backgrounds may collaborate, share their unique viewpoints, and
            grow together.
          </p>
          <p className="leading-loose">
            To produce intriguing and mind-blowing theatrical performances that
            celebrate the wonderful qualities of human potential inspiring the
            souls.
          </p>
          <p className="leading-loose">
            To inspire our audiences' imaginations and curiosity while urging
            them to dream big and embrace new perspectives through creative and
            thought-provoking shows.
          </p>
          <p className="leading-loose">
            To seamlessly blend the worlds of theatre and dance, creating a
            harmonic and thrilling experience that embraces the influence of
            words and the creative potential of motion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
