import {
  Facebook01Icon,
  Github01Icon,
  InstagramIcon,
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
    facebook_url: "https://www.instagram.com/nikhil_wankade23/",
    twitter_url: "https://x.com/NikhilW37515390",
  };

  return (
    <footer className="w-full h-auto border-t-2 border-slate-200 ">
      <section className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 pt-5 text-blue-100">
        <div id="warranty&services" className="flex flex-col">
          <h2 className="text-[1rem] font-semibold">WARRANTY & SERVICE</h2>
          <div className="flex flex-col md:pt-6 pt-1 gap-y-2 text-orange-300">
            <Link to="/extend-warranty">extend-warranty</Link>
            <Link to="/care-maintain">care-maintain</Link>
          </div>
        </div>
        <div id="company" className="">
          <h2 className="text-[1rem] font-semibold uppercase">company</h2>
          <div className="flex flex-col md:pt-6 pt-1 gap-y-2 text-orange-300">
            <Link to="/our-history">our-history</Link>
            <Link to="/contact">contact</Link>
          </div>
        </div>
        <div id="INFORMATION" className="">
          <h2 className="text-[1rem] font-semibold uppercase">INFORMATION</h2>
          <div className="flex flex-col md:pt-6 pt-1 gap-y-2 text-orange-300">
            <Link to="/right-to-cancel">right-to-cancel</Link>
            <Link to="/term-condition">term-condition</Link>
          </div>
        </div>
        <div id="address" className="">
          <h2 className="text-[1rem] font-semibold uppercase">chronos</h2>
          <div className="md:pt-6 pt-1 text-orange-300">
            <ul>
              <li className="md:pb-5 ">
                chaitanya colony, yashoda nagar, amt, 444606
              </li>
              <li className="font-mono text-blue-500">nikhilw395@gmail.com</li>
              <li className="font-mono text-blue-500">+91 235204793849</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="text-white w-[90%] mx-auto py-6">
        <ul className="flex justify-between">
          <li className="uppercase">&copy; 2024 chronos</li>
          <li className="flex gap-x-3 items-center">
            <Link to={socialMediaUrl.facebook_url}>
              <Facebook01Icon />
            </Link>
            <Link to={socialMediaUrl.twitter_url}>
              <FaXTwitter />
            </Link>

            <Link to={socialMediaUrl.github_url}>
              <Github01Icon />
            </Link>

            <Link to={socialMediaUrl.instagram_url}>
              <InstagramIcon />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
