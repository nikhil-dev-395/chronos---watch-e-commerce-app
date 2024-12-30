import { FavouriteIcon, ShoppingBasketAdd02Icon } from "hugeicons-react";

const Watch = ({ image, limited, model, name, price }) => {
  return (
    <>
      <section className="bg-slate-950 border border-slate-900 w-full h-auto max-w-[270px] max-h-[450px] sm:max-w-[200px] sm:max-h-[410px] lg:max-w-[310px]  rounded-3xl mx-auto ">
        <div className="bg-slate-900 w-full h-auto p-2 rounded-3xl">
          <div className="flex justify-between items-center">
            {limited && (
              <div className="bg-[orange]/10 px-4 py-2 rounded-lg text-sky-500 uppercase text-[10px] backdrop-blur-2xl">
                Limited to <span className="text-white">{limited} pieces</span>
              </div>
            )}
            <div className="flex gap-3 text-xl">
              <ShoppingBasketAdd02Icon className="text-sky-500 hover:text-sky-400 transition duration-200" />
              <FavouriteIcon className="text-sky-500 hover:text-sky-400 transition duration-200" />
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={image}
              alt={`${name || "Watch item"} image`}
              className="w-2/3 sm:w-3/4 h-auto rounded-lg object-cover"
            />
          </div>
          <div className="text-gray-400 pt-3 pb-2 text-xs sm:text-[10px]">
            {model}
          </div>
          <p className="uppercase font-sans font-light leading-tight text-sm sm:text-xs">
            {name}
          </p>
        </div>

        {/* outside the Watch compo div */}
        <div className="px-3 flex flex-wrap gap-3 capitalize">
          {/* strap */}
          <div className="pt-3">
            <h3 className="capitalize sm:text-xs">strap</h3>
            <p className="text-xs text-slate-500 capitalize sm:text-[10px]">
              lourisian alligator leather
            </p>
          </div>

          {/* strap size */}
          <div className="">
            <div className="md:pt-3 md:pl-2">
              <label htmlFor="size" className="py-3 pr-5 sm:text-xs">
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
          </div>

          {/* buckle */}
          <div className="">
            <h3 className="sm:text-xs">buckle</h3>
            <p className="text-xs text-slate-500 sm:text-[10px]">
              lourisian alligator leather
            </p>
          </div>
        </div>
        <div className="text-sky-600 font-semibold text-xl sm:text-lg pt-3 pb-2 px-4">
          {price || "price yet to decide"} ₹
        </div>
      </section>
    </>
  );
};

export default Watch;
