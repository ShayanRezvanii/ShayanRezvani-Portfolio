import React from "react";

interface ContainerType {
  children: React.ReactNode;
}
function Container({ children }: ContainerType) {
  return (
    <div className="w-full min-h-screen font-quicksand lg:h-screen bg-[#F2F5F9] dark:bg-gray-900 sm:overflow-x-hidden  max-w-[1440px] py-4 mx-auto">
      {children}
    </div>
  );
}

export default Container;
