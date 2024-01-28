import DownloadCV from "@/components/DownloadCV";
import LeftSection from "@/components/LeftSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ModeToggle } from "@/components/ModeToggle";
import Navbar from "@/components/Navbar";
import RightSection from "@/components/RightSection";

export default function Home() {
  return (
    <MaxWidthWrapper className="grid grid-rows-[80px,1fr] lg:grid-cols-[80px,1fr] h-screen">
      <Navbar />
      <div className="grid grid-rows-[50%] md:grid-cols-[50%,50%] h-screen">
        <LeftSection />
        <RightSection />
        <DownloadCV />
        <div className="absolute top-5 right-5 focus:outline-0 focus-visible:outline-0">
          <ModeToggle />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
