import {
  Comment01Icon,
  FavouriteIcon,
  NewReleasesIcon,
  Share03Icon,
  ShoppingBasketAdd02Icon,
  StarIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "hugeicons-react";
import { Link, useLocation } from "react-router-dom";
import { Reviews } from "../../components/reviews/Reviews.jsx";
import { watchImagePath } from "../../constants/FileNameConstants.js";

const WatchDetails = () => {
  // const { state } = useLocation();
  //  const { image, limited, model, name, price } = state;
  return (
    <>
      <section className="w-full h-auto bg-slate-800">
        <div className="bg-primaryBg  w-full h-auto rounded-b-[50px]">
          <div className="grid md:grid-cols-3 max-w-[90%] w-full h-screen mx-auto ">
            <div className="">
              <small className="text-green-600 uppercase flex items-center gap-3 pt-8">
                assured <NewReleasesIcon style={{ width: 16, height: 16 }} />
                <span className="text-yellow-600 capitalize">
                  <Link to="/seller">nikhil wankhade</Link>
                </span>
              </small>
              {/* Watch Details */}
              <div className="text-white pt-3 flex flex-col items-start md:space-y-4">
                <div className="text-sm text-gray-400 pb-2">CH-6725S-BKGO</div>
                <p className="uppercase text-white font-sans pb-5 md:text-4xl text-2xl font-semibold leading-tight">
                  flying grand regulator skeleton cowboy
                </p>
                <button className="bg-primaryButton hover:bg-yellow-700 px-6 py-2 rounded-2xl uppercase text-black">
                  buy now
                </button>

                {/* strap size */}
                <div className="flex mt-5 md:pt-6">
                  <label htmlFor="size" className=" pr-5 text-xl capitalize">
                    strap size
                  </label>
                  <select
                    name="size"
                    id=""
                    className="bg-slate-300 text-black rounded-xl px-2 py-2 outline-none text-xs sm:text-[10px]"
                  >
                    <option value="22cm">22cm</option>
                    <option value="12cm">12cm</option>
                    <option value="16cm">16cm</option>
                  </select>
                </div>

                <h2 className="text-green-500 md:pt-10 mt-4 text-2xl font-bold">
                  {" "}
                  <span className="text-white">price</span> ₹ 230
                </h2>
              </div>
            </div>
            <div className="-mt-20 md:mt-0">
              {/* Live Watch Image */}
              <div className="w-full md:w-[40vw] flex justify-center bg-cover">
                <img
                  src={watchImagePath}
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
                <li key="add to cart">
                  <ShoppingBasketAdd02Icon color="#45cc51" />
                </li>
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
        </div>

        {/* information  and suggestion*/}

        <div className="max-w-[90%]  mx-auto py-7 grid md:grid-cols-3 gap-y-8">
          {/* watch info */}
          {/*1. Watch Details */}
          <div className="text-white  flex flex-col items-start ">
            <div className="text-sm text-gray-400 pb-3">CH-6725S-BKGO</div>
            {/* watch name */}
            <h3 className="uppercase text-white font-sans  font-semibold leading-tight">
              flying grand regulator skeleton cowboy
            </h3>
            <p className="text-xs text-slate-200 pt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              itaque excepturi aut! Enim, modi quos distinctio ad temporibus
              fugiat tempore ab cupiditate porro, placeat non obcaecati neque?
              Iste, tenetur explicabo.
            </p>
          </div>

          {/* 2. watch models */}
          <div className="md:pl-10 md:mx-auto md:pt-3">
            <h2 className="font-bold capitalize">various models</h2>
            <ul className="pt-4 ">
              <li className="text-sm text-gray-400 ">CH-6725S-BKGO</li>
              <li className="text-sm text-gray-400 mt-2">CH-6725S-BKGO</li>
              <li className="text-sm text-gray-400 mt-2">CH-6725S-BKGO</li>
            </ul>
          </div>

          {/* 3. suggested images */}
          <div className="">
            <h3 className="font-bold capitalize py-3"> suggested watch</h3>
            <div className="flex overflow-x-auto hide-scrollbar">
              <img src={watchImagePath} alt="" className="w-32" />
              <img src={watchImagePath} alt="" className="w-32" />
              <img src={watchImagePath} alt="" className="w-32" />
              <img src={watchImagePath} alt="" className="w-32" />
            </div>
          </div>
        </div>

        {/* reviews  and ratings of product*/}

        <Reviews />
      </section>
    </>
  );
};

export default WatchDetails;
