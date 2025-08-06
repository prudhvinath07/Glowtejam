import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback, useMemo } from "react";
import { cn } from "@/lib/utils";

type JewelryItem = {
  title: string;
  description: string;
  src: string;
};

interface JewelryShowcaseProps {
  items: JewelryItem[];
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
  onItemChange?: (index: number) => void;
}

export const JewelryShowcase = ({
  items,
  autoplay = false,
  autoplayInterval = 5000,
  className,
  onItemChange,
}: JewelryShowcaseProps) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    const nextIndex = (active + 1) % items.length;
    setActive(nextIndex);
    onItemChange?.(nextIndex);
  }, [active, items.length, onItemChange]);

  const handlePrev = useCallback(() => {
    const prevIndex = (active - 1 + items.length) % items.length;
    setActive(prevIndex);
    onItemChange?.(prevIndex);
  }, [active, items.length, onItemChange]);

  const goToItem = useCallback((index: number) => {
    setActive(index);
    onItemChange?.(index);
  }, [onItemChange]);

  const isActive = useCallback((index: number) => index === active, [active]);

  useEffect(() => {
    if (autoplay && items.length > 1) {
      const interval = setInterval(handleNext, autoplayInterval);
      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayInterval, handleNext, items.length]);

  const randomRotateY = useMemo(() => {
    return () => Math.floor(Math.random() * 21) - 10;
  }, []);

  if (!items.length) {
    return null;
  }

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {items.map((item, index) => (
                <motion.div
                  key={item.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : items.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={item.src}
                    alt={`${item.title} - ${item.description}`}
                    width={500}
                    height={500}
                    draggable={false}
                    loading="lazy"
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-foreground">
              {items[active].title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {items[active].description}
            </p>
            <motion.p className="text-lg text-muted-foreground mt-8">
              {items[active].description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex items-center gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              disabled={items.length <= 1}
              aria-label="Previous item"
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary/80 transition-colors"
            >
              <IconArrowLeft className="h-5 w-5 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            
            <div className="flex gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToItem(index)}
                  aria-label={`Go to item ${index + 1}`}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    isActive(index) 
                      ? "bg-foreground w-6" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              disabled={items.length <= 1}
              aria-label="Next item"
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary/80 transition-colors"
            >
              <IconArrowRight className="h-5 w-5 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};