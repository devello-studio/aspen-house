import { ImageWithFallback } from "../figma/ImageWithFallback";
import { BOARD_IMAGES } from "../../../constants/publicImages";

const boardMembers = [
  {
    name: "Pamela Atkinson",
    title: "Vice-Chair",
    bio: "Lifetime dedication to making a difference.",
    image: BOARD_IMAGES.pamela,
  },
  {
    name: "Jana Christianson",
    title: "Board Chair / Fundraising",
    bio: "Capital Campaign Lead",
    image: BOARD_IMAGES.jana,
  },
  {
    name: "Brittney Garcia",
    title: "Board Member",
    bio: "Survivor Leader",
    image: BOARD_IMAGES.brittney,
  },
  {
    name: "Lezlee Jensen",
    title: "Board Treasurer",
    bio: "Businesswoman",
    image: BOARD_IMAGES.lezlee,
  },
  {
    name: "Adrienne Egan",
    title: "Board Secretary",
    bio: "BYU non-profit student",
    image: BOARD_IMAGES.adrienne,
  },
  {
    name: "Felita Beardsley",
    title: "Board Member",
    bio: "Fundraising Committee",
    image: BOARD_IMAGES.felita,
  },
  {
    name: "Gary Free",
    title: "Board Member",
    bio: "Fundraising Committee",
    image: BOARD_IMAGES.gary,
  },
  {
    name: "Jackie Lefferts",
    title: "Board Member",
    bio: "Programming Committee",
    image: BOARD_IMAGES.jackie,
  },
  {
    name: "Paul Murphy",
    title: "Board Member",
    bio: "Media Expert",
    image: BOARD_IMAGES.paul,
  },
  {
    name: "Ann Frandsen",
    title: "Board Member",
    bio: "Financial Advisor",
    image: BOARD_IMAGES.ann,
  },
  {
    name: "Brandy Farmer",
    title: "Board Member",
    bio: "Community Advocate/Activist",
    image: BOARD_IMAGES.brandy,
  },
  {
    name: "Amy Leiniger",
    title: "Board Member",
    bio: "Social Enterprise Committee",
    image: BOARD_IMAGES.amy,
  },
];

export function OurBoard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground mb-4">
            Our Board
          </h1>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl font-semibold text-foreground mb-3">
              Working together to improve lives in Utah
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Aspen Magdalene Board is a working board made up of community and industry leaders and volunteers who believe we must do better in caring for Utah's victims of human trafficking.
            </p>
          </div>
        </div>
      </section>

      {/* Board Members Grid */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[3/4] overflow-hidden bg-gray-200">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-1 text-xs">
                    {member.title}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}