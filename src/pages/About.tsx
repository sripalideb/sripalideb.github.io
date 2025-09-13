import React from "react";
import image from "../components/icons/hand.png"
const About: React.FC = () => {
  return (
    <main id="main-content" className="py-20">
      <div className=" mx-auto px-6 flex ">
        <div className="">
          <img src={image} className="scale-x-[-1]"/>
        </div>
        <div className="max-w-2xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-heading font-bold mb-4">about me</h1>
            <p className="text-lg text-neutral-gray">
              hi, i'm sripali. you can call me sri, or pali, or sleepali, or...
              you get the point. i design, i dance, i tinker with products, play
              a little with ai, and collect fun ideas along the way. this site
              is basically my diary of it all.
            </p>
          </header>
        </div>
        <div className="">
        <img src={image}/>
        </div>
      </div>
    </main>
  );
};

export default About;
