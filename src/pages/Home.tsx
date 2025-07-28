import { ArrowRight, Target, Cog, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const coreValues = [
    {
      icon: Target,
      title: "Precision Excellence",
      description: "Delivering unmatched accuracy in every product we manufacture"
    },
    {
      icon: Cog,
      title: "Engineering Innovation",
      description: "Combining traditional craftsmanship with cutting-edge technology"
    },
    {
      icon: Users,
      title: "Trusted Partnerships",
      description: "Building enduring relationships with OEMs and Tier 1 suppliers"
    },
    {
      icon: TrendingUp,
      title: "Quality Assurance",
      description: "Maintaining the highest standards throughout our production lifecycle"
    }
  ];

  const clients = [
    {
      name: "Dana Anand Group",
      logo: "/lovable-uploads/8c473e8d-f493-483c-b15b-2d686871d995.png"
    },
    {
      name: "IGW",
      logo: "/lovable-uploads/da21791f-cc02-461c-9b89-0287e134bbeb.png"
    },
    {
      name: "Yaris",
      logo: "/lovable-uploads/041c5d84-a540-439d-a99e-d1018051d64e.png"
    },
    {
      name: "CIE Automotive",
      logo: "/lovable-uploads/5b80c83e-0604-4876-a3b7-1ce8b1fc785a.png"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/e6110a51-c0cb-428b-8a94-f3748f606264.png" 
                alt="Enricon Dynamics" 
                className="h-20 w-auto mx-auto mb-6"
              />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Where Precision <span className="text-primary">Meets Purpose</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Premier manufacturer of high-precision automotive gauges and fixtures, 
              proudly based in Pune, Maharashtra — India's thriving hub of industrial innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Explore Our Solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Learn About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Engineering Excellence in Automotive Precision
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                Enricon Dynamics is a premier manufacturer of high-precision automotive gauges and fixtures, 
                proudly based in Pune, Maharashtra — India's thriving hub of industrial innovation. Built on a 
                foundation of engineering excellence and a deep commitment to quality, we cater to the exacting 
                needs of OEMs, Tier 1 suppliers, and industrial clients across the automotive and manufacturing sectors.
              </p>
              <p>
                At Enricon Dynamics, we specialize in designing and manufacturing bespoke checking fixtures, 
                gauges, and tooling solutions that ensure the highest levels of accuracy, consistency, and performance. 
                Our in-house capabilities span the entire product lifecycle — from concept and design to prototyping, 
                machining, quality control, and final delivery.
              </p>
              <p>
                We don't just deliver tools — we deliver trust, reliability, and enduring partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Driven by a team of skilled engineers, industry veterans, and cutting-edge machinery, 
              we combine traditional craftsmanship with modern technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground">
              Partnering with global automotive and manufacturing giants
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;