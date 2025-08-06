"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "The diamond engagement ring I purchased here is absolutely stunning. The quality and craftsmanship exceeded my expectations completely. A true masterpiece!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Eleanor Vance",
    role: "Delighted Client",
  },
  {
    text: "Their custom jewelry design service is exceptional. They created the perfect wedding bands that tell our unique love story with exquisite detail.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Julian Thorne",
    role: "Groom & Visionary",
  },
  {
    text: "The customer service team guided me through selecting the perfect pearl necklace. Their expertise and passion made all the difference in my choice.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Seraphina Dubois",
    role: "Pearl Connoisseur",
  },
  {
    text: "As a jewelry collector, I appreciate their authentic vintage pieces and transparent certification process. Highly recommended for discerning buyers.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Lord Alistair Finch",
    role: "Esteemed Collector",
  },
  {
    text: "The emerald earrings I bought for my anniversary are breathtaking. The stones have incredible color and clarity, truly a work of art.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Genevieve Sterling",
    role: "Anniversary Celebrant",
  },
  {
    text: "Their repair service restored my grandmother's antique brooch beautifully. They treated it with such care and respect, preserving its legacy.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Isolde Blackwood",
    role: "Heirloom Guardian",
  },
  {
    text: "The sapphire tennis bracelet is elegant and timeless. I receive compliments every time I wear it, a true testament to its allure.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Maximilian Croft",
    role: "Style Aficionado",
  },
  {
    text: "They helped me find the perfect ruby pendant within my budget. The personal attention and care was remarkable, making it a cherished piece.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Anastasia Volkov",
    role: "Discerning Buyer",
  },
  {
    text: "The platinum watch I purchased is both functional and beautiful. It's become my signature piece for special occasions, a symbol of prestige.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Baron Von Zeppelin",
    role: "Timepiece Enthusiast",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full"
                  key={i}
                >
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">
                        {name}
                      </div>
                      <div className="leading-5 opacity-60 tracking-tight">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export { testimonials };