import FeatureCard from "../shared/ui/Card/FeatureCard";
import BagIcon from "../assets/Icons/Bag.svg?react";

const cardsRow1 = [
  {
    title: "Tushehbar Shipping",
    description: "Web Developer",
    bg: "#FFEBD1 ",
    height: 169,
  },
  {
    title: "3Engine.io",
    description: "FrontEnd Developer",
    bg: "#FFEBD1",
    height: 169,
  },
];

// const cardsRow2 = [
//   {
//     title: "Backend Services",
//     description:
//       "APIs with Node.js/NestJS, authentication, real-time sockets, and robust CI/CD pipelines for reliable deployments.",
//     bg: "#F2F7FC",
//     height: 169,
//   },
//   {
//     title: "UI/UX & Performance",
//     description:
//       "Design systems, accessibility, and performance tuning (Core Web Vitals). I love shipping snappy interfaces.",
//     bg: "#FFEBD1",
//     height: 169,
//   },
// ];

function Resume() {
  return (
    <div className="h-full bg-white dark:bg-gray-800 py-10 lg:px-[73px] flex flex-col justify-between  rounded-[20px] w-full">
      <div className=" flex flex-col gap-4">
        <div className="flex items-center gap-10">
          <h1 className=" text-2xl lg:text-[40px] font-bold   dark:text-white">
            Resume
          </h1>
          <div className="bg-gradient-to-r from-[#FF9C1B] to-[#EC1B09] h-[2px] w-full max-w-[100px] lg:max-w-[252px]"></div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-10">
              <div className=" flex gap-3">
                <BagIcon />
                <h1 className="font-bold  text-lg lg:text-2xl dark:text-white">
                  Experience
                </h1>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-7">
              {cardsRow1.map((card, i) => (
                <FeatureCard
                  key={i}
                  title={card.title}
                  description={card.description}
                  icon={<span>{"</>"}</span>}
                  bg={card.bg}
                  height={card.height}
                />
              ))}
            </div>

            <div className=" flex flex-col lg:flex-row justify-center items-start  lg:justify-start gap-10 lg:gap-32">
              <div className=" flex flex-col gap-3">
                <div className=" flex flex-col gap-3 ">
                  <h1 className="text-2xl dark:text-white font-bold ">
                    Work Skills
                  </h1>
                </div>

                <div className=" flex flex-wrap max-w-[300px] gap-3 ">
                  <div className="bg-[#F2F7FC] rounded-lg w-fit px-3 py-2">
                    React.JS
                  </div>
                  <div className="bg-[#F2F7FC] rounded-lg w-fit px-3 py-2">
                    Next.JS
                  </div>
                  <div className="bg-[#F2F7FC] rounded-lg w-fit px-3 py-2">
                    Node.JS
                  </div>
                  <div className="bg-[#F2F7FC] rounded-lg w-fit px-3 py-2">
                    Express.JS
                  </div>
                  <div className="bg-[#F2F7FC] rounded-lg w-fit px-3 py-2">
                    Tailwind
                  </div>
                  <div className="bg-[#F2F7FC] rounded-lg w-fit px-3 py-2">
                    TypeScript
                  </div>
                  <div className="bg-[#F2F7FC] rounded-lg w-fit px-3 py-2">
                    Socket.io
                  </div>
                  <div className="bg-[#F2F7FC] rounded-lg w-fit px-3 py-2">
                    MongoDB
                  </div>
                </div>
              </div>

              <div className=" flex flex-col gap-3">
                <div className=" flex flex-col gap-3 ">
                  <h1 className="text-2xl dark:text-white font-bold ">
                    Soft Skills
                  </h1>
                </div>

                <div className=" flex flex-wrap max-w-[300px] gap-3 ">
                  <div className="bg-[#F2F7FC] rounded-lg w-fit px-3 py-2">
                    Time Management
                  </div>
                  <div className="bg-[#F2F7FC] rounded-lg w-fit px-3 py-2">
                    Flexibility
                  </div>
                  <div className="bg-[#F2F7FC] rounded-lg w-fit px-3 py-2">
                    Research
                  </div>
                  <div className="bg-[#F2F7FC] rounded-lg w-fit px-3 py-2">
                    Writing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
