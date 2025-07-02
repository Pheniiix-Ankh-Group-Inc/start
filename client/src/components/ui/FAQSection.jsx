function FAQSection() {
  return (
    <div className=" text-[var(--color-bg-alt)] space-y-4">
      <h3 className="text-xl font-bold text-center mb-4">FAQ</h3>
      <div className="space-y-4">
        <div className="collapse collapse-arrow ">
          <input type="checkbox" />
          <div className="collapse-title text-md font-medium">
            Do I need to be technical to work with you?
          </div>
          <div className="collapse-content">
            No: My job is to bring clarity—you don’t need to speak code.
          </div>
        </div>
        <div className="collapse collapse-arrow ">
          <input type="checkbox" />
          <div className="collapse-title text-md font-medium">
            Do you build or code the solution?
          </div>
          <div className="collapse-content">
              No. I’m your strategist: I map the path, your dev team (or partners) can execute.
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
