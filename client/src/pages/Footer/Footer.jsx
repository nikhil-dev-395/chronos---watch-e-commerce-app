import { Github01Icon, InstagramIcon, Linkedin01Icon } from "hugeicons-react";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialMedia = [
    {
      id: 1,
      url: "https://www.instagram.com/nikhil_wankade23/",
      icon: <InstagramIcon />,
      label: "Instagram",
    },
    {
      id: 2,
      url: "https://github.com/nikhil-dev-395",
      icon: <Github01Icon />,
      label: "GitHub",
    },
    {
      id: 3,
      url: "https://www.linkedin.com/in/nikhil-wankhade-3494b3234/",
      icon: <Linkedin01Icon />,
      label: "LinkedIn",
    },
    {
      id: 4,
      url: "https://x.com/NikhilW37515390",
      icon: <FaXTwitter />,
      label: "Twitter",
    },
  ];

  const sections = [
    {
      id: "warranty-services",
      title: "WARRANTY & SERVICE",
      links: [
        { to: "/extend-warranty", text: "Extend Warranty" },
        { to: "/care-maintain", text: "Care & Maintain" },
      ],
    },
    {
      id: "company",
      title: "COMPANY",
      links: [
        { to: "/our-history", text: "Our History" },
        { to: "/contact", text: "Contact" },
      ],
    },
    {
      id: "information",
      title: "INFORMATION",
      links: [
        { to: "/right-to-cancel", text: "Right to Cancel" },
        { to: "/term-condition", text: "Terms & Conditions" },
      ],
    },
    {
      id: "address",
      title: "CHRONOS",
      details: [
        {
          type: "address",
          text: "Chaitanya Colony, Yashoda Nagar, Amt, 444606",
        },
        { type: "email", text: "nikhilw395@gmail.com", link: true },
        { type: "phone", text: "+91 9395480462", link: true },
      ],
    },
  ];

  return (
    <footer className="w-full h-auto border-t border-slate-600">
      <section className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 pt-5 text-blue-100">
        {sections.map(({ id, title, details, links }) => (
          <div key={id} id={id}>
            <h2 className="text-[1.1rem] font-semibold uppercase">{title}</h2>
            <div className="flex flex-col md:pt-6 pt-1 gap-y-2 text-slate-400 text-sm">
              {links
                ? links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="hover:text-yellow-500"
                    >
                      {link.text}
                    </Link>
                  ))
                : details && (
                    <ul>
                      {details.map((detail, index) => (
                        <li
                          key={index}
                          className={detail.link ? "text-blue-500" : ""}
                        >
                          {detail.link ? (
                            <a
                              href={
                                detail.type === "email"
                                  ? `mailto:${detail.text}`
                                  : `tel:${detail.text}`
                              }
                            >
                              {detail.text}
                            </a>
                          ) : (
                            detail.text
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
            </div>
          </div>
        ))}
      </section>

      <div className="text-white w-[90%] mx-auto py-6">
        <ul className="flex justify-between">
          <li className="uppercase">&copy; 2024 Chronos</li>
          <li className="flex gap-x-3 items-center">
            {socialMedia.map(({ id, url, icon, label }) => (
              <a
                key={id}
                href={url}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            ))}
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
