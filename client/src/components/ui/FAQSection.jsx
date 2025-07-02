function FAQSection() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-center mb-4 text-base-content">FAQ</h3>
      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-md font-medium">
            <h4 className="">Do I need to be technical to work with you?</h4>
          </div>
          <div className="collapse-content">
            <p className="text-gray-300">No: My job is to bring clarity—you don’t need to speak code.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-md font-medium">
            <h4 className="">Do you build or code the solution?</h4>
          </div>
          <div className="collapse-content">
            <p className="text-gray-300">
              No. I’m your strategist: I map the path, your dev team (or partners) can execute.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
