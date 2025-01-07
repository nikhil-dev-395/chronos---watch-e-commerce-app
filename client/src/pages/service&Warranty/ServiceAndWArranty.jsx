import { Search01Icon } from "hugeicons-react";

const ServicesCard = ({ heading, innerTextsToShow }) => {
  return (
    <div className="w-full md:w-[48%] lg:w-[31.5%] bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <h3 className="text-xl font-semibold capitalize text-indigo-600 dark:text-indigo-400 mb-3">
        {heading}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {innerTextsToShow}
      </p>
    </div>
  );
};

const ServiceAndWarranty = () => {
  return (
    <div className="w-[90%] mx-auto">
      {/* Header Section */}
      <div className="py-10 w-full rounded-xl mb-10 md:flex items-center justify-between bg-[url('/Images/service.jpg')] bg-cover bg-center md:p-8">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold uppercase  font-sans mb-6">
            Support Services & Warranty
          </h1>
          <p className="md:text-gray-500 text-gray-50  leading-relaxed text-lg md:mb-6 pt-8 md:pr-2 font-semibold ">
            Discover seamless solutions tailored to your needs. From ownership
            transfers to warranty support, we ensure your journey with us is
            effortless and secure.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="mb-10">
        <h1 className="text-2xl md:text-3xl font-semibold capitalize  text-blue-50 text-center md:text-left mb-6">
          Find Your Support Services Status
        </h1>
        <form className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter the serial number of your watch"
            className="w-full md:w-1/2 py-3 px-4 rounded-lg outline-none border border-gray-300 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-400 text-slate-900 dark:text-slate-100 bg-transparent"
            required
            title="Enter the serial number of your watch"
          />
          <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-colors duration-300"
            aria-label="Search"
          >
            <Search01Icon className="w-5 h-5 mr-2" />
          </button>
        </form>
      </div>

      {/* Services Section */}
      <div className="py-12 border-t border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl md:text-3xl font-semibold capitalize text-center text-blue-50  mb-8">
          How Can We Help You?
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          <ServicesCard
            heading="Transfer Ownership"
            innerTextsToShow="Transfer watch and services ownership to people or locations."
          />
          <ServicesCard
            heading="Extend Support Service"
            innerTextsToShow="Manage coverage to minimize repair costs and stay up and running."
          />
          <ServicesCard
            heading="Warranty Support"
            innerTextsToShow="Get assistance with warranty claims and service coverage."
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceAndWarranty;
