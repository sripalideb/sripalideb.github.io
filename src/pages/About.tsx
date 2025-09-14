import React from "react";
import image from "../components/icons/hand.png"

const About: React.FC = () => {
  return (
    <main id="main-content" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Left hand image - hidden on mobile and tablet, visible on large screens */}
          <div className="hidden lg:block flex-shrink-0">
            <img 
              src={image} 
              alt="Decorative hand illustration"
              className="scale-x-[-1]"
            />
          </div>
          
          {/* Main content */}
          <div className="max-w-2xl mx-auto">
            <header className="mb-8 sm:mb-10 lg:mb-12 text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
                about me
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-gray dark:text-neutral-gray-light leading-relaxed">
                hi, i'm sripali. you can call me sri, or pali, or sleepali, or...
                you get the point. i design, i dance, i tinker with products, play
                a little with ai, and collect fun ideas along the way. this site
                is basically my diary of it all.
              </p>
            </header>
          </div>
          
          {/* Right hand image - hidden on mobile and tablet, visible on large screens */}
          <div className="hidden lg:block flex-shrink-0">
            <img 
              src={image} 
              alt="Decorative hand illustration"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
