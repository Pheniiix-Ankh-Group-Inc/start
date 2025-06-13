import ServiceCard from './ServiceCard';

const services = [
  {
    title: "Digital Infrastructure Strategy",
    description: [
      "Pull audit of your current setup",
      "Custom roadmap with tools, systems, planning",
      "Clear steps to align with your business goals"
    ],
    note: "Ideal for early-stage startups and new technical domains",
    price: 1500
  },
  {
    title: "MVP Acceleration Blueprint",
    description: [
      "Define what to build — and what to skip",
      "Structure your feature set, backend, and integrations",
      "Ready documentation for launch"
    ],
    note: "Ideal for pre-launch or grant-winning fintechs",
    price: 2000
  },
  {
    title: "Digital Transformation Consulting",
    description: [
      "Process mapping + system audit",
      "Recommendations for tools and automation",
      "Plan to improve KPIs, workflows & ROI"
    ],
    note: "Ideal for small businesses or grant-winning fintechs",
    price: 2000
  },
  {
    title: "Fintech & Blockchain Innovation Strategy",
    description: [
      "Use case analysis + solution design",
      "Security, compliance, and architecture insights",
      "Clarity on what to build and why"
    ],
    note: "Starting at fintech tier or more",
    price: 2500
  }
];

function ServicesSection() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Consulting Services Tailored to Your Growth Stage</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;