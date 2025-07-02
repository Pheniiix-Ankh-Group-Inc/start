import CallToAction from "./CallToAction";

function NewsletterSection() {
  return (
    <div className="text-center space-y-4">
      <h4 className="text-xl font-bold text-base-content">Stay Smart With Your Tech Decisions</h4>
      <p className="text-base text-base-content">
        Join Brice’s newsletter for tips on launching, scaling, and tech-strategy — once a month, no spam.
      </p>
      <CallToAction />
    </div>
  );
}

export default NewsletterSection;