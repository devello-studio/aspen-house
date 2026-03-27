import { Home, Heart, Briefcase, GraduationCap, Users, Phone } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function Programs() {
  const programs = [
    {
      icon: Home,
      title: "Residential Program",
      duration: "6-12 months",
      description:
        "Safe, comfortable housing in a supportive community environment with 24/7 staff support.",
      features: [
        "Private or shared bedrooms",
        "Communal living spaces",
        "Nutritious meals provided",
        "Safety and security protocols",
      ],
    },
    {
      icon: Heart,
      title: "Mental Health Services",
      duration: "Ongoing",
      description:
        "Comprehensive mental health support including individual therapy, group counseling, and trauma-informed care.",
      features: [
        "Licensed therapists on staff",
        "Individual counseling sessions",
        "Group therapy workshops",
        "Trauma recovery programs",
      ],
    },
    {
      icon: Briefcase,
      title: "Employment Services",
      duration: "3-6 months",
      description:
        "Job readiness training, resume building, interview preparation, and career placement assistance.",
      features: [
        "Skills assessment",
        "Resume and cover letter support",
        "Mock interviews",
        "Job placement assistance",
      ],
    },
    {
      icon: GraduationCap,
      title: "Education Programs",
      duration: "Flexible",
      description:
        "Educational opportunities including GED preparation, vocational training, and college support.",
      features: [
        "GED tutoring and testing",
        "Vocational certification programs",
        "Computer literacy classes",
        "College application assistance",
      ],
    },
    {
      icon: Users,
      title: "Life Skills Training",
      duration: "Ongoing",
      description:
        "Essential life skills development including financial literacy, parenting classes, and healthy relationships.",
      features: [
        "Financial management workshops",
        "Budgeting and saving strategies",
        "Parenting skills classes",
        "Healthy relationship building",
      ],
    },
    {
      icon: Phone,
      title: "Aftercare Support",
      duration: "Up to 2 years",
      description:
        "Continued support after program completion to ensure successful transition and long-term stability.",
      features: [
        "Monthly check-ins",
        "Alumni support groups",
        "Crisis intervention services",
        "Ongoing resource referrals",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">Our Programs</h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Comprehensive services designed to address the unique needs of each woman and support her journey
            toward independence and healing.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="border-2 border-primary/10 hover:border-secondary transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                    <program.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-primary">{program.title}</h3>
                  <p className="text-secondary font-medium mb-3">{program.duration}</p>
                  <p className="text-foreground/80 mb-4">{program.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-primary">Key Features:</p>
                    <ul className="space-y-1">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-foreground/80 flex items-start">
                          <span className="text-secondary mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Journey */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">The Journey to Independence</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Intake & Assessment</h3>
                  <p className="text-foreground/80">
                    Initial meeting to understand individual needs, goals, and create a personalized plan.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Stabilization</h3>
                  <p className="text-foreground/80">
                    Focus on immediate needs including housing, safety, mental health support, and basic necessities.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Skill Development</h3>
                  <p className="text-foreground/80">
                    Participate in educational programs, job training, and life skills workshops.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Independence Building</h3>
                  <p className="text-foreground/80">
                    Secure employment, obtain permanent housing, and develop sustainable living strategies.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Graduation & Aftercare</h3>
                  <p className="text-foreground/80">
                    Transition to independent living with ongoing support through our alumni network.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-8">Eligibility & Admission</h2>
            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">Who Can Apply?</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-foreground/80">Women 18 years and older</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-foreground/80">Committed to recovery and personal growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-foreground/80">Willing to participate in program activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-foreground/80">Able to live in a communal setting</span>
                  </li>
                </ul>
                <h3 className="text-xl font-semibold mb-4 text-primary">How to Apply</h3>
                <p className="text-foreground/80 mb-4">
                  To begin the application process, please contact our intake coordinator at (801) 555-0100
                  or email info@aspenhouseslc.org. We'll schedule an initial consultation to discuss your
                  needs and answer any questions.
                </p>
                <p className="text-foreground/80">
                  All applications are kept confidential, and we work with each applicant to find the best
                  path forward, whether with our program or through referrals to other services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
