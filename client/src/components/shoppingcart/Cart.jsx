import {
  Cancel01Icon,
  FavouriteIcon,
  ShoppingBasketAdd02Icon,
} from "hugeicons-react";

const Cart = ({
  image = "/Images/watch.png",
  limited = "0",
  model = "CH-8300F-RGLD",
  name = "luxury grand regulator rose gold",
  price = "0",
}) => {
  return (
    <section className="bg-slate-950 border border-slate-900 w-full max-w-[270px] max-h-[470px] rounded-3xl mx-auto">
      <div className="bg-slate-900 w-full h-auto p-2 rounded-3xl">
        <div className="flex justify-between items-center">
          {limited && (
            <div className="bg-[orange]/10 px-4 py-2 rounded-lg text-sky-500 uppercase text-[10px] backdrop-blur-2xl">
              Limited to <span className="text-white">{limited} pieces</span>
            </div>
          )}
          <div className="flex gap-3">
            <Cancel01Icon className="text-slate-500 cursor-pointer" />
          </div>
        </div>
        <div className=" flex justify-center">
          <img
            src={image}
            alt={`${name || "Cart item"} image`}
            className="w-2/3 h-auto rounded-lg object-cover"
          />
        </div>
        <div className=" text-gray-400 pt-3 pb-2 text-xs">{model}</div>
        <p className="uppercase  font-sans font-light leading-tight text-sm">
          {name}
        </p>
      </div>

      {/* outside the cart compo div */}
      <div className="px-3 flex flex-wrap gap-3 capitalize">
        {/* strap */}
        <div className="">
          <h3 className="capitalize">strap</h3>
          <p className="text-xs text-slate-500 capitalize">
            lourisian alligator leather
          </p>
        </div>

        {/* strap size */}
        <div className="">
          <label htmlFor="size" className=" py-3 pr-5">
            strap size
          </label>
          <select
            name="size"
            id=""
            className="bg-slate-300 text-black rounded-xl  px-2 py-2 outline-none text-xs"
          >
            <option value="22cm">22cm</option>
            <option value="22cm">12cm</option>
            <option value="22cm">16cm</option>
          </select>
        </div>

        {/* buckle */}
        <div className="">
          <h3>buckle</h3>
          <p className="text-xs text-slate-500">lourisian alligator leather</p>
        </div>
      </div>
      <div className="text-sky-600 font-semibold text-xl pt-3 pb-2 px-4">
        {price || "price yet to decide"} ₹
      </div>
    </section>
  );
};

export default Cart;
