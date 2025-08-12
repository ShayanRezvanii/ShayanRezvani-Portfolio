import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import TabNav from "../shared/components/layout/TabNav";
import SideBar from "../shared/components/layout/SideBar";
import { useEffect, useRef, useState } from "react";

export default function Main() {
  const location = useLocation();
  const outletTopRef = useRef<HTMLDivElement>(null);
  const [tabClicked, setTabClicked] = useState(false);

  useEffect(() => {
    if (!tabClicked) return; // فقط وقتی تب کلیک شده
    const el = outletTopRef.current;
    if (!el) return;
    const HEADER_OFFSET = 0;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
    setTabClicked(false); // برای هر کلیک فقط یک بار
  }, [location.pathname, tabClicked]);

  return (
    <div className="w-full lg:min-h-[800px] flex flex-col items-center lg:items-start lg:flex-row gap-5 pb-13">
      {/* سایدبار */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="min-h-full w-full px-6 lg:px-0 lg:max-w-[400px] rounded-[20px]"
      >
        <div className="h-25 w-full flex justify-end items-end"></div>
        <SideBar />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        className="w-full min-h-full flex flex-col gap-2 px-6 lg:px-0"
      >
        {/* اینجا prop رو پاس بده */}
        <TabNav onClicked={() => setTabClicked(true)} />
        <div ref={outletTopRef} />

        <div className="flex-1 bg-white dark:bg-gray-800 min-h-[688px] lg:max-h-[688px] rounded-[20px] p-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="h-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
