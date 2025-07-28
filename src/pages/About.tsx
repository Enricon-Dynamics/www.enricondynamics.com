import { Calendar, Target, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Calendar,
      title: "Founded 2022",
      description: "Young company with seasoned expertise"
    },
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Precision engineering for automotive excellence"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled engineers and industry veterans"
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Uncompromising standards in every product"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Enricon Dynamics</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Engineering excellence and a deep commitment to quality since 2022
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Our Mission
              </h2>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  At Enricon Dynamics, we specialize in designing and manufacturing bespoke checking fixtures, 
                  gauges, and tooling solutions that ensure the highest levels of accuracy, consistency, and performance. 
                  Our in-house capabilities span the entire product lifecycle — from concept and design to prototyping, 
                  machining, quality control, and final delivery.
                </p>
                <p>
                  Driven by a team of skilled engineers, industry veterans, and cutting-edge machinery, 
                  we combine traditional craftsmanship with modern technology to meet the evolving demands 
                  of precision engineering. Whether it's for dimensional inspection, assembly validation, 
                  or quality assurance, our solutions are built to elevate your production standards.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <highlight.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Brief History
            </h2>
            <div className="bg-card p-8 rounded-lg shadow-card">
              <div className="text-lg text-muted-foreground leading-relaxed">
                <p className="mb-6">
                  Founded in 2022, Enricon Dynamics emerged from a vision to bridge the gap between 
                  traditional manufacturing expertise and modern precision engineering demands in India's 
                  automotive sector. Despite being a young company, we built our foundation on decades 
                  of collective experience from our team of industry veterans.
                </p>
                <p className="mb-6">
                  Located in Pune, Maharashtra — a strategic hub for automotive manufacturing — we 
                  positioned ourselves at the heart of India's industrial innovation ecosystem. This 
                  location allows us to serve both domestic and international clients with efficiency 
                  and reliability.
                </p>
                <p>
                  From our inception, we've maintained an unwavering commitment to quality, innovation, 
                  and trust, establishing ourselves as a reliable partner for OEMs, Tier 1 suppliers, 
                  and industrial clients across the automotive and manufacturing sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Team Values & Commitment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Quality</h3>
                <p className="text-muted-foreground">
                  We maintain uncompromising standards in every aspect of our work, 
                  from initial design to final delivery.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously embrace new technologies and methodologies to stay 
                  ahead of industry demands.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Trust</h3>
                <p className="text-muted-foreground">
                  We build lasting relationships based on reliability, transparency, 
                  and consistent delivery of excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;