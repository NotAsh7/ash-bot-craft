import { MessageCircle, Mail } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      platform: "Discord",
      handle: "unknown_fy",
      id: "(1149069310636064819)",
      action: "Message Me",
      link: "https://discord.com/users/1149069310636064819",
      icon: MessageCircle,
      color: "bg-blue-500/20 border-blue-500/30"
    },
    {
      platform: "Email",
      handle: "notashcodes@gmail.com",
      action: "Send Email", 
      link: "mailto:notashcodes@gmail.com",
      icon: Mail,
      color: "bg-green-500/20 border-green-500/30"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Amazing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to transform your Discord server? Let's discuss your bot development needs.
          </p>
          
          {/* Availability Badge */}
          <div className="inline-flex items-center badge-available">
            <div className="w-3 h-3 bg-success rounded-full mr-2 animate-pulse"></div>
            Available for new projects
          </div>
        </div>

        {/* Enhanced Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {contactMethods.map((method, index) => (
            <div 
              key={method.platform}
              className="contact-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg ${method.color} flex items-center justify-center transition-all duration-300 hover:scale-110`}>
                  <method.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{method.platform}</h3>
                  <p className="text-muted-foreground mb-1">{method.handle}</p>
                  {method.id && (
                    <p className="text-xs text-muted-foreground/70 mb-4">{method.id}</p>
                  )}
                  <a 
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm py-2 px-4 inline-flex items-center group"
                  >
                    {method.action}
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="text-center animate-fade-in-up">
          <div className="card-portfolio max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your project and bring your Discord server to the next level.
            </p>
            <a 
              href="https://discord.com/users/1149069310636064819"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center group"
            >
              Start Your Project
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;