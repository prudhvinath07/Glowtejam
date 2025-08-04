import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useState, useCallback, useMemo } from "react";

const TESTIMONIALS_DATA = [
  {
    quote: "Quote for Image 1",
    name: "Name 1",
    designation: "Designation 1",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img1.webp",
  },
  {
    quote: "Quote for Image 2",
    name: "Name 2",
    designation: "Designation 2",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img2.webp",
  },
  {
    quote: "Quote for Image 3",
    name: "Name 3",
    designation: "Designation 3",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img3.webp",
  },
  {
    quote: "Quote for Image 4",
    name: "Name 4",
    designation: "Designation 4",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img4.webp",
  },
  {
    quote: "Quote for Image 5",
    name: "Name 5",
    designation: "Designation 5",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img5.webp",
  },
  {
    quote: "Quote for Image 6",
    name: "Name 6",
    designation: "Designation 6",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img6.webp",
  },
  {
    quote: "Quote for Image 7",
    name: "Name 7",
    designation: "Designation 7",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img7.webp",
  },
  {
    quote: "Quote for Image 8",
    name: "Name 8",
    designation: "Designation 8",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img8.webp",
  },
  {
    quote: "Quote for Image 9",
    name: "Name 9",
    designation: "Designation 9",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img9.webp",
  },
  {
    quote: "Quote for Image 10",
    name: "Name 10",
    designation: "Designation 10",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img10.webp",
  },
  {
    quote: "Quote for Image 11",
    name: "Name 11",
    designation: "Designation 11",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img11.webp",
  },
  {
    quote: "Quote for Image 12",
    name: "Name 12",
    designation: "Designation 12",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img12.webp",
  },
  {
    quote: "Quote for Image 13",
    name: "Name 13",
    designation: "Designation 13",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img13.webp",
  },
  {
    quote: "Quote for Image 14",
    name: "Name 14",
    designation: "Designation 14",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img14.webp",
  },
  {
    quote: "Quote for Image 15",
    name: "Name 15",
    designation: "Designation 15",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img15.webp",
  },
];

function AnimatedTestimonialsDemo() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleTestimonialChange = useCallback((index: number) => {
    setCurrentTestimonial(index);
    // You could add analytics tracking here
    console.log(`Testimonial changed to: ${TESTIMONIALS_DATA[index].name}`);
  }, []);

  const testimonials = useMemo(() => TESTIMONIALS_DATA, []);

  return (
    <div className="w-full">
      <AnimatedTestimonials
        testimonials={testimonials}
        autoplay={true}
        autoplayInterval={6000}
        onTestimonialChange={handleTestimonialChange}
        className="py-16"
      />
    </div>
  );
}

export { AnimatedTestimonialsDemo };
