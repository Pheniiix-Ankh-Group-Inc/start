import CallToAction from "./CallToAction";

function NewsletterSection() {
  return (
    <div className="text-[var(--color-bg-alt)] space-y-4">
      <h4 className="card-title text-xl font-bold ">Stay Smart With Your Tech Decisions</h4>
      <p className="text-base">
        Join Brice’s newsletter for tips on launching, scaling, and tech-strategy — once a month, no spam.
      </p>
      <div className="join my-8">
        <div>
          <label className="input input-lg bg-white validator join-item">
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <button className="btn btn-primary join-item">Join</button>
      </div>
    </div>
  );
}

export default NewsletterSection;