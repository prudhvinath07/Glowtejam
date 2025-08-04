interface LogoProps {
  text?: string;
  className?: string;
}

const Logo = ({ 
  text = "GLOWTEJAM",
  className = "fixed top-6 left-8 z-50"
}: LogoProps) => {
  return (
    <div className={className}>
      <div className="text-2xl font-bold text-primary bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg border shadow-lg">
        {text}
      </div>
    </div>
  );
};

export { Logo };