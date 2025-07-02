import CallToAction from "./CallToAction";

function NewsletterSection() {
  return (
    <div className="text-[var(--color-bg-alt)] text-center space-y-4">
      <h4 className="card-title text-xl font-bold ">Stay Smart With Your Tech Decisions</h4>
      <p className="text-base">
        Join Brice’s newsletter for tips on launching, scaling, and tech-strategy — once a month, no spam.
      </p>
      <CallToAction />
    </div>
  );
}

export default NewsletterSection;