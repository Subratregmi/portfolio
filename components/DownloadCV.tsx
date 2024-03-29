"use client"
import React from "react"
import { motion } from "framer-motion"
import { ChevronsDownIcon } from "lucide-react"

const DownloadCV = () => {
  return (
    <motion.div
      whileHover={{ scale: "1.1" }}
      whileTap={{ scale: "0.9" }}
      className="absolute top-[93%] md:top-[90%] left-[32%] md:left-[43%] lg:left-[48.5%] bg-primary hover:bg-transparent border border-transparent hover:border hover:border-primary transition-all ease-out duration-300 p-2 md:p-4 rounded-sm z-10"
    >
      <a
        href="/static/media/CV Subrat Regmi.pdf"
        download
        className="flex items-center justify-center text-sm md:text-lg"
      >
        Download CV
        <ChevronsDownIcon />
      </a>
    </motion.div>
  )
}

export default DownloadCV
