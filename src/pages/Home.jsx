import React from "react";
import Header from "../components/Header";
import landingHusky from "../assets/images/illustrations/landinghusky.webp";

const Home = () => {
  return (
    <div className="bg-primary-color">
      <Header />
      <div
        className={`bg-landing-husky bg-no-repeat bg-cover h-screen min-h-screen sticky top-0 flex justify-end`}
      >
        <div className="w-1/2 pt-[100px] text-secondary-color">
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
      <div className="relative">lorem1000</div>
    </div>
  );
};

export default Home;
