"use client";

import { useEffect, useRef, useState } from "react";
import { useMedia } from "react-use";

import { cn } from "@/lib/utils";

export const RoadSign = ({ className, children }) => {
  const containerRef = useRef(null);
  const [marginBottom, setMarginBottom] = useState(0);

  const isDesktop = useMedia("(min-width: 1024px)", true);

  useEffect(() => {
    if (containerRef.current) {
      const childrenCount = containerRef.current.children.length;
      // Only apply the margin if there is an even number of child elements
      if (childrenCount % 2 !== 0 && isDesktop) {
        const lastChild = containerRef.current.lastElementChild;
        if (lastChild) {
          const height = lastChild.offsetHeight;
          const calculatedMargin = Math.floor(height / 2);
          setMarginBottom(calculatedMargin);
        }
      } else {
        // Reset margin if number of children is odd
        setMarginBottom(0);
      }
    }
  }, [isDesktop]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "lg:container grid grid-cols-1 lg:grid-cols-2 lg:auto-rows-fr justify-between gap-y-4 relative",
        className
      )}
      style={{ marginBottom: `${marginBottom}px` }}
    >
      <span className="absolute w-[1px] h-full bg-yellow-500 lg:bg-blue-500 top-0 left-1 lg:left-1/2"></span>
      {children}
    </div>
  );
};

export const RoadSignLeftArrow = ({ className, children }) => {
  return (
    <div className="w-full relative">
      <span className="max-lg:hidden before:content-[''] before:absolute before:top-0 before:-right-[1px] before:w-[1px] before:h-full before:bg-yellow-500"></span>
      <div className={cn("w-[90%] lg:h-full max-lg:ml-auto", className)}>
        <div className="lg:h-full bg-[#F8F5FA] rounded-xl p-5">{children}</div>

        <div className="absolute top-1/2 max-lg:left-0 lg:right-0 w-[calc(100%-90%)] h-[1px] transform -translate-y-1/2 max-lg:bg-[linear-gradient(to_left,var(--yellow-500)_50%,transparent_50%)] lg:bg-[linear-gradient(to_right,var(--yellow-500)_50%,transparent_50%)] bg-[length:10px_2px,100%_2px]"></div>

        <div className="absolute top-1/2 max-lg:-left-[3px] lg:-right-[8px] transform -translate-y-1/2 z-10">
          <div className="w-[15px] h-[15px] bg-yellow-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export const RoadSignRightArrow = ({ className, children }) => {
  return (
    <div className="w-full relative lg:transform lg:translate-y-1/2">
      <span className="max-lg:hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-[1px] before:h-full before:bg-yellow-500"></span>

      <div className={cn("w-[90%] lg:h-full ml-auto", className)}>
        <div className="lg:h-full bg-yellow-500 text-white rounded-xl p-5">
          {children}
        </div>

        <div className="absolute top-1/2 left-0 w-[calc(100%-90%)] h-[1px] transform -translate-y-1/2 bg-[linear-gradient(to_left,var(--yellow-500)_50%,transparent_50%)] bg-[length:10px_2px,100%_2px]"></div>

        <div className="absolute top-1/2 -left-[3px] lg:-left-[7px] transform -translate-y-1/2 z-10">
          <div className="w-[15px] h-[15px] bg-yellow-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
