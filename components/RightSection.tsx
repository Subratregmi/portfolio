"use client"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { container, item } from "./animation/animationPattern"

interface UnsplashPhoto {
  urls: {
    full?: string
  }
  alt_description?: string
}

const socialLinks = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/subrat-regmi-526536263/",
    Icon: <Linkedin />,
  },
  {
    id: 0,
    link: "https://www.facebook.com/subrat.regmi.3/",
    Icon: <Facebook />,
  },
  {
    id: 2,
    link: "https://www.instagram.com/subrat_regmi/",
    Icon: <Instagram />,
  },
]

const RightSection = () => {
  const [random, setRandom] = useState<UnsplashPhoto | undefined>()

  return (
    <div className="flex relative md:h-[100vh] justify-center">
      <Image
        src={"/static/media/profile1.png"}
        alt="profile"
        width={950}
        height={0}
        loading="eager"
        style={{
          objectFit: "cover",
          objectPosition: "top", // Adjust the object position as needed
          aspectRatio: 1 / 1,
          maxWidth: "100%", // Ensures the image doesn't overflow its container
        }}
      />

      <div className="absolute bottom-5 right-5">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-row gap-2"
        >
          {socialLinks?.map(({ id, link, Icon }) => (
            <motion.div
              variants={item}
              key={id}
              whileHover={{ y: -5 }}
              className=" bg-primary border border-transparent hover:border  hover:border-white hover:bg-transparent transition-all ease-out duration  p-5 w-10 h-10 text-center text-white flex justify-center items-center rounded-sm"
            >
              <Link href={link} target="_blank">
                {Icon}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default RightSection
