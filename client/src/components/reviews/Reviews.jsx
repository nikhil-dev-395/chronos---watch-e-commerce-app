import React from "react";
import { StarIcon, ThumbsDownIcon, ThumbsUpIcon } from "hugeicons-react";
import { watchImagePath } from "../../constants/FileNameConstants";
export const Reviews = ({
  /* for testing purpose only i am going to try if we have image in review */
  ReviewImage = {watchImagePath},
  // its now successful
}) => {
  return (
    <div>
      <div className="bg-primaryBg rounded-t-3xl py-10 px-2 w-full ">
        <div className="max-w-[90%]  mx-auto">
          <h2 className="text-2xl uppercase font-bold">reviews and rating</h2>
          {/* how many people done the reviews and rating  is mentioned here...*/}

          <div className="pt-10">
            {/* rating */}
            <div className="py-2 px-3 bg-green-700 rounded-lg inline-block">
              <span className="flex items-center">
                <StarIcon color="#000" fill="#000" width={18} />{" "}
                <small className="text-black font-semibold text-sm px-2">
                  4.5
                </small>
              </span>
            </div>

            {/* rating and reviews in numbers count */}
            <div>
              <p className="text-slate-300 py-4">
                {" "}
                <span>94,317</span> ratings and <span>94,317</span> reviews
              </p>
            </div>

            {/* rate button */}

            <div className="pt-4">
              <button className="py-2 px-3 rounded-md bg-blue-500 text-slate-950 font-semibold hover:bg-blue-700">
                Rate Product
              </button>
            </div>

            {/* rating output */}

            <div className="pt-10  ">
              <ul>
                <li className="border-t border-slate-700 py-10">
                  {/* rating */}
                  <div className="py-2 px-3 bg-green-400 rounded-lg inline-block mb-1">
                    <span className="flex items-center">
                      <StarIcon color="#000" fill="#000" width={18} />{" "}
                      <small className="text-black font-semibold text-sm px-2">
                        4.5
                      </small>
                    </span>
                  </div>

                  {/* your review in text  */}
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur, est laudantium repudiandae fuga, adipisci facere
                    libero, itaque aliquam beatae iure dolores excepturi
                    distinctio? Repudiandae fugiat soluta facilis voluptate
                    assumenda et?
                  </p>

                  {/* if image is used then show the images */}

                  {ReviewImage ? (
                    <div className="overflow-x-auto flex hide-scrollbar">
                      <img
                        src={ReviewImage}
                        className="w-32 border rounded-lg mt-3"
                        alt={ReviewImage}
                      />
                    </div>
                  ) : (
                    ""
                  )}

                  {/* like and dislike with their respective count also... */}
                  <div className="flex gap-10 pt-4">
                    <span className="">
                      <ThumbsUpIcon />
                      <small>10k</small>
                    </span>
                    <span className="">
                      <ThumbsDownIcon />
                      <small>10k</small>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};
