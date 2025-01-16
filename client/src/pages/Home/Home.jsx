/* Home - this is nothing but a carousel effect only , for showing watches */

import React from "react";
import { Link } from "react-router-dom";
import Video from "../../components/video/Video";
import { SquareArrowLeft01Icon, SquareArrowRight01Icon } from "hugeicons-react";
import History from "../../components/history/History";
import { watchImagePath } from "../../constants/FileNameConstants";

const Home = () => {
  return (
    <>
      <section className="bg-[#050811] w-full max-w-[90%] mx-auto  h-auto ">
        <div className="flex justify-between items-center pt-7 ">
          <div className="bg-[#053B67]/80 px-4 py-3 rounded-3xl text-sky-500 uppercase text-xs backdrop-blur-2xl">
            Limited to <span className="text-white">15 pieces</span>
          </div>
          <div className="bg-[#050811]/80 px-4 py-3 rounded-3xl text-sky-500 uppercase text-xs backdrop-blur-2xl ">
            available
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full justify-around mx-auto relative gap-8">
          {/* Watch Details */}
          <div className="text-white pt-8 flex flex-col items-start space-y-4">
            <div className="text-sm text-gray-400">CH-6725S-BKGO</div>
            <p className="uppercase text-white font-sans pb-5 md:text-5xl text-2xl font-bold leading-tight">
              flying grand regulator skeleton cowboy
            </p>
            <Link
              to="/findMoreWatch"
              className="bg-primaryButton px-6 py-2 rounded-2xl capitalize text-black"
            >
              find More Watch
            </Link>
          </div>

          {/* Live Watch Image */}
          <div className="w-full md:w-[40vw] flex justify-center bg-cover">
            <img
              src={watchImagePath}
              alt="watch"
              className="max-w-full h-auto"
            />
          </div>

          {/* TODO: make this in full size in mobile size */}
          {/* Video of Watch */}
          <div className="py-5  md:absolute  md:bottom-0 md:right-0">
            <Video videoSrc="/video/watch.mp4" />
          </div>
        </div>

        {/* right and left watch name , link and how many watch are there in watch scale */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Arrow */}
          <div className="uppercase md:text-[1rem] text-sm text-slate-50 flex items-center gap-2">
            <SquareArrowLeft01Icon color="white" />
            <span>space timer jupiter</span>
          </div>

          {/* Watch Scale for Showing Number */}
          <div className="w-full md:w-[30%] h-1 bg-white"></div>

          {/* Right Arrow */}
          <div className="uppercase md:text-[1rem] text-sm text-slate-50 flex items-center gap-2">
            <span>space timer jupiter</span>
            <SquareArrowRight01Icon color="white" />
          </div>
        </div>

        <History />
      </section>
    </>
  );
};

export default Home;
