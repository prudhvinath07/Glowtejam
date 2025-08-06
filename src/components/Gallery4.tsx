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
    id: "diamond-solitaire",
    title: "The Eternal Flame Solitaire",
    description: "A brilliant-cut diamond, held in a classic four-prong setting. A timeless symbol of love and commitment.",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img1.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img1.webp",
  },
  {
    id: "pearl-necklace",
    title: "Mystic Ocean Pearl Necklace",
    description: "Lustrous Tahitian pearls, hand-knotted on a silk thread. A touch of oceanic mystery and elegance.",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img2.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img2.webp",
  },
  {
    id: "emerald-earrings",
    title: "Enchanted Forest Emerald Earrings",
    description: "Vivid green emeralds, surrounded by a halo of sparkling diamonds. Inspired by the beauty of nature.",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img3.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img3.webp",
  },
  {
    id: "sapphire-bracelet",
    title: "Starlit Night Sapphire Bracelet",
    description: "Deep blue sapphires, set in a classic tennis bracelet. A piece that captures the magic of a starlit night.",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img4.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img4.webp",
  },
  {
    id: "ruby-pendant",
    title: "Crimson Passion Ruby Pendant",
    description: "A heart-shaped ruby, symbolizing deep love and passion. The perfect gift for a loved one.",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img5.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img5.webp",
  },
  {
    id: "gold-chain",
    title: "The Medusa's Gaze Chain",
    description: "A classic Byzantine chain, handcrafted in 18k gold. A statement piece that exudes confidence.",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img6.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img6.webp",
  },
  {
    id: "vintage-brooch",
    title: "The Gatsby's Whisper Brooch",
    description: "An intricate Art Deco design, with geometric patterns and sparkling diamonds. A nod to the glamour of the Roaring Twenties.",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img7.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img7.webp",
  },
  {
    id: "wedding-band",
    title: "The Everlasting Love Band",
    description: "A full circle of diamonds, symbolizing eternal love and commitment. The perfect complement to any engagement ring.",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img8.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img8.webp",
  },
  {
    id: "topaz-ring",
    title: "The Aegean Dream Ring",
    description: "A stunning blue topaz, reminiscent of the clear blue waters of the Aegean Sea. A true statement piece.",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img9.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img9.webp",
  },
  {
    id: "amethyst-set",
    title: "The Royal Orchid Amethyst Set",
    description: "A matching set of amethyst necklace and earrings, inspired by the beauty of the royal orchid.",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img10.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img10.webp",
  },
  {
    id: "opal-pendant",
    title: "The Fire of the Outback Opal Pendant",
    description: "A mesmerizing Australian opal, with a fiery play of colors. A unique and captivating piece.",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img11.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img11.webp",
  },
  {
    id: "platinum-watch",
    title: "The Celestial Timekeeper",
    description: "A luxurious platinum watch, with a diamond-encrusted bezel. A timeless piece that combines elegance and precision.",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img12.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img12.webp",
  },
  {
    id: "citrine-earrings",
    title: "The Sunstone Cascade Earrings",
    description: "Golden citrine gemstones, cascading like a waterfall of sunlight. A pair of earrings that will light up any room.",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img13.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img13.webp",
  },
  {
    id: "turquoise-cuff",
    title: "The Spirit of the West Cuff",
    description: "A bold turquoise cuff, handcrafted in sterling silver. A piece that captures the spirit of the American West.",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img14.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img14.webp",
  },
  {
    id: "garnet-ring",
    title: "The Victorian Romance Ring",
    description: "A deep red garnet, set in an intricate Victorian-style ring. A piece that tells a story of romance and passion.",
    href: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img15.webp",
    image: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img15.webp",
  },
];

const Gallery4 = ({
  title = "Our Signature Collections",
  description = "Explore our curated collections, each with a unique story and inspiration. From timeless classics to modern designs, find the perfect piece to express your style.",
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