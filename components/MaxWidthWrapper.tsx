import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("w-full h-screen overflow-hidden", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
