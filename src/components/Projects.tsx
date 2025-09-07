import { Bot } from 'lucide-react';

const Projects = () => {
  const project = {
    title: "Angel",
    status: "Live",
    description: "Advanced Discord bot with comprehensive server management, moderation tools, and custom automation features. Built with cutting-edge technology for reliability and performance.",
    features: [
      "Advanced Moderation",
      "Custom Commands", 
      "Server Analytics",
      "Role Management"
    ],
    techStack: [
      "Discord.js",
      "Node.js", 
      "PostgreSQL",
      "Redis"
    ],
    inviteUrl: "https://discord.com/oauth2/authorize?client_id=1411783383217999982"
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the Discord bots I've crafted to enhance server communities and streamline management.
          </p>
        </div>

        {/* Project Card */}
        <div className="max-w-4xl mx-auto">
          <div className="card-portfolio animate-fade-in-up">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-mono">{project.title}</h3>
                  <div className="badge-live mt-1">
                    <div className="w-2 h-2 bg-success rounded-full mr-2 inline-block animate-pulse"></div>
                    {project.status}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Key Features */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 text-primary">Key Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 text-primary">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 border-t border-border/30">
              <a 
                href={project.inviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center group"
              >
                Add to Server
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;