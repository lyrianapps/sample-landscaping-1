"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Circle() {
  const circleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });
  const backgroundColor = {
    backgroundColor: useTransform(scrollYProgress, [0.85, 1], ["#ccc", "#000"]),
  };
  return (
    <div className="absolute flex h-full w-8 items-start justify-center md:-ml-24 md:w-24 lg:-ml-32 lg:w-32">
      <motion.div
        ref={circleRef}
        style={backgroundColor}
        className="z-20 mt-7 size-4 rounded-full shadow-[0_0_0_8px_#fff] md:mt-8"
      />
    </div>
  );
}
