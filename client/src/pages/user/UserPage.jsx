import React from "react";
import Assured from "../../components/assured/Assured";
import {
  Call02Icon,
  FavouriteIcon,
  Mail01Icon,
  Share03Icon,
} from "hugeicons-react";

const UserPage = () => {
  const mobileNumber = 9359480462;
  const MyEmail = "nikhilw395@gmail.com";

  // Statistics
  const stats = [
    { label: "Sells", value: "10k" },
    { label: "Purchased", value: "10k" },
    { label: "Deliveries", value: "10k" },
    { label: "Successful", value: "10k" },
    { label: "Unsuccessful", value: "10k" },
  ];

  // Social Media Icons
  const socialIcons = [
    { key: "share", Icon: Share03Icon, label: "Share" },
    { key: "favourite", Icon: FavouriteIcon, label: "Favourite" },
    {
      key: "email",
      Icon: Mail01Icon,
      label: "Email",
      anchor: `mailto:${MyEmail}`,
    },
    {
      key: "call",
      Icon: Call02Icon,
      label: "Call",
      anchor: `tel:${mobileNumber}`,
    },
  ];

  return (
    <section className="w-full min-h-screen  text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-14 w-full max-w-[85%] mx-auto">
        {/* Left Section - Information */}
        <article>
          <h1 className="text-[3.5rem] uppercase font-bold font-mono  text-white">
            Nikhil
          </h1>
          <p className="text-2xl uppercase font-semibold">Wankhade</p>

          <h4 className="text-lg font-medium mt-4">Wankhade Watch Center</h4>
          <p className="text-gray-300 mt-1">
            Chaitanya Colony, Yashoda Nagar, Amravati, 44004
          </p>
          <small className="text-orange-400 capitalize font-serif block mt-2">
            Seller
          </small>

          {/* Assured Tag */}
          <Assured to="/user" />

          {/* Introduction */}
          <p className="pt-8 text-sm leading-relaxed text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            cumque saepe consequatur fuga quibusdam amet expedita explicabo
            quasi tempora laborum blanditiis officia fugiat non totam, porro
            eaque similique dolore perspiciatis?
          </p>
        </article>

        {/* Right Section - Profile & Social Media */}
        <aside className="flex flex-col items-center md:ml-20 gap-10">
          {/* Profile Image */}
          <div className="relative w-[90%] md:w-2/3 h-[300px] rounded-[30px] overflow-hidden shadow-lg">
            <img
              src="/Images/profile.jpg"
              alt="User Profile"
              className="w-full  "
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
          </div>

          {/* Social Icons */}
          <div className="flex  gap-6 pb-10">
            {socialIcons.map(({ key, Icon, label, anchor }) =>
              anchor ? (
                <a
                  key={key}
                  href={anchor}
                  className="hover:scale-110 transition-transform  p-3 rounded-full shadow-lg"
                  aria-label={label}
                >
                  <Icon className="text-white hover:text-purple-400 text-2xl" />
                </a>
              ) : (
                <button
                  key={key}
                  className="hover:scale-110 transition-transform  p-3 rounded-full "
                  aria-label={label}
                >
                  <Icon className="text-white hover:text-purple-400 text-2xl" />
                </button>
              )
            )}
          </div>
        </aside>
        {/* Statistics */}
        <div className="pb-10">
          <ul className="flex flex-wrap md:flex-nowrap gap-6">
            {stats.map((stat, index) => (
              <li
                key={index}
                className="text-center flex flex-col items-center  px-6 py-4 rounded-lg  hover: transition-transform border border-slate-700"
              >
                <span className="text-lg font-bold text-white">
                  {stat.label}
                </span>
                <small className="text-purple-400 text-xl font-semibold">
                  {stat.value}
                </small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
