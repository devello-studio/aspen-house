import { useState } from "react";
import { Link } from "react-router";
import { Heart, Users, Package, Lightbulb, Loader2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { cn } from "../ui/utils";

export function GetInvolved() {
  const [donorboxLoaded, setDonorboxLoaded] = useState(false);
  const volunteerOpportunities = [
    {
      icon: Users,
      title: "Mentor & Support",
      description: "Provide one-on-one mentorship and guidance to women in our program.",
      commitment: "2-4 hours/week",
    },
    {
      icon: Package,
      title: "Donation Drives",
      description: "Organize collection drives for clothing, toiletries, and household items.",
      commitment: "Flexible",
    },
    {
      icon: Lightbulb,
      title: "Skills Workshop Leader",
      description: "Share your professional skills through workshops and training sessions.",
      commitment: "1-2 hours/month",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-[#f5f1e8]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">Donate</h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Your generosity helps us provide a safe, supportive home where women can heal, grow, and rebuild their lives.
          </p>
        </div>
      </section>

      {/* Main Donation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Make a Difference Today</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Every donation helps provide housing, support services, and opportunities for women to achieve lasting independence.
            </p>
          </div>

          {/* Embedded Donation Form + supporting details */}
          <div className="grid lg:grid-cols-[500px_minmax(0,1fr)] gap-8 items-start mb-12">
            <div className="lg:sticky lg:top-24">
              <div
                className="relative mx-auto w-full max-w-[500px] min-h-[639px] min-w-[310px]"
                aria-busy={!donorboxLoaded}
              >
                <div
                  className={cn(
                    "absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-md bg-background/90 transition-opacity duration-300",
                    donorboxLoaded ? "pointer-events-none opacity-0" : "opacity-100",
                  )}
                  aria-hidden={donorboxLoaded}
                >
                  <Loader2 className="h-10 w-10 animate-spin text-primary" aria-hidden />
                  <p className="text-sm text-muted-foreground">Loading donation form…</p>
                </div>
                <iframe
                  src="https://donorbox.org/embed/help-us-plant-our-roots?a=b"
                  width="100%"
                  style={{ maxWidth: "500px", minWidth: "310px", height: "639px" }}
                  seamless="seamless"
                  id="dbox-form-embed"
                  name="donorbox"
                  frameBorder="0"
                  scrolling="no"
                  allowPaymentRequest={true}
                  data-donorbox-id="DonorBox-f1"
                  allow="payment"
                  title="Donorbox donation form"
                  onLoad={() => setDonorboxLoaded(true)}
                  className={cn(
                    "block w-full transition-opacity duration-300",
                    donorboxLoaded ? "opacity-100" : "opacity-0",
                  )}
                />
              </div>
            </div>

            <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-3">Help Us Plant Our Roots</h3>
                  <p className="text-foreground/80">
                    The need for supportive services for victims of trafficking in Utah is great. Your donation helps establish housing and a safe place for survivors to heal and rebuild their lives.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Ways your support helps</h4>
                  <ul className="text-sm text-foreground/80 space-y-2">
                    <li>Housing and complete aftercare services for survivors</li>
                    <li>One-time, monthly, quarterly, and annual giving options</li>
                    <li>Corporate partnership opportunities for local organizations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Mail a donation</h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Aspen Magdalene House INC.<br />
                    PO Box 522006<br />
                    Salt Lake City, UT 84152
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Employer matching</h4>
                  <p className="text-sm text-foreground/80">
                    Many employers offer charitable matching programs. Check with your HR team to see how you can double your impact.
                  </p>
                </div>

                <p className="text-sm text-foreground/60">
                  Aspen Magdalene House is a 501(c)(3) nonprofit organization. Your donation is tax-deductible to the fullest extent allowed by law.
                </p>
            </div>
          </div>

          {/* Other Ways to Give */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border border-primary/10 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                  <Package size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">In-Kind Donations</h3>
                <p className="text-sm text-foreground/80">
                  Donate household items, furniture, and supplies
                </p>
              </CardContent>
            </Card>

            <Card className="border border-primary/10 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 bg-secondary/10 rounded-full mb-4">
                  <Users size={28} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Corporate Giving</h3>
                <p className="text-sm text-foreground/80">
                  Partner with us through workplace giving programs
                </p>
              </CardContent>
            </Card>

            <Card className="border border-primary/10 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                  <Heart size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Legacy Giving</h3>
                <p className="text-sm text-foreground/80">
                  Leave a lasting impact through planned giving
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-16 bg-[#f5f1e8]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-4">Volunteer With Us</h2>
          <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            Share your time, skills, and compassion to directly support women on their journey to independence.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="border-2 border-primary/10 bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                      <opportunity.icon size={28} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">{opportunity.title}</h3>
                    <p className="text-foreground/80 mb-3">{opportunity.description}</p>
                    <p className="text-sm text-secondary font-medium">
                      Time Commitment: {opportunity.commitment}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
              <Link to="/volunteer">Apply to Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}