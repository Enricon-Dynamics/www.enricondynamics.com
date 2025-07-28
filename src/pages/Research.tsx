import { Code, Lightbulb, Cpu, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Research = () => {
  const researchAreas = [
    {
      icon: Code,
      title: "Software Development",
      description: "Developing custom digital tools and software solutions for manufacturing optimization"
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Fostering creative solutions through research and development in emerging technologies"
    },
    {
      icon: Cpu,
      title: "Digital Transformation",
      description: "Bridging traditional manufacturing with modern digital technologies"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Leveraging data-driven insights to enhance precision and efficiency"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Tech Gradient */}
      <section className="bg-gradient-tech py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/a9d201c5-170d-4709-a7ba-f62ec40e7b30.png" 
                alt="Enricon Research Labs" 
                className="h-16 w-auto mx-auto mb-6 brightness-0 invert"
              />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Enricon <span className="text-enricon-teal">Research Labs</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our software-focused initiative driving digital innovation in precision manufacturing
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Pioneering Digital Solutions
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                Enricon Research Labs represents our forward-thinking approach to manufacturing innovation. 
                As a small-scale R&D wing of Enricon Dynamics, we focus on developing cutting-edge digital 
                tools and software solutions that complement our precision manufacturing capabilities.
              </p>
              <p>
                Our research initiative bridges the gap between traditional manufacturing excellence and 
                modern digital transformation, creating intelligent solutions that enhance accuracy, 
                efficiency, and productivity in the automotive manufacturing ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Research Focus Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exploring innovative technologies to revolutionize precision manufacturing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center flex-shrink-0">
                      <area.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{area.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-tech p-8 rounded-lg text-white text-center">
              <h2 className="text-3xl font-bold mb-6">Our Vision for the Future</h2>
              <p className="text-lg opacity-90 leading-relaxed">
                Through Enricon Research Labs, we envision a future where precision manufacturing 
                is seamlessly integrated with intelligent software solutions, creating a new standard 
                of excellence in automotive manufacturing. Our small but dedicated R&D team works 
                tirelessly to develop tools that not only meet today's challenges but anticipate 
                tomorrow's opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Approach */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Technology-Driven Innovation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Digital Integration</h3>
                <p className="text-muted-foreground">
                  We develop software solutions that integrate seamlessly with existing manufacturing 
                  processes, enhancing workflow efficiency and quality control systems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Scalable Solutions</h3>
                <p className="text-muted-foreground">
                  Our research focuses on creating scalable digital tools that can adapt to various 
                  manufacturing environments and grow with our clients' evolving needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Industry 4.0</h3>
                <p className="text-muted-foreground">
                  We embrace Industry 4.0 principles, incorporating IoT, automation, and smart 
                  analytics into our research and development initiatives.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Collaborative Research</h3>
                <p className="text-muted-foreground">
                  Our research approach emphasizes collaboration with industry partners to ensure 
                  our innovations address real-world manufacturing challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;