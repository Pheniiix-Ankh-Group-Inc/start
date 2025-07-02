import NewsletterSection from "./NewsletterSection";
import FAQSection from "./FAQSection";

function NewsletterAndFAQSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Bloc Newsletter */}
        <div className="flex-1">
          <div className="card bg-base-100 shadow-md h-full">
            <div className="card-body justify-between">
              <NewsletterSection />
            </div>
          </div>
        </div>

        {/* Bloc FAQ */}
        <div className="flex-1">
          <div className="card bg-base-100 shadow-md h-full">
            <div className="card-body">
              <FAQSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterAndFAQSection;
