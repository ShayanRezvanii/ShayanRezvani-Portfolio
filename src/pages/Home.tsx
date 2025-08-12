import React from "react";
import FeatureCard from "../shared/ui/Card/FeatureCard";

const cardsRow1 = [
  {
    title: "Web Development",
    description:
      "Specializing in building modern, high-performance web applications with Next.js. Experienced in creating scalable architectures, integrating APIs, and delivering responsive, user-friendly experiences that meet both business and user needs.",
    bg: "#FFEBD1 ",
    height: 169,
  },
  {
    title: "Mobile Apps",
    description:
      "Developing cross-platform mobile applications using React Native and Expo. Focused on clean architecture, offline-first capabilities, and smooth, native-like animations for seamless user experiences.",
    bg: "#F2F7FC",
    height: 169,
  },
];

const cardsRow2 = [
  {
    title: "Backend Services",
    description:
      "Designing and implementing secure, high-availability backend systems with Node.js and NestJS. Skilled in API development, authentication, real-time WebSocket communication, and setting up robust CI/CD pipelines for efficient deployments.",
    bg: "#F2F7FC",
    height: 169,
  },
  {
    title: "UI/UX & Performance",
    description:
      "Creating intuitive design systems with a strong emphasis on accessibility and performance optimization. Experienced in Core Web Vitals tuning and delivering polished, snappy interfaces that delight users.",
    bg: "#FFEBD1",
    height: 169,
  },
];

function Home() {
  return (
    <div className="h-full bg-white dark:bg-gray-800 py-10 lg:px-[73px] flex flex-col gap-6 lg:gap-4 justify-between  rounded-[20px] w-full">
      <div className=" flex flex-col gap-3">
        <div className="flex items-center gap-10">
          <h1 className=" font-quicksand font-bold text-2xl lg:text-[40px]  dark:text-white">
            About me
          </h1>
          <div className="bg-gradient-to-r from-[#FF9C1B] to-[#EC1B09] h-[2px] w-full max-w-[100px] lg:max-w-[252px]"></div>
        </div>
        <p className="font-light dark:text-white">
          I’m a frontend developer skilled in Next.js and React, with experience
          in React Native. I’m also familiar with backend development and have
          built full-stack projects.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-bold  lg:text-[40px] dark:text-white">
            What I do!
          </h1>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row gap-7">
            {cardsRow1.map((card, i) => (
              <FeatureCard
                key={i}
                title={card.title}
                description={card.description}
                icon={<span>{"</>"}</span>}
                height={card.height}
                darkBgClass="dark:bg-gray-700"
              />
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-7">
            {cardsRow2.map((card, i) => (
              <FeatureCard
                key={i}
                title={card.title}
                description={card.description}
                icon={<span>{"</>"}</span>}
                bg={card.bg}
                darkBgClass="dark:bg-gray-700"
                height={card.height}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
