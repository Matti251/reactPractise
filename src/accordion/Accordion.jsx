import React, { useState } from "react";

const Accordion = () => {
  const accordionData = [
    {
      title: "Sec 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Sec 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Sec 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alisa. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Sec 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const [activeIndex, setActiveIndex] =
    useState(null);
  console.log("index");
  return (
    <>
      <h1 className="text-4xl font-bold text-center">
        Accordion
      </h1>
      {accordionData.map((item, index) => (
        <div
          className="bg-slate-500 w-1/2 rounded-sm mx-auto"
          key={index}>
          <div className="">
            <div
              className="flex justify-between bg-slate-700 px-6"
              onClick={() =>
                setActiveIndex(index)
              }>
              <div className="text-2xl text-white">
                {item.title}
              </div>
              <div className="text-2xl cursor-pointer text-white">
                {activeIndex === index
                  ? "-"
                  : "+"}
              </div>
            </div>
            {
              activeIndex ===
                index&&(
                  <div className="text-lg font-medium px-5 ">
                    {item.content}
                  </div>
                )}
          </div>
        </div>
      ))}
    </>
  );


};

export default Accordion;
