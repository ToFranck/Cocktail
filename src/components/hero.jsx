import React from "react";

const Hero = () => {

    return (
        <div className="relative w-full overflow-hidden" style={{ height: "600px" }}>
        <video
            muted
            autoPlay
            loop
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
            <source
            src="https://cdn.sanity.io/files/1i4p8fow/production/9e3ead508dec63b89d220a81048546e753eab36a.mp4"
            type="video/mp4"
            />
        </video>
    
        <div className="flex items-center justify-center h-full ">
            <h1 className="text-5xl font-bold text-white md:text-center mx-8">
            Welcome to the <span className="text-red-400">Home Page</span>
            </h1>
        </div>
        </div>
    );
    };

    export default Hero;