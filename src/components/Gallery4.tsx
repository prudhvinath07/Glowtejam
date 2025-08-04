"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items?: Gallery4Item[];
}

const data = [
  {
    id: "img1",
    title: "Image 1",
    description: "Description for Image 1",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img1.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img1.webp",
  },
  {
    id: "img2",
    title: "Image 2",
    description: "Description for Image 2",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img2.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img2.webp",
  },
  {
    id: "img3",
    title: "Image 3",
    description: "Description for Image 3",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img3.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img3.webp",
  },
  {
    id: "img4",
    title: "Image 4",
    description: "Description for Image 4",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img4.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img4.webp",
  },
  {
    id: "img5",
    title: "Image 5",
    description: "Description for Image 5",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img5.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img5.webp",
  },
  {
    id: "img6",
    title: "Image 6",
    description: "Description for Image 6",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img6.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img6.webp",
  },
  {
    id: "img7",
    title: "Image 7",
    description: "Description for Image 7",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img7.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img7.webp",
  },
  {
    id: "img8",
    title: "Image 8",
    description: "Description for Image 8",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img8.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img8.webp",
  },
  {
    id: "img9",
    title: "Image 9",
    description: "Description for Image 9",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img9.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img9.webp",
  },
  {
    id: "img10",
    title: "Image 10",
    description: "Description for Image 10",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img10.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img10.webp",
  },
  {
    id: "img11",
    title: "Image 11",
    description: "Description for Image 11",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img11.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img11.webp",
  },
  {
    id: "img12",
    title: "Image 12",
    description: "Description for Image 12",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img12.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img12.webp",
  },
  {
    id: "img13",
    title: "Image 13",
    description: "Description for Image 13",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img13.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img13.webp",
  },
  {
    id: "img14",
    title: "Image 14",
    description: "Description for Image 14",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img14.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img14.webp",
  },
  {
    id: "img15",
    title: "Image 15",
    description: "Description for Image 15",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img15.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img15.webp",
  },
];

const Gallery4 = ({
  title = "Case Studies",
  description = "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    updateSelection();
    carouselApi.on("select", updateSelection);

    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="max-w-lg text-muted-foreground">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a href={item.href} className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm">
                        Read more{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };