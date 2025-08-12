import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Application React moderne avec panier, paiements et gestion d'inventaire",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      status: "En cours"
    },
    {
      title: "Dashboard Analytics",
      description: "Interface d'analyse de données avec graphiques interactifs",
      tech: ["React", "D3.js", "Tailwind CSS", "API REST"],
      status: "Terminé"
    },
    {
      title: "Portfolio Personnel",
      description: "Site vitrine responsive avec animations fluides",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      status: "En cours"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-inter text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets récents qui démontrent mes compétences en développement frontend
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="font-inter text-xl text-foreground">
                    {project.title}
                  </CardTitle>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                    {project.status}
                  </span>
                </div>
                <CardDescription className="font-inter text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;