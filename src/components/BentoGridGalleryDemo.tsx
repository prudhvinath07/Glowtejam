import InteractiveBentoGallery from "@/components/blocks/interactive-bento-gallery";

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "The Eternal Flame Solitaire",
    desc: "A brilliant-cut diamond, held in a classic four-prong setting. A timeless symbol of love and commitment.",
    url: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img1.webp",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "Mystic Ocean Pearl Necklace",
    desc: "Lustrous Tahitian pearls, hand-knotted on a silk thread. A touch of oceanic mystery and elegance.",
    url: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img2.webp",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Enchanted Forest Emerald Earrings",
    desc: "Vivid green emeralds, surrounded by a halo of sparkling diamonds. Inspired by the beauty of nature.",
    url: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img3.webp",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
  },
  {
    id: 4,
    type: "image",
    title: "Starlit Night Sapphire Bracelet",
    desc: "Deep blue sappires, set in a classic tennis bracelet. A piece that captures the magic of a starlit night.",
    url: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img4.webp",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 5,
    type: "image",
    title: "Crimson Passion Ruby Pendant",
    desc: "A heart-shaped ruby, symbolizing deep love and passion. The perfect gift for a loved one.",
    url: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img5.webp",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 6,
    type: "image",
    title: "The Medusa's Gaze Chain",
    desc: "A classic Byzantine chain, handcrafted in 18k gold. A statement piece that exudes confidence.",
    url: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img6.webp",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 7,
    type: "image",
    title: "The Gatsby's Whisper Brooch",
    desc: "An intricate Art Deco design, with geometric patterns and sparkling diamonds. A nod to the glamour of the Roaring Twenties.",
    url: "https://cdn.jsdelivr.net/gh/prudhvinath07/media_cdn007@latest/img7.webp",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
];

export function BentoGridGalleryDemo() {
  return (
    <div className="min-h-screen overflow-y-auto">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title="A Symphony of Gems"
        description="Explore our diverse collection of handcrafted jewelry, each piece a work of art."
      />
    </div>
  );
}
