import {
  Call02Icon,
  FavouriteIcon,
  InformationSquareIcon,
  InstagramIcon,
  Linkedin01Icon,
  ListViewIcon,
  Location01Icon,
  Mail01Icon,
  NewJobIcon,
  NewTwitterIcon,
  NewTwitterRectangleIcon,
  Remove01Icon,
  Share03Icon,
  ShoppingBasketAdd02Icon,
  StarIcon,
  WorkHistoryIcon,
} from "hugeicons-react";
import React from "react";

const UserPage = () => {
  const mobileNumber = 9359480462;
  const MyEmail = "nikhilw395@gmail.com";

  // Social Media Icons
  const socialIcons = [
    { key: "Instagram", Icon: InstagramIcon, label: "Instagram" },
    { key: "Linkedin", Icon: Linkedin01Icon, label: "Linkedin" },
    {
      key: "NewTwitterIcon",
      Icon: NewTwitterRectangleIcon,
      label: "NewTwitterIcon",
    },
    {
      key: "call",
      Icon: Call02Icon,
      label: "Call",
      anchor: `tel:${mobileNumber}`,
    },
  ];

  // Dummy Data for Orders and Wishlist
  const orders = [
    {
      id: 1,
      productName: "Classic Leather Watch",
      date: "2023-10-01",
      status: "Delivered",
    },
    {
      id: 2,
      productName: "Sport Smartwatch",
      date: "2023-09-25",
      status: "Pending",
    },
  ];

  const wishlist = [
    { id: 1, name: "Luxury Gold Watch", image: "/Images/watch.png" },
    { id: 2, name: "Minimalist Silver Watch", image: "/Images/watch.png" },
  ];

  // Dummy Data for Saved Addresses
  const savedAddresses = [
    { id: 1, type: "Home", address: "123 Main St, City, Country" },
    { id: 2, type: "Office", address: "456 Business Rd, City, Country" },
  ];

  return (
    <section className="w-full h-full  ">
      <div className="max-w-[90%] md:max-w-[80%] h-auto mx-auto py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Profile Image */}
          <div className="mb-6 md:mb-0">
            <div className="rounded-full">
              <img
                src="/Images/profile.jpg"
                alt="Profile"
                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover"
              />
            </div>
          </div>

          {/* User Details */}
          <div className="flex-1 md:ml-32 w-full ">
            <h2 className="text-2xl md:text-3xl font-semibold font-sans capitalize text-center md:text-left">
              nikhil wankhade
              <span className="text-xs text-slate-500 pl-2">m</span>
            </h2>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center pt-5">
              {socialIcons.map(({ key, Icon, label, anchor }) =>
                anchor ? (
                  <a
                    key={key}
                    href={anchor}
                    className="px-2 border-2 inline-block py-2 rounded-full"
                    aria-label={label}
                  >
                    <Icon className="text-white text-2xl hover:text-slate-600" />
                  </a>
                ) : (
                  <button
                    key={key}
                    className="px-2 border-2 inline-block py-2 rounded-full"
                    aria-label={label}
                  >
                    <Icon className="text-white text-2xl hover:text-slate-600" />
                  </button>
                )
              )}

              <div className="flex gap-4 mt-4 md:mt-0">
                <button className="py-2 px-4 md:px-6 rounded-3xl bg-black text-white border flex items-center gap-x-2">
                  <span className="text-lg md:text-xl capitalize">Message</span>
                  <Mail01Icon width={20} />
                </button>
                <button className="py-2 px-4 md:px-6 rounded-3xl text-black bg-white border-2 border-slate-950">
                  Edit
                </button>
              </div>
            </div>

            {/* Skills and Roles */}
            <div className="pt-6 md:pt-9 flex flex-row justify-center md:justify-stretch md:flex-row gap-4 md:gap-x-10 text-center md:text-left">
              <div className="capitalize">
                <h4 className="text-lg text-slate-400">Role</h4>
                <span className="text-2xl font-semibold">User</span>
              </div>
              <div className="capitalize">
                <h4 className="text-lg text-slate-400">Experience</h4>
                <span className="text-2xl font-semibold">10 years</span>
              </div>
            </div>

            {/* Stats Section */}
            <div className="pt-6">
              <ul className="flex flex-wrap gap-4 justify-center md:justify-start">
                <li className="py-2 px-3 bg-slate-200 rounded-2xl inline-block text-lg">
                  <div className="flex items-center gap-x-2 text-black font-semibold">
                    <StarIcon width={18} />
                    <span>Unsuccessful</span>
                    <span className="text-slate-600">3</span>
                  </div>
                </li>
                <li className="py-2 px-3 bg-slate-200 rounded-2xl inline-block text-lg">
                  <div className="flex items-center gap-x-2 text-black font-semibold">
                    <StarIcon width={18} />
                    <span>Successful</span>
                    <span className="text-slate-600">7</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Order History Section */}
        <div className="pt-9 md:10">
          <h3 className="text-2xl font-semibold mb-4 text-center md:text-left   flex gap-x-3 items-center text-blue-50">
            Order History
            <WorkHistoryIcon />
          </h3>
          <ul className="space-y-4">
            {orders.map((order) => (
              <li key={order.id} className="p-6 ">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  {/* Order Number */}
                  <span className="text-indigo-100 text-lg font-bold   py-2 rounded-full">
                    {order.id}
                  </span>

                  {/* Product Name and Date */}
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-white">
                      {order.productName}
                    </h3>
                    <p className="text-slate-400 mt-1">{order.date}</p>
                  </div>

                  {/* Status with Dynamic Color */}
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      order.status === "Delivered"
                        ? "bg-yellow-500/10 text-yellow-500"
                        : "bg-green-500/10 text-green-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Wishlist Section */}
        <div className="md:pt-6 pt-10">
          <h3 className="text-2xl font-semibold mb-4 text-center md:text-left text-blue-50 flex items-center gap-x-3">
            Wishlist
            <ListViewIcon width={18} />
          </h3>
          <ul className="flex flex-wrap gap-6">
            {wishlist.map((item) => (
              <li
                key={item.id}
                className="p-6 bg-gray-950 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 mx-auto md:mx-0"
              >
                {/* Product Image */}
                <div className="relative w-full h-48 overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Name */}
                <div className="mt-4 text-lg font-semibold text-gray-100 text-center">
                  {item.name}
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex justify-center gap-3">
                  <button className="px-4 py-2 bg-blue-500/10 text-blue-200  rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-block">
                    <ShoppingBasketAdd02Icon />
                  </button>
                  <button className="px-4 py-2 bg-red-500/50 text-red-100 rounded-lg hover:bg-red-700 transition-colors duration-200">
                    <Remove01Icon />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Saved Addresses Section */}
        <div className="md:pt-6 pt-10">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-x-3 text-blue-50 md:justify-start">
            Saved Addresses <Location01Icon />
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedAddresses.map((address) => (
              <li
                key={address.id}
                className="p-6 bg-gray-950  text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 "
              >
                <div className="flex items-center gap-x-3 mb-4">
                  <div className="p-2 bg-blue-50 rounded-full">
                    <Location01Icon className="w-6 h-6 text-slate-800" />
                  </div>
                  <div className="text-lg font-semibold text-gray-100">
                    {address.type}
                  </div>
                </div>
                <div className="text-slate-300 text-sm leading-relaxed">
                  {address.address}
                </div>
                <div className="mt-4 flex gap-3">
                  <button className="text-sm text-blue-200 hover:text-blue-600 transition-colors duration-200">
                    Edit
                  </button>
                  <button className="text-sm text-red-300 hover:text-red-600 transition-colors duration-200">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
