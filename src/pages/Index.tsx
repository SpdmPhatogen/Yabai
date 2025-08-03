import { AnimatedBackground } from "@/components/AnimatedBackground";
import { YabaiLogo } from "@/components/YabaiLogo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import motmImage from "@/assets/motm-centurion.jpg";
import motmSideImage from "@/assets/motm-side-image.png";
import sapphireImage from "@/assets/owner-sapphire.png";
import aposImage from "@/assets/owner-apos.png";
import musashiImage from "@/assets/owner-musashi.png";
import crownIcon from "@/assets/golden-crown.png";

// Stinkys images
import yuuImage from "@/assets/stinky-yuu.png";
import rafImage from "@/assets/stinky-raf.png";
import yunoImage from "@/assets/stinky-yuno.png";
import ayeshaImage from "@/assets/stinky-ayesha.png";
import gwessImage from "@/assets/stinky-gwess.png";
import erinImage from "@/assets/stinky-erin.png";
import dewranImage from "@/assets/stinky-dewran.png";
import fentanylImage from "@/assets/stinky-fentanyl.png";
import charlyImage from "@/assets/stinky-charly.png";
import konikiImage from "@/assets/stinky-koniki.png";
import kenzImage from "@/assets/stinky-kenz.png";
import gloryImage from "@/assets/stinky-glory.png";
import krecikImage from "@/assets/stinky-krecik.png";
import chickenImage from "@/assets/stinky-chicken.png";
import questionableImage from "@/assets/stinky-questionable.jpg";
import samImage from "@/assets/stinky-sam.jpg";
import gilImage from "@/assets/stinky-gil.png";
import frankieImage from "@/assets/stinky-frankie.png";
import hooImage from "@/assets/stinky-hoo.png";
import marsImage from "@/assets/stinky-mars.png";
import tojiImage from "@/assets/stinky-toji.png";
import kyoImage from "@/assets/stinky-kyo.png";
import yukiImage from "@/assets/stinky-yuki.png";
import goreguraImage from "@/assets/stinky-goregura.png";
import jahImage from "@/assets/stinky-jah.png";
import naymImage from "@/assets/stinky-naym.jpg";
import nuffyImage from "@/assets/stinky-nuffy.png";
import torororoImage from "@/assets/stinky-torororo.png";
import gokuBlackImage from "@/assets/goku-black-new.png";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        {/* Main hero section */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
          <YabaiLogo />
            {/* Call to action buttons */}
            <div className="mt-12 flex justify-center items-center">
              <Button 
                variant="blue" 
                size="lg"
                className="text-lg px-8 py-6 animate-fade-in-up"
                style={{ animationDelay: "1s" }}
                onClick={() => window.open('https://discord.gg/6yrwRzkj', '_blank')}
              >
                Join Here!
              </Button>
            </div>
          </div>
        </div>

        {/* Owners section */}
        <div className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-yellow-400 animate-fade-in-up transform-gpu" 
                style={{ 
                  textShadow: '0 0 20px #ffff00',
                  willChange: 'transform'
                }}>
              Owners!
            </h2>
            <div className="relative flex flex-col items-center max-w-4xl mx-auto">
              {/* Sapphire at the top center */}
              <div className="mb-12">
                <Card 
                  className="group p-8 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-500 hover:shadow-[0_0_40px_theme(colors.yellow.500/0.6)] animate-fade-in-up text-center cursor-pointer transform hover:scale-105"
                  style={{ animationDelay: "1.5s" }}
                >
                  <div className="mb-6">
                    <img 
                      src={sapphireImage} 
                      alt="Sapphire"
                      className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-primary/50 group-hover:border-yellow-500 transition-all duration-500 group-hover:shadow-[0_0_20px_theme(colors.yellow.500/0.8)] group-hover:brightness-110"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-primary group-hover:text-yellow-400 transition-colors duration-500">
                    Sapphire
                  </h3>
                </Card>
              </div>
              
              {/* Apos and Musashi in a V formation below */}
              <div className="flex justify-between w-full max-w-2xl gap-8">
                <Card 
                  className="group p-8 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-500 hover:shadow-[0_0_40px_theme(colors.yellow.500/0.6)] animate-fade-in-up text-center cursor-pointer transform hover:scale-105"
                  style={{ animationDelay: "1.7s" }}
                >
                  <div className="mb-6">
                    <img 
                      src={aposImage} 
                      alt="Apos"
                      className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-primary/50 group-hover:border-yellow-500 transition-all duration-500 group-hover:shadow-[0_0_20px_theme(colors.yellow.500/0.8)] group-hover:brightness-110"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-primary group-hover:text-yellow-400 transition-colors duration-500">
                    Apos
                  </h3>
                </Card>
                
                <Card 
                  className="group p-8 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-500 hover:shadow-[0_0_40px_theme(colors.yellow.500/0.6)] animate-fade-in-up text-center cursor-pointer transform hover:scale-105"
                  style={{ animationDelay: "1.9s" }}
                >
                  <div className="mb-6">
                    <img 
                      src={musashiImage} 
                      alt="Musashi"
                      className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-primary/50 group-hover:border-yellow-500 transition-all duration-500 group-hover:shadow-[0_0_20px_theme(colors.yellow.500/0.8)] group-hover:brightness-110"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-primary group-hover:text-yellow-400 transition-colors duration-500">
                    Musashi
                  </h3>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* MOTM section */}
        <div className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-red-500 animate-fade-in-up transform-gpu"
                style={{ 
                  textShadow: '0 0 20px #ff0000',
                  willChange: 'transform'
                }}>
              MOTM OF THE MONTH!
            </h2>
            <img 
              src={motmSideImage} 
              alt="MOTM decoration"
              className="absolute top-8 right-0 w-24 h-24 object-contain animate-fade-in-up transform translate-x-6 -translate-y-4"
              style={{ animationDelay: "0.5s" }}
            />
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 hover:shadow-glow-accent animate-fade-in-up">
              <div className="mb-6">
                <img 
                  src={motmImage} 
                  alt="Newtonium"
                  className="w-48 h-48 mx-auto rounded-lg object-cover border-4 border-accent/50 hover:border-accent transition-all duration-300"
                />
              </div>
              <h3 className="text-3xl font-bold text-accent">
                Newtonium
              </h3>
            </Card>
          </div>
        </div>

        {/* The Stinkys section */}
        <div className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-400 animate-fade-in-up transform-gpu"
                style={{ 
                  textShadow: '0 0 20px #8b5cf6',
                  willChange: 'transform'
                }}>
              The Stinkys
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Yuu", image: yuuImage },
                { name: "Raf", image: rafImage },
                { name: "Yuno", image: yunoImage },
                { name: "Ayesha", image: ayeshaImage },
                { name: "Gwess", image: gwessImage },
                { name: "Erin", image: erinImage },
                { name: "Dewran", image: dewranImage },
                { name: "Fentanyl", image: fentanylImage },
                { name: "Charly", image: charlyImage },
                { name: "Koniki", image: konikiImage },
                { name: "Kenz", image: kenzImage },
                { name: "Glory", image: gloryImage },
                { name: "Krecik", image: krecikImage },
                { name: "Chicken", image: chickenImage },
                { name: "Questionable", image: questionableImage },
                { name: "Goku black", image: gokuBlackImage },
                { name: "Sam", image: samImage },
                { name: "Gil", image: gilImage },
                { name: "Frankie", image: frankieImage },
                { name: "Hoo", image: hooImage },
                { name: "Mars", image: marsImage },
                { name: "Toji", image: tojiImage },
                { name: "Kyo", image: kyoImage },
                { name: "Yuki", image: yukiImage },
                { name: "GoreGura", image: goreguraImage },
                { name: "Jah", image: jahImage },
                { name: "Naym", image: naymImage },
                { name: "Nuffy", image: nuffyImage },
                { name: "Torororo", image: torororoImage }
              ].map((stinky, index) => (
                <Card 
                  key={stinky.name}
                  className="group p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 hover:shadow-glow-accent animate-fade-in-up text-center cursor-pointer"
                  style={{ animationDelay: `${1.5 + index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <img 
                      src={stinky.image} 
                      alt={stinky.name}
                      className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-secondary/50 group-hover:border-secondary transition-all duration-300 group-hover:brightness-110"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300 transform-gpu"
                      style={{
                        textShadow: '0 0 10px #8b5cf6',
                        willChange: 'transform'
                      }}>
                    {stinky.name}
                  </h3>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;