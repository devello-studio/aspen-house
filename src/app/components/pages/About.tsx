import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { PUBLIC_IMAGES } from "../../../constants/publicImages";

export function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Thistle Farms Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${PUBLIC_IMAGES.aboutThistleBanner})`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Thistle Farms is a proven model of care.
            </h2>
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
              Aspen Magdalene House will be Utah's first Thistle Farms house for Utah victims. There are 64 Thistle Farm communities nation-wide.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Give Utah sex trafficking victims the opportunity to be healed in state
            </h2>
            <p className="text-lg text-foreground mb-2">
              Aspen Magdalene House will be Utah's first Thistle Farms house for Utah victims and survivors.
            </p>
            <p className="text-lg text-foreground">
              While 32 states have Thistle Farms communities, Aspen House will be the first in Utah.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* A month of care */}
            <div className="bg-white border-2 border-foreground rounded-lg p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">A month of care</h3>
              <p className="text-3xl font-bold text-foreground mb-4">$1,250</p>
              <p className="text-sm text-foreground mb-8 flex-grow">
                (less than our penal system and more successful)
              </p>
              <Button asChild className="bg-yellow-400 text-primary hover:bg-yellow-500 px-8">
                <Link to="/get-involved">Donate</Link>
              </Button>
            </div>

            {/* A year of care */}
            <div className="bg-white border-2 border-foreground rounded-lg p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">A year of care</h3>
              <p className="text-3xl font-bold text-foreground mb-4">$15,000<span className="text-lg">/year</span></p>
              <p className="text-sm text-foreground mb-8 flex-grow">
                (less than our penal system and more successful)
              </p>
              <Button asChild className="bg-yellow-400 text-primary hover:bg-yellow-500 px-8">
                <Link to="/get-involved">Donate</Link>
              </Button>
            </div>

            {/* Entire program of care */}
            <div className="bg-white border-2 border-foreground rounded-lg p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Entire program of care</h3>
              <p className="text-3xl font-bold text-foreground mb-4">$30,000</p>
              <p className="text-sm text-foreground mb-8 flex-grow">
                Sponsor a resident through our complete 2-year program
              </p>
              <Button asChild className="bg-yellow-400 text-primary hover:bg-yellow-500 px-8">
                <Link to="/get-involved">Donate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Survivor Story Section */}
      <section className="py-20 bg-[#e8f4f0]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                A Survivor Story...
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Brittney and Brandy grew up in an abusive home, leading to struggles with trauma, addiction, and low self-esteem. As young adults, they were groomed by traffickers who manipulated their vulnerabilities, forcing them into prostitution through threats and control. After enduring over a year of abuse, they were rescued by police. Now sober, they work with Aspen Magdalene House to raise awareness of human trafficking and help other survivors heal.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button asChild size="lg" className="bg-yellow-400 text-primary hover:bg-yellow-500 px-8 py-6 text-base">
                  <Link to="/survivors">
                    Read their story
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={PUBLIC_IMAGES.survivorStory} 
                alt="Survivor Story - Brittney and Brandy" 
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}