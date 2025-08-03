import characterSitting from "@/assets/character-sitting-b.png";

export const YabaiLogo = () => {
  return (
    <div className="relative">
      <h1 className="text-8xl md:text-9xl font-black bg-gradient-primary bg-clip-text text-transparent animate-fade-in-up">
        YABAI
      </h1>
      
      {/* Character sitting on the B */}
      <img 
        src={characterSitting}
        alt="Character sitting on B"
        className="absolute -top-16 left-[5.8em] md:-top-24 md:left-[7em] w-28 h-32 md:w-40 md:h-48 object-contain animate-fade-in-up z-20"
        style={{ animationDelay: "0.8s" }}
      />
      
      {/* Glowing text shadow effect */}
      <div className="absolute inset-0 text-8xl md:text-9xl font-black text-primary opacity-20 blur-sm animate-glow-pulse -z-10">
        YABAI
      </div>
      
      {/* Japanese characters */}
      <div className="text-2xl md:text-3xl text-accent font-light tracking-widest mt-4 animate-slide-in-left">
        やばい
      </div>
      
      {/* Subtitle */}
      <div className="text-lg md:text-xl text-muted-foreground mt-2 font-light animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
        Beyond Amazing
      </div>
    </div>
  );
};