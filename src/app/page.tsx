import HeroSection from "@/components/HeroSection";
import Button from "@/components/Button";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import HorizontalDivider from "@/components/HorizontalDivider";

export default function Home() {
  const services = [
    {
      title: "Care Coordination",
      description:
        "We help clients navigate complex healthcare systems, coordinate appointments, and ensure seamless care transitions.",
      icon: "📋",
    },
    {
      title: "Assessment Services",
      description:
        "Comprehensive evaluations to identify client needs, strengths, and develop personalized care plans.",
      icon: "🔍",
    },
    {
      title: "Benefits Navigation",
      description:
        "Expert guidance on accessing available resources, insurance coverage, and government benefits programs.",
      icon: "💳",
    },
  ];

  const impacts = [
    { stat: "2,500+", label: "Clients Served" },
    { stat: "95%", label: "Satisfaction Rate" },
    { stat: "50+", label: "Team Members" },
    { stat: "15+", label: "Years of Experience" },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Smarter Case Management for Better Care Outcomes"
        subtitle="Empowering individuals and families in Georgia with compassionate, expert-driven case management services."
        cta={<Button href="/contact">Get Started Today</Button>}
      />

      {/* Services Overview */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Our Core Services"
            subtitle="Comprehensive solutions designed to meet your unique needs"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} hoverable variant="default">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button href="/services" variant="outline" size="sm">
                  Learn More →
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <HorizontalDivider className="my-8" />

      {/* About Snapshot */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Caresmart is a dedicated team of care professionals committed to improving lives through intelligent, compassionate case management. We partner with clients, families, and healthcare providers to create pathways to better health and wellbeing.
              </p>
              <Button href="/about">Learn Our Story</Button>
            </div>
            <Card variant="highlight" className="p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                "To deliver person-centered case management that empowers individuals to achieve their health and life goals with dignity and support."
              </p>
            </Card>
          </div>
        </div>
      </section>

      <HorizontalDivider className="my-8" />

      {/* Impact Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Our Impact" subtitle="Making a real difference in our community" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impacts.map((item) => (
              <Card
                key={item.label}
                variant="highlight"
                className="text-center py-8"
              >
                <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {item.stat}
                </p>
                <p className="text-gray-700 font-medium">{item.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <HorizontalDivider className="my-8" />

      {/* Testimonial */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-blue-500 to-green-500">
        <div className="max-w-3xl mx-auto text-center text-white">
          <blockquote className="text-2xl md:text-3xl font-semibold mb-6 leading-relaxed">
            "Caresmart transformed how we approach case management. Their team's expertise and
            dedication have directly improved outcomes for our clients."
          </blockquote>
          <p className="text-lg font-medium">— Healthcare Partner, Georgia</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our team or let us help you navigate your care journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/services">Explore Services</Button>
            <Button href="/careers" variant="secondary">
              We're Hiring
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
