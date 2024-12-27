import { FavouriteIcon, ShoppingBasketAdd02Icon } from "hugeicons-react";

const Watch = ({ image, limited, model, name }) => {
  return (
    <div className="bg-zinc-900 w-full sm:w-[48%] md:w-[42%] lg:w-[30%] p-5 rounded-xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="bg-[#053B67]/80 px-4 py-2 rounded-lg text-sky-500 uppercase text-xs backdrop-blur-2xl">
          Limited to <span className="text-white">{limited} pieces</span>
        </div>
        <div className="flex gap-3">
          <ShoppingBasketAdd02Icon className="text-sky-500" />
          <FavouriteIcon className="text-sky-500" />
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <img
          src={image}
          alt="Watch"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
      <div className="text-sm text-gray-400 pt-3 pb-2">{model}</div>
      <p className="uppercase text-white font-sans font-light leading-tight">
        {name}
      </p>
    </div>
  );
};

export default Watch;
