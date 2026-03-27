import { Heart, Users, ShoppingBag, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { PUBLIC_IMAGES } from "../../../constants/publicImages";

export function ThistleFarms() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Thistle Farms
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              A social enterprise that supports survivors of trafficking, prostitution, and addiction
            </p>
          </div>
        </div>
      </section>

      {/* About Thistle Farms Section */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What is Thistle Farms?
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Thistle Farms is a nonprofit social enterprise that stands as a living example that love heals. Founded in 1997, Thistle Farms helps women survivors recover and heal from prostitution, trafficking, and addiction.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                The organization provides survivors with a place to live and work for two years, completely free. During this time, women receive comprehensive support including housing, food, therapy, education, and job training.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Through their social enterprise model, survivors make and sell products including body care items, candles, and other goods that generate revenue to support the program while providing meaningful employment and skills.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src={PUBLIC_IMAGES.thistleCommunity}
                alt="Community Support - Hands Together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Model Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            The Thistle Farms Model
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="mb-4">
                <Heart size={40} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Love Heals</h3>
              <p className="text-muted-foreground">
                A compassionate community that supports women through their healing journey with unconditional love and acceptance.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="mb-4">
                <Users size={40} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Safe Housing</h3>
              <p className="text-muted-foreground">
                Two years of free, safe housing in a supportive residential community designed for healing and recovery.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="mb-4">
                <Sparkles size={40} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Holistic Care</h3>
              <p className="text-muted-foreground">
                Comprehensive support including therapy, medical care, education, and life skills training.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="mb-4">
                <ShoppingBag size={40} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Employment</h3>
              <p className="text-muted-foreground">
                Meaningful work creating beautiful products that generate revenue and build job skills for future independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success & Impact Section */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Proven Success
            </h2>
            <p className="text-xl text-foreground">
              With over 25 years of experience, Thistle Farms has helped hundreds of women find healing and independence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
              <div className="text-5xl font-bold text-primary mb-2">25+</div>
              <div className="text-lg text-foreground">Years of Service</div>
            </div>

            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
              <div className="text-5xl font-bold text-primary mb-2">64</div>
              <div className="text-lg text-foreground">US Communities</div>
            </div>

            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
              <div className="text-5xl font-bold text-primary mb-2">75%</div>
              <div className="text-lg text-foreground">Success Rate After 5 Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Connection to Aspen House Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-primary text-white rounded-lg p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Aspen Magdalene House Partners with Thistle Farms
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Aspen Magdalene House is bringing the proven Thistle Farms model to Utah, providing local survivors with access to this life-changing program without having to leave the state.
            </p>
            <p className="text-lg leading-relaxed">
              By partnering with Thistle Farms, we're able to offer survivors in Utah the same comprehensive support, healing environment, and pathway to independence that has helped hundreds of women across the country.
            </p>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Learn More About Thistle Farms
          </h2>
          <p className="text-lg text-foreground mb-8">
            Visit the Thistle Farms website to learn more about their mission, products, and impact.
          </p>
          <a
            href="https://thistlefarms.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors font-semibold"
          >
            Visit Thistle Farms Website
          </a>
        </div>
      </section>
    </div>
  );
}