"use client"
import Image from "next/image"
import React from "react"
import signatureLogo from "../app/assets/subratlogo.png"
import { MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { container, item } from "./animation/animationPattern"

const LeftSection = () => {
  return (
    <div className="md:relative flex flex-col gap-4 md:gap-0  justify-center items-center uppercase md:h-[100vh]">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col  w-[80%] md:w-[60%]"
      >
        <motion.h1
          whileHover={{ y: -5, color: "#E11D48" }}
          whileTap={{ y: -5, color: "#E11D48" }}
          variants={item}
          className="text-[30px] md:text-[44px] leading-[40px] md:leading-[52px] font-normal md:font-medium text-secondary-foreground"
        >
          Hello, I&apos;m
        </motion.h1>
        <motion.h1
          whileHover={{ y: -5, color: "#E11D48" }}
          whileTap={{ y: -5, color: "#E11D48" }}
          variants={item}
          className=" text-[30px] md:text-[44px] leading-[35px] md:leading-[52px] font-normal md:font-medium text-secondary-foreground"
        >
          Subrat Regmi.
        </motion.h1>
        <motion.h3
          variants={item}
          whileHover={{ y: -5, color: "#F2F2F2" }}
          whileTap={{ y: -5, color: "#F2F2F2" }}
          className=" text-[26px] md:text-[32px] leading-[40px] md:leading-[52px] font-normal md:font-medium text-primary"
        >
          QA Automation Engineer
        </motion.h3>
        <motion.p
          variants={item}
          className="normal-case text-justify text-[#777777] text-[12px] md:text-[15px] leading-4 md:leading-6"
        >
          I&apos;m passionate about building high-quality software through test
          automation. With more than two years of experience, I excel at
          creating efficient test scripts to ensure a smooth user experience. I
          leverage my skills in test automation frameworks and scripting
          languages to identify and resolve software defects.
        </motion.p>
        <motion.div variants={item} className="pt-2 md:hidden">
          <Image
            src={signatureLogo}
            alt="Subrat Regmi"
            width={140}
            height={0}
            className=" bg-transparent "
          />
        </motion.div>
        <motion.div variants={item} className="pt-2 hidden md:flex">
          <Image
            src={signatureLogo}
            alt="Subrat Regmi"
            width={250}
            height={0}
            className=" bg-transparent "
          />
        </motion.div>
      </motion.div>
      <div className="flex flex-row justify-start items-center w-[80%] md:w-[60%] md:absolute md:bottom-5 gap-4">
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
  )
}

export default LeftSection
