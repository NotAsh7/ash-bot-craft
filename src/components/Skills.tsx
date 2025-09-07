const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: "⚡" },
    { name: "Node.js", icon: "🚀" },
    { name: "Discord.js", icon: "🤖" },
    { name: "APIs", icon: "🔗" },
    { name: "Firebase", icon: "🔥" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Redis", icon: "🔴" },
    { name: "Git", icon: "🌿" },
    { name: "Docker", icon: "🐳" },
    { name: "SEO", icon: "🎯" }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring Discord bots to life
          </p>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="skill-item animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-125">{skill.icon}</div>
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">{skill.name}</h3>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Always learning and expanding my toolkit to create better, more efficient Discord bots that serve communities worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;