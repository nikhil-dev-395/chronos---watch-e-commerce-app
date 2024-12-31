import { Link } from "react-router-dom";
import Video from "../../components/video/Video";
import {
  Comment01Icon,
  FavouriteIcon,
  Share01Icon,
  Share03Icon,
  Share04Icon,
  SquareArrowLeft01Icon,
  SquareArrowRight01Icon,
} from "hugeicons-react";
import History from "../../components/history/History";

const WatchDetails = () => {
  return (
    <>
      <section className="w-full h-screen ">
        <div className="grid md:grid-cols-3 max-w-[90%] h-screen mx-auto">
          <div className="">
            {/* Watch Details */}
            <div className="text-white pt-8 flex flex-col items-start space-y-4">
              <div className="text-sm text-gray-400">CH-6725S-BKGO</div>
              <p className="uppercase text-white font-sans pb-5 md:text-4xl text-2xl font-semibold leading-tight">
                flying grand regulator skeleton cowboy
              </p>
              <button className="bg-[#e6a157] hover:bg-yellow-700 px-6 py-2 rounded-2xl uppercase text-black">
                buy now
              </button>

              <h2 className="text-slate-400 pt-10 text-xl font-semibold">
                {" "}
                ₹ 230
              </h2>
            </div>
          </div>
          <div className="">
            {/* Live Watch Image */}
            <div className="w-full md:w-[40vw] flex justify-center bg-cover">
              <img
                src="/Images/watch.png"
                alt="watch"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* right section for like , share and comment */}
          <div className="md:absolute bottom-20 gap-4 right-20">
            <ul className="gap-7 flex md:flex-col">
              {" "}
              {/* Add flex and direction */}
              <li key="share">
                <Share03Icon />
              </li>
              <li key="favourite">
                <FavouriteIcon />
              </li>
              <li key="comment">
                <Comment01Icon />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default WatchDetails;
