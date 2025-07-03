function WhoThisIsFor() {
  return (
    <section className="text-[var(--color-bg-alt)] py-10">
      <div className="max-w-6xl mx-auto px-4">

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="card shadow-md flex-1">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Who This Is For?</h2>
              <ul className="space-y-2">
                <li>
                  <span className="text-[var(--color-primary)] font-bold mr-2">✔</span>
                  A non-technical founder launching an MVP
                </li>
                <li>
                  <span className="text-[var(--color-primary)] font-bold mr-2">✔</span>
                  A startup aligning tech with business goals
                </li>
                <li>
                  <span className="text-[var(--color-primary)] font-bold mr-2">✔</span>
                  Small businesses ready to modernize systems
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-[var(--color-bg-secondary)] shadow-md flex-1">
            <div className="card-body">
              <h4 className="card-title text-2xl mb-4">Client Snapshot</h4>
              <p className="italic ">
                “Brice helped us map our MVP with clarity—saved us weeks of confusion.
                We had no tech lead, and now we have a plan.”
              </p>
              <p className="mt-3 font-medium ">— Startup Founder, Montreal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoThisIsFor;