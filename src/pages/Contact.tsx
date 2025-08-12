import FeatureCard from "../shared/ui/Card/FeatureCard";

const cardsRow1 = [
  {
    title: "Telegram & WhatsApp",
    description:
      "For quick responses, contact me directly via WhatsApp or Telegram: +989105293253",
    bg: "#FFEBD1",
    height: 169,
  },
  {
    title: "Github",
    description:
      "Discover my work, from experimental ideas to full-scale applications, on GitHub",

    bg: "#F2F7FC",
    height: 169,
    link: "https://github.com/shayanrezvanii",
  },
];

const cardsRow2 = [
  {
    title: "Linkdin",
    description:
      "For professional connections and collaborations, find me on LinkedIn",
    link: "https://www.linkedin.com/in/shayan-rezvani-770490259/",
    bg: "#F2F7FC",
    height: 169,
  },
  {
    title: "Email",
    description:
      "For business inquiries or collaborations, contact me via email: shayanrezvani5@gmail.com",
    bg: "#FFEBD1",
    height: 169,
  },
];

function Contact() {
  return (
    <div className="h-full bg-white dark:bg-gray-800 py-10 lg:px-[73px] flex flex-col justify-between  rounded-[20px] w-full">
      <div className=" flex flex-col gap-10">
        <div className="flex items-center gap-10">
          <h1 className=" text-2xl lg:text-[40px] dark:text-white font-bold ">
            Contact
          </h1>
          <div className="bg-gradient-to-r from-[#FF9C1B] to-[#EC1B09] h-[2px] w-full max-w-[100px] lg:max-w-[252px]"></div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col lg:flex-row gap-7">
              {cardsRow1.map((card, i) => (
                <FeatureCard
                  key={i}
                  title={card.title}
                  description={card.description}
                  icon={<span>{"</>"}</span>}
                  bg={card.bg}
                  height={card.height}
                  worksCard={card.link}
                />
              ))}
            </div>

            <div className="flex flex-col lg:flex-row gap-7">
              {cardsRow2.map((card, i) => (
                <FeatureCard
                  key={i}
                  title={card.title}
                  worksCard={card.link}
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

export default Contact;
