import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Nom */}
          <h1 className="font-inter text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Alexandre Dubois
            </span>
          </h1>
          
          {/* Sous-titre */}
          <p className="font-inter text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Développeur Frontend passionné par la création d'expériences web modernes et interactives
          </p>
          
          {/* Description supplémentaire */}
          <p className="font-inter text-lg text-muted-foreground/80 max-w-xl mx-auto">
            Spécialisé en React, TypeScript et design moderne pour transformer vos idées en réalité numérique
          </p>
          
          {/* Bouton CTA */}
          <div className="pt-8">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              onClick={() => {
                // Scroll vers une future section projets
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Voir mes projets
            </Button>
          </div>
        </div>
      </div>
      
      {/* Effet de particules animées */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-primary-glow rounded-full animate-pulse delay-500" />
      </div>
    </section>
  );
};

export default HeroSection;