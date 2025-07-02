function WhoThisIsFor() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-base-content">
          Who This Is For?
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="card bg-base-100 shadow-md flex-1">
            <div className="card-body text-base-content">
              <h3 className="card-title text-xl mb-4">You're a good fit if you are...</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-success font-bold mr-2">✔</span>
                  A non-technical founder launching an MVP
                </li>
                <li>
                  <span className="text-success font-bold mr-2">✔</span>
                  A startup aligning tech with business goals
                </li>
                <li>
                  <span className="text-success font-bold mr-2">✔</span>
                  Small businesses ready to modernize systems
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md flex-1">
            <div className="card-body text-base-content">
              <h4 className="text-lg font-semibold mb-2">Client Snapshot</h4>
              <p className="italic text-gray-500">
                “Brice helped us map our MVP with clarity—saved us weeks of confusion.
                We had no tech lead, and now we have a plan.”
              </p>
              <p className="mt-3 font-medium text-base-content">— Startup Founder, Montreal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoThisIsFor;