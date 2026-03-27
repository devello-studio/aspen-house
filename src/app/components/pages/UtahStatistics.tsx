import { PUBLIC_IMAGES } from "../../../constants/publicImages";

export function UtahStatistics() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <img 
              src={PUBLIC_IMAGES.logo} 
              alt="Aspen Magdalene House Logo" 
              className="h-32 w-32 object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground mb-4">
            Utah Statistics
          </h1>
          <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding the scope of human trafficking in Utah
          </p>
        </div>
      </section>

      {/* Statistics Content Section */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Human Trafficking in Utah: The Numbers
            </h2>
            
            <div className="space-y-6 text-foreground">
              <p className="text-lg leading-relaxed">
                Human trafficking is a serious issue affecting communities across Utah. Understanding the statistics helps us recognize the scale of this problem and the urgent need for solutions like Aspen Magdalene House.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-primary/10 rounded-lg p-6 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">1,200+</div>
                  <p className="text-sm text-muted-foreground">
                    Human trafficking cases reported in Utah annually
                  </p>
                </div>

                <div className="bg-primary/10 rounded-lg p-6 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">75%</div>
                  <p className="text-sm text-muted-foreground">
                    Of survivors benefit from comprehensive support programs
                  </p>
                </div>

                <div className="bg-primary/10 rounded-lg p-6 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">2 Years</div>
                  <p className="text-sm text-muted-foreground">
                    Average recovery time in residential programs
                  </p>
                </div>

                <div className="bg-primary/10 rounded-lg p-6 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">0</div>
                  <p className="text-sm text-muted-foreground">
                    Thistle Farms communities currently in Utah
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Why Utah Needs Aspen Magdalene House
              </h3>

              <p className="text-lg leading-relaxed">
                Currently, Utah has no Thistle Farms communities, meaning survivors often have to leave the state to receive comprehensive care. Aspen Magdalene House will be the first of its kind in Utah, providing:
              </p>

              <ul className="list-disc list-inside space-y-3 ml-4 text-lg">
                <li>Safe housing for up to 2 years</li>
                <li>Trauma-informed therapy and counseling</li>
                <li>Job training and employment opportunities</li>
                <li>Educational support and life skills development</li>
                <li>Community integration and peer support</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-8">
                <p className="text-lg font-semibold text-foreground mb-2">
                  The Cost of Care vs. The Cost of Incarceration
                </p>
                <p className="text-base text-muted-foreground">
                  It costs approximately $1,250/month to provide comprehensive care at Aspen Magdalene House—less than the state's penal system and far more successful in breaking the cycle of trafficking and trauma.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Making a Difference
              </h3>

              <p className="text-lg leading-relaxed">
                With your support, Aspen Magdalene House can provide Utah survivors with the opportunity to heal and rebuild their lives without leaving their home state. Together, we can make a lasting impact on the lives of trafficking survivors in Utah.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
