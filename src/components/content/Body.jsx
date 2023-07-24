
import React from "react";

const Body = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-primary text-text">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-text">CraftMyPortfolio</h1>
        <p className="mt-2 text-lg">
          Craft the perfect portfolio to showcase your development projects and skills.
        </p>
        <button className="mt-4 px-4 py-2 text-white bg-blue-600 rounded">
          Get started
        </button>
      </header>

      <section className="flex flex-wrap justify-around p-4">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <img className="w-full h-48 object-cover mb-4 rounded" src="https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Random" />
          <h2 className="text-2xl font-bold text-secondary">Modern Design</h2>
          <p className="mt-2">
            Choose from a wide array of cutting-edge templates that will make your portfolio stand out.
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <img className="w-full h-48 object-cover mb-4 rounded" src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Random" />
          <h2 className="text-2xl font-bold text-secondary">Easy to Customize</h2>
          <p className="mt-2">
            With our intuitive interface, you can personalize your portfolio to match your style.
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <img className="w-full h-48 object-cover mb-4 rounded" src="https://images.pexels.com/photos/1921326/pexels-photo-1921326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Random" />
          <h2 className="text-2xl font-bold text-secondary">Share Everywhere</h2>
          <p className="mt-2">
            CraftMyPortfolio allows you to easily share your portfolio on your preferred social media platforms or personal website.
          </p>
        </div>
      </section>

      <section className="w-full px-4 py-8 text-center bg-secondary">
        <h2 className="text-3xl font-bold">What Developers Say</h2>
        <p className="mt-2 text-lg  text-black">
          "CraftMyPortfolio made creating a professional and attractive portfolio easier than I ever thought possible."
        </p>
        <p className="mt-2 text-lg font-bold text-black">- A satisfied developer</p>
      </section>
    </div>
  );
};

export default Body;