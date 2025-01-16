import {
  ArrowDown01Icon,
  ArrowDownRight01Icon,
  Search01Icon,
  Search02Icon,
  SquareArrowDown01Icon,
} from "hugeicons-react";
import Watch from "../../components/watch/Watch";
import { watchImagePath } from "../../constants/FileNameConstants";
const WatchPage = () => {
  // Array of watches
  const watches = [
    {
      image:  watchImagePath ,
      limited: 15,
      model: "CH-6725S-BKGO",
      name: "flying grand regulator skeleton cowboy",
      price: 100,
    },
    {
      image:watchImagePath,
      limited: 10,
      model: "CH-4825L-SKWI",
      name: "classic regulator moonphase silver",
      price: 100,
    },
    {
      image:watchImagePath,
      limited: 20,
      model: "CH-9127M-BRBL",
      name: "modern regulator titanium black",
      price: 100,
    },
    {
      image:watchImagePath,
      limited: 5,
      model: "CH-8300F-RGLD",
      name: "luxury grand regulator rose gold",
      price: 100,
    },
    {
      image:watchImagePath,
      limited: 5,
      model: "CH-8300F-RGLD",
      name: "luxury grand regulator rose gold",
      price: 100,
    },
    {
      image:watchImagePath,
      limited: 5,
      model: "CH-8300F-RGLD",
      name: "luxury grand regulator rose gold",
      price: 100,
    },
  ];

  return (
    <section className="">
      {/*
      * filtering section are avail here...
      * add what filtering you want to add here ..

      filtering option :- size , dial , company name
      */}
      <div className="px-3 py-3 flex flex-wrap md:flex-row items-center gap-4 mx-auto w-full max-w-4xl   rounded-lg ">
        {/* Search Input */}
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search for a watch..."
            className="w-full py-2 pl-10 pr-4 text-sm text-white bg-gray-800 border border-gray-700 rounded-full focus:outline-none  focus:border-blue-500 transition-all duration-300"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search01Icon className="h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Filter Dropdown */}
        <div className="relative">
          <select
            name="filter"
            id="filter"
            className="w-full md:w-48 py-2 pl-3 pr-8 text-sm text-gray-200 bg-transparent border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none transition-all duration-300"
          >
            <option
              value=""
              className="text-[10px] md:text-sm text-gray-200 bg-gray-900"
            >
              Filter by <ArrowDownRight01Icon />
            </option>
            <option
              value="size"
              className="text-[10px] md:text-sm  text-gray-200 bg-gray-900"
            >
              Size
            </option>
            <option
              value="dial"
              className="text-[10px] md:text-sm  text-gray-200 bg-gray-900"
            >
              Dial
            </option>
            <option
              value="company"
              className="text-[10px] md:text-sm  text-gray-200 bg-gray-900"
            >
              Company
            </option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ArrowDownRight01Icon className="h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Apply Filters Button */}
        <button className="px-6 py-2 text-sm text-white bg-blue-600/40 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300">
          Apply
        </button>
      </div>
      <div className="w-full flex  flex-wrap py-5 max-w-[85%] gap-9 mx-auto ">
        {watches.map((watch, index) => (
          <Watch
            key={index}
            image={watch.image}
            limited={watch.limited}
            model={watch.model}
            name={watch.name}
            price={watch.price}
          />
        ))}
      </div>
    </section>
  );
};

export default WatchPage;
