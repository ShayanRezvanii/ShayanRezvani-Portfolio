import Mobile from "../../../assets/Icons/Mobile.svg?react";
import Email from "../../../assets/Icons/Email.svg?react";
import Location from "../../../assets/Icons/Location.svg?react";
import Linkdin from "../../../assets/Icons/Linkdin.svg?react";
import Github from "../../../assets/Icons/Github.svg?react";
import yan from "../../../assets/ba44b8e6-77a7-4d52-8da4-09fbf8c0f316 (1).png";
import telegram from "../../../assets/Icons/telegram.png";
import whatsapp from "../../../assets/Icons/whatsapp.png";

function SideBar() {
  return (
    <div className=" bg-white dark:bg-gray-800 pt-[120px] relative w-full min-h-[700px] rounded-[20px]">
      <div className=" w-full flex flex-col gap-3 justify-center items-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className=" w-[200px] h-[200px]  bg-yellow-200  rounded-[20px]">
          <img src={yan} className=" rounded-[20px]" />
        </div>
      </div>

      <div className=" w-full px-6 flex flex-col gap-6">
        <div className=" w-full flex flex-col gap-3 h-fit px-6 ">
          <div className=" flex justify-center flex-col items-center">
            <h1 className=" text-3xl font-bold dark:text-white">
              Shayan Rezvani
            </h1>
            <span className=" font-light text-neutral-400">
              FrontEnd Developer
            </span>
          </div>
          <div>
            <div className="w-full h-full flex gap-3">
              <a
                href="https://www.linkedin.com/in/shayan-rezvani-770490259"
                className=" w-full min-h-[60px] rounded-lg flex justify-center items-center bg-[#F2F7FC] dark:bg-gray-700"
              >
                <Linkdin />
              </a>
              <a
                href="https://t.me/+989105293253"
                className=" w-full min-h-[60px] rounded-lg flex justify-center items-center bg-[#F2F7FC] dark:bg-gray-700"
              >
                <img src={telegram} width={30} height={30} />
              </a>
              <a
                href="https://github.com/shayanrezvanii"
                className=" w-full min-h-[60px] rounded-lg flex justify-center items-center bg-[#F2F7FC] dark:bg-gray-700"
              >
                <Github className="w-6 h-6 text-black dark:text-white" />
              </a>
              <a
                href="https://wa.me/989105293253"
                className=" w-full min-h-[60px] rounded-lg flex justify-center items-center bg-[#F2F7FC] dark:bg-gray-700"
              >
                <img src={whatsapp} width={30} height={30} />
              </a>
            </div>
          </div>
        </div>
        <div className=" w-full rounded-lg p-8  flex flex-col gap-3 bg-[#F2F7FC] dark:bg-gray-700 min-h-[350px]">
          <div className=" flex items-center border-b pb-2 border-neutral-300 gap-3">
            <div>
              <Mobile />
            </div>
            <div className=" flex flex-col ">
              <p className=" text-lg text-neutral-400">Phone</p>
              <span className="dark:text-white">+989105293253</span>
            </div>
          </div>

          <div className=" flex items-center border-b pb-2 border-neutral-300 gap-3">
            <div>
              <Email />
            </div>
            <div className=" flex flex-col ">
              <p className=" text-lg text-neutral-400">Email</p>
              <span className="dark:text-white">shayanrezvani5@gmail.com</span>
            </div>
          </div>

          <div className=" flex items-center border-b pb-2 border-neutral-300 gap-3">
            <div>
              <Location />
            </div>
            <div className=" flex flex-col ">
              <p className=" text-lg text-neutral-400">Location</p>
              <span className="dark:text-white">Tehran, Iran</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
