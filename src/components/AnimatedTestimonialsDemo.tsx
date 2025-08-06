import { JewelryShowcase } from "@/components/JewelryShowcase";
import { useMemo } from "react";

const JEWELRY_DATA = [
  {
    title: "The Eternal Flame Solitaire",
    description: "A brilliant-cut diamond, held in a classic four-prong setting. A timeless symbol of love and commitment.",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img1.webp",
  },
  {
    title: "Mystic Ocean Pearl Necklace",
    description: "Lustrous Tahitian pearls, hand-knotted on a silk thread. A touch of oceanic mystery and elegance.",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img2.webp",
  },
  {
    title: "Enchanted Forest Emerald Earrings",
    description: "Vivid green emeralds, surrounded by a halo of sparkling diamonds. Inspired by the beauty of nature.",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img3.webp",
  },
  {
    title: "Starlit Night Sapphire Bracelet",
    description: "Deep blue sapphires, set in a classic tennis bracelet. A piece that captures the magic of a starlit night.",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img4.webp",
  },
  {
    title: "Crimson Passion Ruby Pendant",
    description: "A heart-shaped ruby, symbolizing deep love and passion. The perfect gift for a loved one.",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img5.webp",
  },
  {
    title: "The Medusa's Gaze Chain",
    description: "A classic Byzantine chain, handcrafted in 18k gold. A statement piece that exudes confidence.",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img6.webp",
  },
  {
    title: "The Gatsby's Whisper Brooch",
    description: "An intricate Art Deco design, with geometric patterns and sparkling diamonds. A nod to the glamour of the Roaring Twenties.",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img7.webp",
  },
  {
    title: "The Everlasting Love Band",
    description: "A full circle of diamonds, symbolizing eternal love and commitment. The perfect complement to any engagement ring.",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img8.webp",
  },
  {
    title: "The Aegean Dream Ring",
    description: "A stunning blue topaz, reminiscent of the clear blue waters of the Aegean Sea. A true statement piece.",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img9.webp",
  },
  {
    title: "The Royal Orchid Amethyst Set",
    description: "A matching set of amethyst necklace and earrings, inspired by the beauty of the royal orchid.",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img10.webp",
  },
  {
    title: "The Fire of the Outback Opal Pendant",
    description: "A mesmerizing Australian opal, with a fiery play of colors. A unique and captivating piece.",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img11.webp",
  },
  {
    title: "The Celestial Timekeeper",
    description: "A luxurious platinum watch, with a diamond-encrusted bezel. A timeless piece that combines elegance and precision.",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img12.webp",
  },
  {
    title: "The Sunstone Cascade Earrings",
    description: "Golden citrine gemstones, cascading like a waterfall of sunlight. A pair of earrings that will light up any room.",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img13.webp",
  },
  {
    title: "The Spirit of the West Cuff",
    description: "A bold turquoise cuff, handcrafted in sterling silver. A piece that captures the spirit of the American West.",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img14.webp",
  },
  {
    title: "The Victorian Romance Ring",
    description: "A deep red garnet, set in an intricate Victorian-style ring. A piece that tells a story of romance and passion.",
    src: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img15.webp",
  },
];

function JewelryShowcaseDemo() {
  const jewelryItems = useMemo(() => JEWELRY_DATA, []);

  return (
    <div className="w-full">
      <JewelryShowcase
        items={jewelryItems}
        autoplay={true}
        autoplayInterval={6000}
        className="py-16"
      />
    </div>
  );
}

export { JewelryShowcaseDemo };
