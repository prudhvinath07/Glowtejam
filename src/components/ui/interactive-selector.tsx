import React, { useState, useEffect } from "react";
import {
  FaCampground,
  FaFire,
  FaTint,
  FaHotTub,
  FaHiking,
} from "react-icons/fa";
import { cn } from "@/lib/utils";

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  const options = [
    {
      title: "Image 1",
      description: "Description for Image 1",
      image:
        "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img1.webp",
      icon: <FaCampground size={24} className="text-white dark:text-gray-100" />,
    },
    {
      title: "Image 2",
      description: "Description for Image 2",
      image:
        "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img2.webp",
      icon: <FaFire size={24} className="text-white dark:text-gray-100" />,
    },
    {
      title: "Image 3",
      description: "Description for Image 3",
      image:
        "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img3.webp",
      icon: <FaTint size={24} className="text-white dark:text-gray-100" />,
    },
    {
      title: "Image 4",
      description: "Description for Image 4",
      image:
        "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img4.webp",
      icon: <FaHotTub size={24} className="text-white dark:text-gray-100" />,
    },
    {
      title: "Image 5",
      description: "Description for Image 5",
      image:
        "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img5.webp",
      icon: <FaHiking size={24} className="text-white dark:text-gray-100" />,
    },
  ];

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions((prev) => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-background font-sans">
      {/* Header Section */}
      <div className="w-full max-w-2xl px-4 sm:px-6 mt-8 mb-2 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-3 tracking-tight drop-shadow-lg">
          Escape in Style
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium max-w-xl mx-auto">
          Discover luxurious camping experiences in nature's most breathtaking
          spots.
        </p>
      </div>

      <div className="h-6 sm:h-12"></div>

      {/* Options Container */}
      <div className="options flex w-full max-w-[900px] min-w-0 h-[300px] sm:h-[350px] md:h-[400px] mx-4 sm:mx-0 items-stretch overflow-hidden relative rounded-lg">
        {options.map((option, index) => (
          <div
            key={index}
            className={cn(
              "option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out cursor-pointer",
              "border-2 border-solid bg-card",
              activeIndex === index 
                ? "border-primary shadow-2xl z-10" 
                : "border-border shadow-lg z-[1]",
              activeIndex === index ? "flex-[7_1_0%]" : "flex-[1_1_0%]",
              index === 0 && "rounded-l-lg",
              index === options.length - 1 && "rounded-r-lg"
            )}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: activeIndex === index ? "auto 100%" : "auto 120%",
              backgroundPosition: "center",
              backfaceVisibility: "hidden",
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index)
                ? "translateX(0)"
                : "translateX(-60px)",
              minWidth: "40px",
              minHeight: "100px",
              willChange:
                "flex-grow, box-shadow, background-size, background-position",
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow effect */}
            <div
              className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? "0" : "-40px",
                height: "120px",
                boxShadow:
                  activeIndex === index
                    ? "inset 0 -120px 120px -120px rgba(0,0,0,0.7), inset 0 -120px 120px -80px rgba(0,0,0,0.5)"
                    : "inset 0 -120px 0px -120px rgba(0,0,0,0.7), inset 0 -120px 0px -80px rgba(0,0,0,0.5)",
              }}
            ></div>

            {/* Label with icon and info */}
            <div className="label absolute left-0 right-0 bottom-3 sm:bottom-5 flex items-center justify-start h-10 sm:h-12 z-[2] pointer-events-none px-2 sm:px-4 gap-2 sm:gap-3 w-full">
              <div className="icon min-w-[36px] sm:min-w-[44px] max-w-[36px] sm:max-w-[44px] h-[36px] sm:h-[44px] flex items-center justify-center rounded-full bg-background/90 dark:bg-card/90 backdrop-blur-[10px] shadow-lg border-2 border-border flex-shrink-0 flex-grow-0 transition-all duration-200">
                {option.icon}
              </div>
              <div className="info text-white dark:text-gray-100 whitespace-pre relative">
                <div
                  className="main font-bold text-sm sm:text-base md:text-lg transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform:
                      activeIndex === index
                        ? "translateX(0)"
                        : "translateX(25px)",
                  }}
                >
                  {option.title}
                </div>
                <div
                  className="sub text-xs sm:text-sm md:text-base text-gray-200 dark:text-gray-300 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform:
                      activeIndex === index
                        ? "translateX(0)"
                        : "translateX(25px)",
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveSelector;
