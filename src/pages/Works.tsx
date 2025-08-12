import FeatureCard from "../shared/ui/Card/FeatureCard";

const cardsRow1 = [
  {
    title: "3engine.io",
    description:
      "Developed responsive frontend components and interactive UI features using React and Next.js for a 3D engine platform.",
    bg: "#FFEBD1",
    height: 169,
    link: "https://3engine.io",
  },
  {
    title: "Funicket.ir",
    description:
      "Implemented frontend architecture and optimized user flows for an online ticketing platform using React and Next.js.",
    bg: "#F2F7FC",
    link: "https://funicket.ir",
    height: 169,
  },
];
const cardsRow2 = [
  {
    title: "Tamnama Menu",
    description:
      "Developed a full-stack restaurant menu app with an admin panel, using React for the frontend and Node.js + Express for the backend, supporting real-time updates.",
    bg: "#F2F7FC",
    link: "https://tamnama.nsjsoft.ir/t-cafe",
    height: 169,
  },
  {
    title: "Tushehbar Shipping App",
    description:
      "Frontend development for a shipping management app to handle client requests and track cargo operations efficiently.",
    link: "https://app.tushehbar.com",
    bg: "#FFEBD1",
    height: 169,
  },
  {
    title: "WordPress",
    description:
      "Developed multi-language e-commerce and corporate WordPress websites, optimized for performance and usability.",
    bg: "#FFEBD1",
    link: "https://tushehbar.com",
    height: 169,
  },
];

function Works() {
  return (
    <div className="h-full bg-white dark:bg-gray-800 py-10  lg:px-[73px] flex flex-col justify-between  rounded-[20px] w-full">
      <div className=" gap-6 flex flex-col">
        <div className="flex items-center gap-10">
          <h1 className="text-2xl lg:text-[40px] dark:text-white font-bold ">
            Works
          </h1>
          <div className="bg-gradient-to-r from-[#FF9C1B] to-[#EC1B09] h-[2px] w-full max-w-[100px] lg:max-w-[252px]"></div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col lg:flex-row gap-7">
              {cardsRow1.map((card, i) => (
                <FeatureCard
                  key={i}
                  worksCard
                  title={card.title}
                  description={card.description}
                  icon={<span>{"</>"}</span>}
                  bg={card.bg}
                  link={card.link}
                  height={card.height}
                />
              ))}
            </div>

            <div className="flex flex-col lg:flex-row gap-7">
              {cardsRow2.map((card, i) => (
                <FeatureCard
                  key={i}
                  worksCard
                  title={card.title}
                  description={card.description}
                  icon={<span>{"</>"}</span>}
                  bg={card.bg}
                  height={card.height}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
