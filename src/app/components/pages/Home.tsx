import { UserPlus, Target, Heart } from "lucide-react";
import { Button } from "../ui/button";
import { PUBLIC_IMAGES } from "../../../constants/publicImages";

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${PUBLIC_IMAGES.heroHome})`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-white tracking-wide leading-tight drop-shadow-lg" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.05em' }}>
            FIND YOUR PATH HOME.
          </h1>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeKhS80ODCm2KPDyWJi5A6fO0rBXlAB5oHssGxQlYcT9Pk5yw/viewform?vc=0&c=0&w=1&flr=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-base">
              RESIDENTIAL PROGRAM APPLICATION
            </Button>
          </a>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Give Utah sex trafficking victims the opportunity to be healed in state
            </h2>
          </div>
        </div>
      </section>

      {/* Proven Model Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Our proven model gives survivors of trafficking<br />a way to move forward
            </h2>
            <p className="text-lg text-foreground">
              75% are living successful, financially independent lives 5 years after graduation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Our Model */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <UserPlus size={48} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Model</h3>
              <p className="text-foreground leading-relaxed">
                Thistle Farms with 25 years of experience and 64 US communities.
              </p>
            </div>

            {/* Our Moto */}
            <div className="bg-[#d4e4c8] rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <Heart size={48} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Moto</h3>
              <p className="text-foreground leading-relaxed">
                Love heals. Love is the most powerful force for good in the world.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-[#fef9e7] rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <Target size={48} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-foreground leading-relaxed">
                Provide a safe place for healing and a path to self-sufficiency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Human Trafficking Facts Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl text-primary mb-8 font-semibold">
              Human Trafficking is happening in every state including Utah
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Myths and Misconceptions About Human Trafficking
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Myth 1 */}
            <div className="bg-background rounded-lg p-8 shadow-sm border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-3">Myth:</h3>
              <p className="text-foreground mb-4 leading-relaxed">
                Human Trafficking victims are only foreign born individuals or those who are poor
              </p>
              <h3 className="text-xl font-bold text-secondary mb-3">Fact:</h3>
              <p className="text-foreground leading-relaxed">
                Human trafficking victims can be any age, race, gender, or nationality. They may come from any socioeconomic group. A socioeconomic group is the social standing or class of an individual or group. It is often measured as a combination of education, income and occupation.
              </p>
            </div>

            {/* Myth 2 */}
            <div className="bg-background rounded-lg p-8 shadow-sm border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-3">Myth:</h3>
              <p className="text-foreground mb-4 leading-relaxed">
                Human trafficking is always or usually a violent crime
              </p>
              <h3 className="text-xl font-bold text-secondary mb-3">Fact:</h3>
              <p className="text-foreground leading-relaxed">
                The most pervasive myth about human trafficking is that it often involves kidnapping or physically forcing someone into a situation. In reality, most traffickers use psychological means such as, tricking, defrauding, manipulating or threatening victims into providing commercial sex or exploitative labor.
              </p>
            </div>

            {/* Myth 3 */}
            <div className="bg-background rounded-lg p-8 shadow-sm border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-3">Myth:</h3>
              <p className="text-foreground mb-4 leading-relaxed">
                Traffickers target victims they don't know
              </p>
              <h3 className="text-xl font-bold text-secondary mb-3">Fact:</h3>
              <p className="text-foreground leading-relaxed">
                Many survivors have been trafficked by romantic partners, including spouses, and by family members, including parents.
              </p>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="max-w-4xl mx-auto text-center bg-primary text-white rounded-lg p-10 shadow-lg">
            <p className="text-2xl md:text-3xl font-bold leading-relaxed">
              Human trafficking is second to drug trade in criminal activity at $150 billion and growing
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}