import { Comment01Icon, FavouriteIcon, Share03Icon } from "hugeicons-react";
import { useLocation } from "react-router-dom";

const WatchDetails = () => {
  const { state } = useLocation();
  // const { image, limited, model, name, price } = state;
  return (
    <>
      <section className="w-full h-auto bg-slate-800">
        <div className="bg-[#050811]  w-full h-auto rounded-b-[50px]">
          <div className="grid md:grid-cols-3 max-w-[90%] w-full h-screen mx-auto ">
            <div className="">
              {/* Watch Details */}
              <div className="text-white pt-8 flex flex-col items-start space-y-4">
                <div className="text-sm text-gray-400">CH-6725S-BKGO</div>
                <p className="uppercase text-white font-sans pb-5 md:text-4xl text-2xl font-semibold leading-tight">
                  flying grand regulator skeleton cowboy
                </p>
                <button className="bg-primaryButton hover:bg-yellow-700 px-6 py-2 rounded-2xl uppercase text-black">
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
              <img src="/Images/watch.png" alt="" className="w-32" />
              <img src="/Images/watch.png" alt="" className="w-32" />
              <img src="/Images/watch.png" alt="" className="w-32" />
              <img src="/Images/watch.png" alt="" className="w-32" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WatchDetails;
