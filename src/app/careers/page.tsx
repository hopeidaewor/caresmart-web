import HeroSection from "@/components/HeroSection";
import Button from "@/components/Button";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import HorizontalDivider from "@/components/HorizontalDivider";

export default function Careers() {
  const jobListings = [
    {
      id: 1,
      title: "Care Coordinator",
      department: "Case Management",
      location: "Atlanta, GA",
      type: "Full-time",
      description:
        "Join our team as a Care Coordinator providing comprehensive support and coordination for client care journeys.",
    },
    {
      id: 2,
      title: "Case Manager",
      department: "Case Management",
      location: "Atlanta, GA",
      type: "Full-time",
      description:
        "Lead client assessments and develop personalized care plans that improve health outcomes and quality of life.",
    },
    {
      id: 3,
      title: "Benefits Specialist",
      department: "Benefits Navigation",
      location: "Remote",
      type: "Full-time",
      description:
        "Help clients navigate complex benefit programs and access available resources with expert guidance.",
    },
    {
      id: 4,
      title: "Program Manager",
      department: "Operations",
      location: "Atlanta, GA",
      type: "Full-time",
      description:
        "Oversee program operations and lead a team of case management professionals in delivering excellence.",
    },
  ];

  const benefits = [
    {
      icon: "🏥",
      title: "Health Insurance",
      description: "Comprehensive medical, dental, and vision coverage",
    },
    {
      icon: "🎓",
      title: "Professional Development",
      description: "Ongoing training, certifications, and career growth opportunities",
    },
    {
      icon: "⏰",
      title: "Flexible Hours",
      description: "Work-life balance with flexible scheduling options",
    },
    {
      icon: "🎯",
      title: "Meaningful Work",
      description: "Make a real difference in clients' lives every day",
    },
    {
      icon: "💰",
      title: "Competitive Pay",
      description: "Salaries that reflect experience and market rates",
    },
    {
      icon: "🚀",
      title: "Growth Potential",
      description: "Clear pathways for advancement and leadership roles",
    },
  ];

  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Join Our Team"
        subtitle="Be part of a mission to improve lives through compassionate case management"
      />

      {/* Why Work Here */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Why Work at Caresmart" centered={false} />
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            At Caresmart, we're more than just a case management company—we're a team of
            dedicated professionals committed to changing lives. If you're passionate about
            healthcare, driven by compassion, and want to make a real difference, we'd love to
            have you on our team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} hoverable>
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <HorizontalDivider className="my-8" />

      {/* Culture Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-[#EBF6FD] to-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We believe that our team's wellbeing directly impacts the care we provide. We
                foster a culture of collaboration, continuous learning, and mutual respect.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every team member has a voice. We celebrate successes together, support each
                other through challenges, and grow as professionals while making a real impact
                on our community.
              </p>
            </div>
            <Card variant="highlight" className="p-8">
              <blockquote className="text-lg text-gray-700 leading-relaxed">
                "What I love most about working at Caresmart is knowing that our work directly
                improves people's lives. The team genuinely cares about both our clients and each
                other."
              </blockquote>
              <p className="text-gray-900 font-semibold mt-6">— Team Member, Caresmart</p>
            </Card>
          </div>
        </div>
      </section>

      <HorizontalDivider className="my-8" />

      {/* Open Positions */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Open Positions"
            subtitle="We're growing and looking for talented individuals to join us"
          />

          {jobListings.length > 0 ? (
            <div className="space-y-6">
              {jobListings.map((job) => (
                <Card key={job.id} hoverable className="p-8">
                  <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="inline-block bg-[#EBF6FD] text-[#0F5A82] px-3 py-1 rounded text-sm font-medium">
                          {job.department}
                        </span>
                        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-medium">
                          {job.location}
                        </span>
                        <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm font-medium">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-gray-700 text-lg">{job.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Button href="/contact">Apply Now</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 mb-6">
                We don't currently have open positions, but we're always interested in hearing
                from talented professionals.
              </p>
              <Button href="/contact">Get in Touch</Button>
            </div>
          )}
        </div>
      </section>

      <HorizontalDivider className="my-8" />

      {/* Application Process */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-[#EBF6FD] to-green-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Our Hiring Process" centered={false} />
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1C93D1] text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Application</h4>
                <p className="text-gray-700">
                  Submit your resume and cover letter through our online application form.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1C93D1] text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Initial Screening</h4>
                <p className="text-gray-700">
                  Our HR team reviews applications and contacts promising candidates.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1C93D1] text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Interview</h4>
                <p className="text-gray-700">
                  Meet with our team for interviews to discuss your experience and fit.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1C93D1] text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Decision & Offer</h4>
                <p className="text-gray-700">
                  Selected candidates receive an offer and begin their journey with Caresmart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            If you don't see an exact match but believe you'd be a great fit for Caresmart,
            reach out. We'd love to hear from you.
          </p>
          <Button href="/contact">Contact Us</Button>
        </div>
      </section>
    </>
  );
}
