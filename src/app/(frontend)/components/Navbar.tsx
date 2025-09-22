"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const menuItems = [
    {
      label: "About",
      href: "/about-faculty",
      hasDropdown: true,
      subItems: [
        { label: "Faculty Profile", type: "item", href: "/about-faculty" },
        { label: "People", type: "item", href: "/people" },
        {
          label: "Faculty Members",
          type: "item",
          indent: true,
          href: "/people/faculty-member",
        },
        {
          label: "Secretariat Team",
          type: "item",
          indent: true,
          href: "/people/secretariat-team",
        },
        {
          label: "PhD Students",
          type: "item",
          indent: true,
          href: "/people/students",
        },
      ],
    },
    {
      label: "Academic Programs",
      href: "/academic-program",
      hasDropdown: true,
      subItems: [
        {
          label: "PhD in Political Science",
          type: "item",
          href: "/academic-program/phd-political-science",
        },
        {
          label: "Master of Arts (MA) in Political Science",
          type: "item",
          href: "/academic-program/ma-political-science",
        },
        {
          label: "Master in Public Policy focusing on Climate Change",
          type: "item",
          href: "/academic-program/master-public-policy",
        },
      ],
    },
    {
      label: "Research & Publications",
      href: "/research-and-publication/compose",
      hasDropdown: true,
      subItems: [
        {
          label:
            "Center of Muslim Politics and World Society Studies (COMPOSE)",
          type: "item",
          href: "/research-and-publication/compose",
        },
        {
          label: "COMPOSE Working Paper",
          type: "item",
          indent: true,
          href: "/research-and-publication/working-paper-compose",
        },
        {
          label:
            "National Survey Varieties of Muslim Religious Practices and Views in Indonesia",
          type: "item",
          href: "/national-survey-varieties-of-muslim-religious-practices-and-views-in-indonesia",
        },
        {
          label: "Students Journal",
          type: "item",
          href: "/research-and-publication/students-journal",
        },
        {
          label: "Lecturers Journal",
          type: "item",
          href: "/research-and-publication/lecturers-journal",
        },
      ],
    },
    {
      label: "Campus Life",
      href: "/CampusLife",
      hasDropdown: true,
      subItems: [
        { label: "Events", type: "item", href: "/CampusLife/Events" },
        {
          label: "Student Activities",
          type: "item",
          href: "/CampusLife/StudentActivities",
        },
        {
          label: "Lecturer Activities",
          type: "item",
          href: "/CampusLife/LecturerActivities",
        },
        {
          label: "Alumni Activities",
          type: "item",
          href: "/CampusLife/AlumniActivities",
        },
      ],
    },
  ];

  return (
    <header className="font-halyard">
      {/* Top Blue Bar */}
      <div className="bg-[#003b5c] text-white text-sm px-[50px] h-[40px] flex items-center justify-between">
        {/* Left Links */}
        <div className="flex gap-6 hover:text-yellow-200">
          <Link
            href="https://library.uiii.ac.id/"
            target="_blank"
            className="hover:text-yellow-200"
          >
            Jusuf Kalla Library
          </Link>
        </div>
        {/* Right Social Icons */}
        <div className="flex items-center gap-6 text-white">
          <a
            href="https://www.instagram.com/fossuiii/"
            target="_blank"
            aria-label="Instagram"
            className="hover:text-yellow-200"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@fossuiii?si=32mqxCr88erFQiuD"
            target="_blank"
            aria-label="YouTube"
            className="hover:text-yellow-200"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.facebook.com/groups/uncode"
            target="_blank"
            aria-label="Facebook"
            className="hover:text-yellow-200"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com/fossuiii?s=11"
            target="_blank"
            aria-label="X"
            className="hover:text-yellow-200"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/school/universitas-islam-internasional-indonesia/posts/?feedView=all"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-yellow-200"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="relative z-50 flex items-center justify-between h-[78px] px-[50px] py-4 bg-white">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image
              src="/logo-uiii-berwarna.svg"
              alt="UIII Logo"
              width={260}
              height={50}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link href={item.href}>
                <button
                  className={`flex items-center text-[16px] space-x-1 transition-colors ${
                    openDropdown === index
                      ? "text-[#848484]"
                      : "hover:text-brandNavy"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown size={16} />}
                </button>
              </Link>

              {/* Dropdown */}
              {openDropdown === index && (
                <ul className="absolute left-0 mt-[0px] w-[260px] bg-white shadow-lg overflow-hidden rounded-md">
                  {item.subItems.map((subItem, subIndex) => {
                    const itemClass = `px-4 py-2 ${
                      subItem.indent ? "pl-[25px]" : "pl-4"
                    }`;
                    return (
                      <li key={subIndex} className={itemClass}>
                        {"href" in subItem && subItem.href ? (
                          <Link
                            href={subItem.href}
                            className="block w-full text-[#B0B0B0] hover:text-brandNavy transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ) : (
                          <span className="block w-full text-[#B0B0B0] hover:text-brandNavy transition-colors cursor-pointer">
                            {subItem.label}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
