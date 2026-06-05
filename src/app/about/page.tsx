import HeroSection from "@/components/HeroSection";
import Button from "@/components/Button";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import HorizontalDivider from "@/components/HorizontalDivider";

export default function About() {
  const values = [
    {
      title: "Compassion",
      description: "We listen, understand, and genuinely care about each person's journey.",
    },
    {
      title: "Excellence",
      description: "We deliver high-quality services backed by expertise and continuous learning.",
    },
    {
      title: "Integrity",
      description: "We act with honesty and uphold the highest ethical standards.",
    },
    {
      title: "Empowerment",
      description: "We enable clients to take control of their health and life goals.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <HeroSection
        title="About Caresmart"
        subtitle="Dedicated to improving lives through intelligent case management"
      />

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card variant="highlight" className="p-8">
              <h3 className="text-2xl font-bold text-[#1C93D1] mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To deliver person-centered case management that empowers individuals to achieve
                their health and life goals with dignity and support.
              </p>
            </Card>
            <Card variant="highlight" className="p-8">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                A world where every person has access to compassionate, expert-driven care
                management that improves health outcomes and quality of life.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <HorizontalDivider className="my-8" />

      {/* Our Story */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-[#EBF6FD] to-green-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Our Story" centered={false} underline={false} />
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              Caresmart was founded on a simple belief: people deserve care management that
              listens, understands, and adapts to their unique needs. With over 15 years of
              experience in healthcare and social services, our team has developed proven
              methodologies to improve outcomes for clients across Georgia.
            </p>
            <p className="mb-6">
              What started as a small team of passionate case managers has grown into a trusted
              partner for individuals, families, and healthcare organizations. We've served over
              2,500 clients and continue to expand our impact across the state.
            </p>
            <p>
              Today, we're committed to staying at the forefront of case management innovation,
              training our team in the latest best practices, and maintaining the highest standards
              of care and ethical practice.
            </p>
          </div>
        </div>
      </section>

      <HorizontalDivider className="my-8" />

      {/* Core Values */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Our Core Values" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <Card key={value.title} hoverable>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <HorizontalDivider className="my-8" />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-[#EBF6FD] to-green-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Why Choose Caresmart" centered={false} />
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Expert Team</h4>
                <p className="text-gray-700">
                  Our case managers are certified, experienced professionals committed to ongoing
                  education and best practices.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Personalized Approach</h4>
                <p className="text-gray-700">
                  We don't believe in one-size-fits-all solutions. Every care plan is tailored to
                  individual needs and goals.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Strong Results</h4>
                <p className="text-gray-700">
                  Our track record speaks for itself: high client satisfaction, improved health
                  outcomes, and successful goal achievement.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Community Focused</h4>
                <p className="text-gray-700">
                  We're deeply embedded in Georgia's communities and committed to addressing
                  local healthcare disparities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're seeking services or interested in joining our team, we'd love to hear
            from you.
          </p>
          <Button href="/contact">Get in Touch</Button>
        </div>
      </section>
    </>
  );
}
