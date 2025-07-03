function HeroSection() {
  return (
    <section className="hero ">
      <div className="hero-content text-center mx-auto px-4">
        <div>
          <div><img src="../src/assets/bm.png" alt="Hero Image" className="h-20 w-auto sm:h-24 mx-auto mb-6" /></div>

          <h1 className="text-[var(--color-bg-alt)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">Build Smarter, Scale Faster — with Expert Tech Consulting for Startups and Small Businesses</h1>

          <p className="text-[var(--color-bg-alt)] text-lg sm:text-xl mb-4">
            You've got the vision. The idea, maybe even a prototype. But when choosing the right tech,
            building your digital infrastructure, or scaling with confidence—you’re not sure what steps to take.
          </p>

          <p className="text-teal-300 text-lg sm:text-xl font-semibold mb-4">
            I’m Brice Mimifir — a digital strategy consultant with over 10 years of experience in enterprise IT and full-stack development.
          </p>

          <p className="text-[var(--color-bg-alt)] text-lg sm:text-xl mb-6">
            I help startups, small businesses and technical teams design clear actionable tech regimens—without the confusion, wasted spend,
            or delays. Whether you're launching your MVP, scaling operations, or undergoing digital transformation, I help you make strategic
            decisions that drive results.
          </p>
        </div>
      </div>
    </section>

  );
}

export default HeroSection;
