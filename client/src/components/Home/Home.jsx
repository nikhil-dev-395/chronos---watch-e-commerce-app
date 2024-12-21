import React from "react";
import { Link } from "react-router-dom";
import Video from "../../utils/video/Video";
import { SquareArrowLeft01Icon, SquareArrowRight01Icon } from "hugeicons-react";

const Home = () => {
  return (
    <>
      <section className="bg-[#050811] w-full max-w-[90%] mx-auto  h-screen ">
        <div className="flex justify-between items-center pt-7 ">
          <div className="bg-[#053B67]/80 px-4 py-3 rounded-3xl text-sky-500 uppercase text-xs backdrop-blur-2xl">
            Limited to <span className="text-white">15 pieces</span>
          </div>
          <div className="bg-[#050811]/80 px-4 py-3 rounded-3xl text-sky-500 uppercase text-xs backdrop-blur-2xl ">
            available
          </div>
        </div>

        <div className="grid grid-cols-3 w-full justify-around mx-auto relative">
          {/* watch details */}
          <div className="text-white pt-8 flex flex-col items-start space-y-4">
            <div className="text-sm text-gray-400">CH-6725S-BKGO</div>

            <p className="uppercase  text-white font-sans pb-5 text-5xl font-light leading-tight">
              flying grand regulator skeleton cowboy
            </p>
            <Link
              to="/findMoreWatch"
              className="bg-sky-500 px-6 py-2 rounded-2xl capitalize text-black "
            >
              find More Watch
            </Link>
          </div>

          {/* live watch image */}
          <div className="w-[40vw] bg-cover   ">
            <img src="/Images/watch.png" alt="watch" />
          </div>

          {/* video of image */}
          <div className="   ">
            <Video videoSrc="/video/watch.mp4" />
          </div>
        </div>

        {/* right and left watch name , link and how many watch are there in watch scale */}
        <div className="flex items-center justify-between">
          {/* left arrow */}
          <div className="uppercase text-[1rem] text-slate-50 flex items-center gap-2">
            <SquareArrowLeft01Icon color="white" />
            <span>space timer jupiter</span>
          </div>

          {/* watch scale for showing number */}
          <div className="w-[30%] bg-white">
            {/* <hr className="w-[30%] bg-white" /> */}
          </div>
          {/* right arrow */}
          <div className="uppercase text-[1rem] text-slate-50 flex items-center gap-2">
            <span>space timer jupiter</span>
            <SquareArrowRight01Icon color="white" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
