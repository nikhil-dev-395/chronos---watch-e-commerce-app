/* add here search and filter based on city location */

import { FavouriteIcon, NewReleasesIcon, StarIcon } from "hugeicons-react";

const Store = ({
  image = "/Images/store.jpg",
  location = "chaitany colony , yashoda nagar ,amravati , maharashtra , 4445050",
  storeOwner = "nikhil sanjay wankhade",
  storeName = "wankhade watch center",
  star = "1",
}) => {
  return (
    <>
      <section className="bg-slate-950 border border-slate-900 w-full h-auto max-w-[270px] max-h-[450px] sm:max-w-[200px] sm:max-h-[410px] lg:max-w-[310px]  rounded-3xl mx-auto ">
        <div className="bg-slate-900 w-full h-auto p-2 rounded-3xl">
          <div className="flex justify-between items-center">
            <div className="flex gap-x-36 md:gap-x-40 pb-2 items-center px-4">
              <FavouriteIcon
                className="text-sky-500 hover:text-sky-400 transition duration-200"
                style={{ width: 16, height: 16 }}
              />
              <small className="text-green-600 uppercase flex items-center gap-3">
                assured <NewReleasesIcon style={{ width: 16, height: 16 }} />
              </small>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={image}
              alt={`${name || "Watch item"} image`}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="py-6 px-3">
          <p className="capitalize font-sans   text-sm sm:text-xs text-sky-500 font-semibold">
            {storeOwner}
          </p>
          <p className="text-gray-400 pt-3   font-bold uppercase">
            {storeName}
          </p>
          <div className=" capitalize text-xs pt-3 pb-2 flex items-center justify-between ">
            <span> {location}</span>
            <h2 className="text-xl px-3 py-2 font-bold flex items-center gap-2  ">
              {" "}
              <StarIcon color="#f2f3f7" fill="#f2f3f7" /> <span>{star} </span>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Store;
