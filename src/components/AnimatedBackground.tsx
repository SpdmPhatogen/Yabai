import { useEffect, useState } from "react";
import sakuraBg from "@/assets/sakura-bg.jpg";

interface SakuraPetal {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
  rotation: number;
  speed: number;
}

export const AnimatedBackground = () => {
  const [petals, setPetals] = useState<SakuraPetal[]>([]);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals: SakuraPetal[] = [];
      // Reduced from 30 to 15 petals for better performance
      for (let i = 0; i < 15; i++) {
        newPetals.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 8,
          size: Math.random() * 6 + 3,
          rotation: Math.random() * 360,
          speed: Math.random() * 0.5 + 0.3,
        });
      }
      setPetals(newPetals);
    };

    generatePetals();
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden min-h-full">
      {/* Optimized sakura background */}
      <div 
        className="absolute bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${sakuraBg})`,
          filter: 'brightness(0.8) saturate(1.1)',
          width: '100%',
          height: '100vh',
          top: '0',
          backgroundSize: 'cover',
          willChange: 'transform'
        }}
      />
      
      {/* Simplified gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background/85" />
      
      {/* Optimized sakura petals with simplified design */}
      <div className="absolute inset-0">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="absolute opacity-60 animate-sakura-fall"
            style={{
              left: `${petal.x}%`,
              top: `${petal.y}%`,
              animationDelay: `${petal.delay}s`,
              animationDuration: `${12 + petal.speed * 6}s`,
              width: `${petal.size}px`,
              height: `${petal.size}px`,
              transform: `rotate(${petal.rotation}deg)`,
              willChange: 'transform'
            }}
          >
            {/* Simplified CSS-based sakura flower */}
            <div className="w-full h-full bg-pink-200/80 rounded-full" />
          </div>
        ))}
      </div>
      
      {/* Reduced moving gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-400/5 rounded-full blur-2xl animate-float" style={{ willChange: 'transform' }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-300/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "3s", willChange: 'transform' }} />
      </div>
    </div>
  );
};