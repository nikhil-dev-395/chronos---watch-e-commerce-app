import {
  Facebook01Icon,
  Github01Icon,
  InstagramIcon,
  Linkedin01Icon,
  TwitterIcon,
} from "hugeicons-react";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  // const

  const socialMediaUrl = {
    instagram_url: "https://www.instagram.com/nikhil_wankade23/",
    github_url: "https://github.com/nikhil-dev-395",
    linkedin_url: "https://www.linkedin.com/in/nikhil-wankhade-3494b3234/",
    twitter_url: "https://x.com/NikhilW37515390",
  };

  const socialMedia = [
    {
      /*instagram*/
      id: 1,
      url: "https://www.instagram.com/nikhil_wankade23/",
      icon: <InstagramIcon />,
    },
    {
      /*github*/
      id: 2,
      url: "https://github.com/nikhil-dev-395",
      icon: <Github01Icon />,
    },
    {
      /*linkedin*/
      id: 3,
      url: "https://www.linkedin.com/in/nikhil-wankhade-3494b3234/",
      icon: <Linkedin01Icon />,
    },
    {
      /*x - twitter*/
      id: 4,
      url: "https://x.com/NikhilW37515390",
      icon: <FaXTwitter />,
    },
  ];

  return (
    <footer className="w-full h-auto border-t border-slate-600 ">
      <section className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 pt-5 text-blue-100">
        <div id="warranty&services" className="flex flex-col">
          <h2 className="text-[.8rem] font-semibold">WARRANTY & SERVICE</h2>
          <div className="flex flex-col md:pt-6 pt-1 gap-y-2 text-slate-400 text-sm">
            <Link to="/extend-warranty">extend-warranty</Link>
            <Link to="/care-maintain">care-maintain</Link>
          </div>
        </div>
        <div id="company" className="">
          <h2 className="text-[.8rem] font-semibold uppercase">company</h2>
          <div className="flex flex-col md:pt-6 pt-1 gap-y-2 text-slate-400 text-sm">
            <Link to="/our-history">our-history</Link>
            <Link to="/contact">contact</Link>
          </div>
        </div>
        <div id="INFORMATION" className="">
          <h2 className="text-[.8rem] font-semibold uppercase">INFORMATION</h2>
          <div className="flex flex-col md:pt-6 pt-1 gap-y-2 text-slate-400 text-sm">
            <Link to="/right-to-cancel">right-to-cancel</Link>
            <Link to="/term-condition">term-condition</Link>
          </div>
        </div>
        <div id="address" className="">
          <h2 className="text-[.8rem] font-semibold uppercase">chronos</h2>
          <div className="md:pt-6 pt-1 text-slate-400 text-sm">
            <ul>
              <li className="md:pb-5 ">
                chaitanya colony, yashoda nagar, amt, 444606
              </li>
              <li className="md:pb-3 text-blue-500">nikhilw395@gmail.com</li>
              <li className=" text-blue-500">+91 9395480462</li>
            </ul>
          </div>
        </div>
      </section>

      {/* social  media icons of footer */}
      <div className="text-white w-[90%] mx-auto py-6">
        <ul className="flex justify-between">
          <li className="uppercase">&copy; 2024 chronos</li>
          <li className="flex gap-x-3 items-center">
            {/* i just map here those icons and links it making our code clean thats it */}

            {socialMedia.map((social) => (
              <Link key={social.id} to={social.url}>
                {social.icon}
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
