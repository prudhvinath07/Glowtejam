interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Welcome to Your App",
  subtitle = "Beautiful tubelight navbar above!",
  backgroundImage = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
}: HeroSectionProps) => {
  return (
    <div 
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl text-white/90">{subtitle}</p>
      </div>
    </div>
  );
};

export { HeroSection };