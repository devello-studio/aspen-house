import { Link } from "react-router";
import { Button } from "../ui/button";
import { PUBLIC_IMAGES } from "../../../constants/publicImages";

export function Survivors() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 md:py-20 bg-[#f5f1e8]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            Meet Brandy and Brittney
          </h1>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            Sisters Brittney and Brandy had an exceedingly difficult childhood. They grew up with parents who were addicted to alcohol and drugs. Their mother had an undiagnosed mental illness and was mentally and physically abusive. She was often out of the house leaving Brittney and Brandy home alone. These girls did not have the safety, security, and routines that many kids take for granted.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            As young adults, many of their experiences were not unlike those who experience early childhood trauma, early pregnancy, domestic violence, alcohol and drug addiction, and low self-esteem.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            These vulnerabilities made them targets of the men who trafficked them. These men worked hard to fill the needs they had been longing for throughout their young lives, claiming to love them and to want to take care of them, giving them food, shelter, and drugs. Little did these young women know that they were being groomed.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            After earning their love, their traffickers manipulated them into having sex for money and threatened them and their family if they didn&apos;t cooperate. Their failure to cooperate also resulted in the withholding of drugs and the denial of access to their phones, which prevented them from talking to their kids.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            After a year-and-a-half of mental, physical, and sexual abuse, Brittney and Brandy were arrested by the Unified Police Department Vice Squad, who they credit for saving their lives.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed mt-6">
            Both women have been sober for years and are working with Aspen Magdalene House to increase awareness of this horrific crime and help other women recover from the trauma resulting from human trafficking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button asChild size="lg" className="bg-yellow-400 text-primary hover:bg-yellow-500">
              <Link to="/get-involved">Donate</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              <Link to="/get-involved">Support our mission</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Working together to improve awareness of human trafficking in Utah and get victims to care
          </h2>
          <p className="text-lg opacity-95 mb-2">
            By supporting Aspen House, you can help get victims appropriate care
          </p>
          <p className="text-lg opacity-95">
            in one of Thistle Farm&apos;s 64 communities outside Utah
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            A heartbreaking beginning but a hopeful future
          </h2>
          <div className="flex justify-center mb-12">
            <img
              src={PUBLIC_IMAGES.aboutThistleBanner}
              alt="Aspen Magdalene House"
              className="w-full max-w-4xl rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="space-y-6 text-foreground/90 leading-relaxed italic text-base md:text-lg border-l-4 border-primary/30 pl-6 md:pl-8">
            <p>
              The neon red and blue flickering lights reflect off the Vice Squad car onto the back window and shined onto my sister&apos;s face. I only imagined the worst outcome. My world and my life would change, but how?
            </p>
            <p>
              Brittney and Brandy Garcia&apos;s childhood didn&apos;t reflect the innocence expected as children. It consisted of broken bottles leaving the shagged carpets matted down and stained, angry parents whose addictions felt more valued, which led to a divorce. Waiting on the sofa all night—wide awake with the lights out, so no one suspects we&apos;re home alone. While grasping onto my sister, I hear the crackling of an empty house. Patiently waiting to hear for mom&apos;s car to pull into the driveway, only hearing our hearts beating louder and louder consuming the empty room.
            </p>
            <p>
              The Garcia sisters would never know safety and security, which lead them into traumatic events in their early adult life. Each traumatic event would soon add up, leading the sisters to become targets of human trafficking. The men offered what seemed to be what the sisters had always been missing – safety and security. The men promised them the world, but only if they would do what they asked. When Brandy met her trafficker, he was good to her. He made sure that she had a place to stay and that she had all the drugs she needed. He fed and clothed her. He listened to her cries night after night because she missed her kids. She considered him her best friend, her everything. She loved him, but the sisters would soon learn these men were evil.
            </p>
            <p>
              While the men made claims about loving them and offering resources that the sisters needed to survive, there was a catch. The actions of these men weren&apos;t abnormal, they had a motive. They had perfectly crafted a method to groom the sisters slowly. The men would soon earn the trust and love of both sisters. But the love the men gave came with a cost. It wasn&apos;t long after the men gained trust before manipulating the sisters into having sex for money. If the sisters didn&apos;t want to cooperate, the men threatened to harm their family members.
            </p>
            <p>
              The sisters knew that they were in a dangerous situation, but thoughts would linger, &ldquo;what if he takes away my phone, how will I communicate with my children?&rdquo; &ldquo;Will they hurt me if I say no?&rdquo; And &ldquo;If I tried to leave, where would I even go?&rdquo;
            </p>
            <p>
              Eighteen months later, the sisters would see the neon red and blue flickering lights reflecting off the Vice Squad car onto the back window and shining onto each other&apos;s face. Imagining the worst, but soon realizing that they were trafficked for the last time on Jan. 8, 2015: &ldquo;the Unified Police Department Vice Squad saved our lives.&rdquo;
            </p>
            <p className="not-italic font-medium text-foreground">
              &ldquo;After years of being sober, we wanted to help other survivors of human trafficking heal from the trauma. Finding a place to heal after surviving human trafficking can be difficult. That&apos;s why working with Aspen Magdalene House will help us increase awareness around human trafficking while simultaneously providing survivors a nourishing home-like residence to thrive in.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
