function WhoThisIsFor() {
  return (
    <div className="grid md:grid-cols-2 gap-6 py-10">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Who This Is For?</h3>
        <ul className="list-disc pl-5 text-teal-300">
          <li>A non-technical founder launching an MVP</li>
          <li>A startup aligning tech with business goals</li>
          <li>Small businesses ready to modernize systems</li>
        </ul>
      </div>
      <div className="bg-[#162c54] p-6 rounded-xl text-sm">
        <h4 className="font-semibold mb-2">Client Snapshot</h4>
        <p className="italic text-gray-300">
          “Brice helped us map our MVP with clarity—saved us weeks of confusion.
          We had no tech lead, and now we have a plan.”
        </p>
        <p className="mt-2 font-medium text-white">— Startup Founder, Montreal</p>
      </div>
    </div>
  );
}

export default WhoThisIsFor;