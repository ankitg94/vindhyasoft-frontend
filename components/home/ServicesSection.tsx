import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section className="relative z-10 bg-[#0f1630] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-14 text-white">
          Our Professional Services
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <ServiceCard
            title="Custom Software"
            description="Tailor-made solutions designed to fit your business needs."
          />
          <ServiceCard
            title="Secure Auth Systems"
            description="JWT, refresh tokens, role-based access & security audits."
          />
          <ServiceCard
            title="Scalable Backends"
            description="High-performance APIs built for growth and reliability."
          />
        </div>
      </div>
    </section>
  );
}
