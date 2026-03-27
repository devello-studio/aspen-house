export function SpecialEvents() {
  return (
    <div className="min-h-screen bg-[#1f4d3a] text-white relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto mb-16">
          <h1 className="text-6xl md:text-8xl font-serif italic text-[#e8b878] mb-8 text-center drop-shadow-lg">
            Aspen House
            <br />
            2026 Gala
          </h1>

          <div className="text-center mb-8">
            <p className="text-3xl md:text-4xl italic mb-2" style={{ fontFamily: "serif" }}>
              April 16, 2026
            </p>
            <p className="text-3xl md:text-4xl italic" style={{ fontFamily: "serif" }}>
              Cottonwood Club
            </p>
          </div>

          <div className="border-t border-[#e8b878] my-8"></div>

          <p className="text-xl md:text-2xl leading-relaxed text-center max-w-3xl mx-auto">
            Join us as for a celebratory evening as we shine a spotlight on a successful first year in our new home and raise critical funds to continue our work.
          </p>
        </section>

        {/* Sponsorship Section */}
        <section className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Sponsorship Levels */}
            <div className="space-y-8">
              {/* Presenting Sponsor */}
              <div>
                <h3 className="text-2xl font-bold mb-2">Presenting Sponsor</h3>
                <p className="text-xl mb-1">$15,000</p>
                <p className="text-sm italic mb-4">(one available)</p>
              </div>

              {/* Matching Sponsor */}
              <div className="opacity-70">
                <h3 className="text-2xl font-bold mb-2">Matching Sponsor</h3>
                <p className="text-xl mb-1">$10,000</p>
                <p className="text-sm italic mb-4">(no longer available)</p>
              </div>

              {/* Aspen Leaf Sponsor */}
              <div>
                <h3 className="text-2xl font-bold mb-2">Aspen Leaf Sponsor</h3>
                <p className="text-xl mb-4">$2,500</p>
              </div>

              {/* Table/Tickets */}
              <div>
                <h3 className="text-2xl font-bold mb-2">Table/Tickets</h3>
                <p className="text-xl mb-1">$2,000 for ten seats,</p>
                <p className="text-xl">$200 each</p>
              </div>
            </div>

            {/* Right Column - Benefits */}
            <div className="space-y-8">
              {/* Presenting Sponsor Benefits */}
              <div className="min-h-[120px]">
                <p className="text-lg leading-relaxed">
                  Logo and mention on all gala materials, including website, print, and social media
                  <br />
                  VIP table of ten
                  <br />
                  Opening remarks and spotlight at gala
                </p>
              </div>

              {/* Matching Sponsor Benefits */}
              <div className="min-h-[120px] opacity-70">
                <p className="text-lg leading-relaxed">
                  Logo mention on all gala materials, including website, printe, and social media
                  <br />
                  VIP table of ten
                </p>
              </div>

              {/* Aspen Leaf Sponsor Benefits */}
              <div className="min-h-[90px]">
                <p className="text-lg leading-relaxed">
                  Evening name recognition
                  <br />
                  Social media mention
                  <br />
                  Table of ten
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Flyer download + event site */}
        <section className="mt-16 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <a
            href="/gala-flyer.pdf"
            download
            className="inline-block bg-[#e8b878] text-[#1f4d3a] px-8 py-3 rounded-md hover:bg-[#dca966] transition-colors font-semibold shadow-lg"
          >
            Download Gala Flyer
          </a>
          <a
            href="https://aspenhousegala2026.auctria.events"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-[#e8b878] text-[#e8b878] px-8 py-3 rounded-md hover:bg-[#e8b878]/10 transition-colors font-semibold shadow-lg"
          >
            Visit Event Site
          </a>
        </section>
      </div>
    </div>
  );
}
