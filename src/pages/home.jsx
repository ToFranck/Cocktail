import React from "react";
import { Link } from "react-router-dom";
import Slider from "../components/slider";

export default function Home() {
  return (
    <>
      <div className="relative w-full overflow-hidden" style={{ height: "600px" }}>
        <video
          muted
          autoPlay
          loop
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source
            src="https://cdn.sanity.io/files/1i4p8fow/production/f470cfbaa1baa9bd6b8f9e24f14cca3d3c98bee2.mp4"
            type="video/mp4"
          />
        </video>

        <div className="flex items-center justify-center h-full ">
          <h1 className="text-5xl font-bold text-white md:text-center mx-8">
            Welcome to the <span className="text-red-400">Home Page</span>
          </h1>
        </div>
      </div>

      <div className="part2 md:flex justify-center md:px-8 px-6 gap-8 pt-24 ">
        <div className="cocktails flex-1 relative">
          <div className="card relative pb-8">
            <Link to="/cocktails"> 
            <img
              src="https://www.capi.com.au/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F1i4p8fow%2Fproduction%2F51f1c940e895a85a181fca535840a5642f9d5b09-1140x640.jpg&w=640&q=95"
              alt=""
              className="w-full h-64 object-cover rounded-lg " style={{height:"335px"}}
            />
            <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white">
              <h2 className="text-3xl font-bold">Cocktails</h2>
              <p>Discover our cocktails</p>
            </div>
            
            </Link>
          </div>
        </div>

        <div className="ingredients flex-1 relative">
          <div className="card relative pb-8">
            <Link to="/ingredients">
            <img
              src="https://cdn.sanity.io/images/1i4p8fow/production/4f09d8885a7b7d2b18db3b729692656e034e233e-2000x1330.jpg?w=1920&q=90&fit=scale"
              alt=""
              className="w-full h-64 object-cover rounded-lg" style={{height:"335px"}}
            />
            <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white">
              <h2 className="text-3xl font-bold">Ingredients</h2>
              <p>Discover our ingredients</p>
            </div>
            </Link>
          </div>
        </div>

        <div className="random flex-1 relative">
          <div className="card relative pb-8">
            <Link to="/random-cocktail">
            <img
              src="https://www.capi.com.au/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F1i4p8fow%2Fproduction%2F3510404f6fa812bb872da6ac505de1d54c254dcb-1140x640.jpg&w=640&q=95"
              alt=""
              className="w-full h-64 object-cover rounded-lg" style={{height:"335px"}}
            />
            <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white">
              <h2 className="text-3xl font-bold">Random Cocktail</h2>
              <p>Discover a random cocktail</p>
            </div>
            </Link>
          </div>
        </div>
        
      </div>

      <div className="part2 md:flex justify-center md:px-8 px-6 gap-8 ">
        <div className="cocktails flex-1 relative">
          <div className="card relative pb-8">
             
            <img
              src="https://www.capi.com.au/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F1i4p8fow%2Fproduction%2Fed72f4a43f5a91e2db321e9aaf84e4f5a0de6cc5-2000x1330.jpg&w=1920&q=95"
              alt=""
              className="w-full h-64 object-cover rounded-lg " style={{height:"335px"}}
            />
            <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white">
              <h2 className="text-3xl font-bold">Lorem ipsum</h2>
              <p>Discover our lorem ipsum</p>
            </div>
            
           
          </div>
        </div>

        <div className="ingredients flex-1 relative">
          <div className="card relative pb-8">
            
            <img
              src="https://www.capi.com.au/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F1i4p8fow%2Fproduction%2Fed72f4a43f5a91e2db321e9aaf84e4f5a0de6cc5-2000x1330.jpg&w=1920&q=95"
              alt=""
              className="w-full h-64 object-cover rounded-lg" style={{height:"335px"}}
            />
            <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white">
              <h2 className="text-3xl font-bold">Lorem ipsum</h2>
              <p>Discover our lorem ipsum</p>
            </div>
            
          </div>
        </div>

        <div className="random flex-1 relative">
          <div className="card relative pb-8">
            
            <img
              src="https://www.capi.com.au/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F1i4p8fow%2Fproduction%2Fed72f4a43f5a91e2db321e9aaf84e4f5a0de6cc5-2000x1330.jpg&w=1920&q=95"
              alt=""
              className="w-full h-64 object-cover rounded-lg" style={{height:"335px"}}
            />
            <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white">
              <h2 className="text-3xl font-bold">Lorem ipsum</h2>
              <p>Discover a random lorem ipsum</p>
            </div>
            
          </div>
        </div>
        
      </div>

      <div className="part3 justify-center " >
         <h3 className="text-3xl font-bold md:text-center mt-12 mb-24 px-8 ">
            Retrouvez tout une game d'alcool pour vos cocktails
        </h3>
        
        <Slider />

      </div>
    </>
  );
}
