import React from "react";

interface ContainerType {
  children: React.ReactNode;
}
function Container({ children }: ContainerType) {
  return (
    <main className="w-full font-quicksand px-3 sm:px-5">
      <div className="max-w-[1180px] mx-auto">{children}</div>
    </main>
  );
}

export default Container;
