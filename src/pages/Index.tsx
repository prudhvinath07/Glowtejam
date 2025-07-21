import { NavBarDemo } from "@/components/NavBarDemo"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBarDemo />
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
          <p className="text-xl text-muted-foreground">Beautiful tubelight navbar above!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
