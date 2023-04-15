import React, { useState } from "react";
import Header from "../components/Header";
import readingHusky from "../assets/images/illustrations/huskylearn.webp";

const Home = () => {
  const [isScale, setIsScale] = useState(false);
  return (
    <div className="bg-primary-color text-secondary-color">
      <Header />
      <div
        className={`bg-landing-husky bg-no-repeat bg-cover h-screen min-h-screen sticky top-0 flex justify-end`}
      >
        <div className="w-1/2 pt-[100px]">
          <h1 className="text-5xl font-semibold mb-4">
            Welcome to Husky Pedia!
          </h1>
          <p className="w-1/2 ps-4">
            A community for husky lovers to share and discover pictures of these
            beautiful dogs. Whether you're a seasoned husky owner or just
            looking to learn more about these majestic animals, Husky Pedia is
            the perfect place to start. So join the pack and share your love of
            huskies with us!
          </p>
        </div>
      </div>
      <div className="bg-bright-color relative pt-8 pb-16 px-16 flex">
        <div className="w-1/2">
          <h2 className="text-4xl font-semibold mb-8 text-center">
            Watch photos & gifs
          </h2>
          <div
            className="h-[500px] w-[85%] rounded text-center mx-auto flex items-end justify-center relative overflow-hidden shadow-inner"
            onMouseEnter={() => setIsScale(true)}
            onMouseLeave={() => setIsScale(false)}
          >
            <img
              src="https://images.unsplash.com/photo-1589575233022-e0e83dfca7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
              alt="husky"
              className={`absolute ${
                isScale && "scale-105"
              } h-full w-full object-cover transition-all duration-700`}
            />
            <button
              className={`bg-bright-color font-semibold text-2xl px-6 py-2 rounded mb-8 shadow-btn hover:scale-105 duration-500 ease-in-out relative`}
            >
              Show me more
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-4xl font-semibold mb-8 text-center">
            Learn about huskies
          </h2>
          <div className="h-[500px] w-[85%] rounded text-center mx-auto flex items-end justify-center relative overflow-hidden shadow-inner">
            <img
              src={readingHusky}
              alt="husky"
              className={`absolute h-full w-full transition-all duration-700 object-cover`}
            />
            <button
              className={`bg-bright-color font-semibold text-2xl px-6 py-2 rounded mb-8 shadow-btn hover:scale-105 duration-500 ease-in-out relative`}
            >
              Go to huskypedia
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
