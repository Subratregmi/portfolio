"use client";
import Image from "next/image";
import React from "react";
import signatureLogo from "../app/assets/logo.png";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { container, item } from "./animation/animationPattern";

const LeftSection = () => {
  return (
    <div className="relative flex flex-col justify-center items-center uppercase md:h-[100vh]">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col  w-[80%] md:w-[60%]"
      >
        <motion.h1
          whileHover={{ y: -5, color: "#E11D48" }}
          variants={item}
          className="text-[30px] md:text-[44px] leading-[40px] md:leading-[52px] font-normal md:font-medium"
        >
          Hello, I&apos;m
        </motion.h1>
        <motion.h1
          whileHover={{ y: -5, color: "#E11D48" }}
          variants={item}
          className=" text-[30px] md:text-[44px] leading-[35px] md:leading-[52px] font-normal md:font-medium"
        >
          Roshan Pradhan.
        </motion.h1>
        <motion.h3
          variants={item}
          whileHover={{ y: -5, color: "#F2F2F2" }}
          className=" text-[26px] md:text-[32px] leading-[40px] md:leading-[52px] font-normal md:font-medium text-primary"
        >
          React Developer
        </motion.h3>
        <motion.p
          variants={item}
          className="normal-case text-justify text-[#777777] text-[15px] leading-5 md:leading-6"
        >
          Don&apos;t be afraid to give up the good to go for the great. This
          philosophy drives my commitment to continuous improvement and pushing
          the boundaries of what&apos;s possible in the realm of React
          development. I believe in delivering not just functional solutions,
          but experiences that leave a lasting impression.
        </motion.p>
        <motion.div variants={item}>
          <Image
            src={signatureLogo}
            alt="Roshan Pradhan"
            className=" bg-transparent py-3 w-[70%]"
          />
        </motion.div>
      </motion.div>
      <div className="flex flex-row justify-start items-center w-[80%] md:w-[60%] absolute bottom-5 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, type: "tween" }}
        >
          <MapPin />
        </motion.div>
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={item}
            className="normal-case text-justify text-[#777777] text-[12px] leading-4"
          >
            Currently in
          </motion.p>
          <motion.h5 variants={item} className="normal-case text-sm">
            Kathmandu, Nepal
          </motion.h5>
        </motion.div>
      </div>
    </div>
  );
};

export default LeftSection;
