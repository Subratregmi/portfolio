"use client"
import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "./ui/use-toast"

const Navbar = () => {
  return (
    <div className="shadow-custom border-r-2 border-border flex flex-row h-20  lg:h-screen lg:flex-col justify-between items-center items py-6 px-6 lg:px-0">
      <Avatar className="h-12 w-12">
        <AvatarImage
          src="https://i.pinimg.com/564x/97/bb/06/97bb067e30ff6b89f4fbb7b9141025ca.jpg"
          className="center"
        />
        <AvatarFallback>RP</AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "flex flex-col w-[250px] uppercase justify-center items-start md:items-center  origin-center lg:-rotate-90 "
        )}
      >
        <h2 className="text-sm tracking-[3px] font-medium">Subrat Regmi</h2>
        <p className="text-xs text-[#777] tracking-widest">
          QA Automation Engineer
        </p>
      </div>
      <div
        className="cursor-pointer hidden md:block"
        onClick={() => {
          toast({
            title: "Coming Soooooooooooooooooooooooon !!!!!",
            duration: 1000,
          })
        }}
      >
        <Menu className="text-primary" size={30} />
      </div>
    </div>
  )
}

export default Navbar
