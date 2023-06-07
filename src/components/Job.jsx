import React from "react";
import { BiTimeFive } from "react-icons/bi";
import WeChat from "../assets/wechat.png";
import NewLogo from "../assets/newLogo.png";
import Logo2 from "../assets/Logo2.png";
import Logo3 from "../assets/Logo3.png";
import Logo4 from "../assets/Logo4.png";
import Logo5 from "../assets/Logo5.png";
import Logo6 from "../assets/Logo6.png";
import Logo7 from "../assets/Logo7.png";

const data = [
  {
    id: 1,
    image: WeChat,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quasi asperiores eaque expedita ratione debitis.",
    company: "Novac Linus Co.",
  },
  {
    id: 2,
    image: NewLogo,
    title: "UI/UX Designer",
    time: "14Hr",
    location: "London",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quasi asperiores eaque expedita ratione debitis.",
    company: "Liquid Accessment",
  },
  {
    id: 3,
    image: Logo2,
    title: "Scrum Master",
    time: "1Day",
    location: "Amsterdam",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quasi asperiores eaque expedita ratione debitis.",
    company: "ShareFair.",
  },
  {
    id: 4,
    image: Logo3,
    title: "Tech Team Leader",
    time: "Now",
    location: "Bruxelles",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quasi asperiores eaque expedita ratione debitis.",
    company: "RAP Co.",
  },
  {
    id: 5,
    image: Logo4,
    title: "Software Eng.",
    time: "Now",
    location: "Berlin",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quasi asperiores eaque expedita ratione debitis.",
    company: "NABI Co.",
  },
  {
    id: 6,
    image: Logo5,
    title: "Product Designer",
    time: "Now",
    location: "Berlin",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quasi asperiores eaque expedita ratione debitis.",
    company: "Coop.",
  },
  {
    id: 7,
    image: Logo6,
    title: "Researcher",
    time: "2Day",
    location: "Manchester",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quasi asperiores eaque expedita ratione debitis.",
    company: "AXC.",
  },
  {
    id: 8,
    image: Logo7,
    title: "Tech Team Leader",
    time: "10Hr",
    location: "London",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quasi asperiores eaque expedita ratione debitis.",
    company: "Yoka Co.",
  },
];

const Job = () => {
  return (
    <div>
      <div className="JobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>
              <div className="company flex items-center gap-2">
                <img src={image} alt="Company logo" className="w-[10%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover:text-textColor group-hover:text-white">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Job;
