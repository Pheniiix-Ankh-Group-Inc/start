import { useEffect } from 'react';

function Appointment() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="bg-[#011D40] min-h-screen text-white px-4 sm:px-6 py-10 sm:py-12 font-montserrat">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center mb-6 sm:mb-8 px-2">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight leading-tight mb-4 text-teal-400">
          Book Your Free Clarity Call
        </h1>
        <p className="text-base sm:text-[16px] font-normal leading-relaxed text-gray-300">
          Let’s talk about your technical challenges, project ideas, or how to move to the next stage with clarity and confidence.
        </p>
      </section>

      {/* Calendly Embed */}
      <section className="max-w-3xl mx-auto bg-white p-4 sm:p-6 rounded-xl shadow-xl">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/pheniiixankhtechnologies-info/30min?hide_event_type_details=1"
          style={{
            minWidth: '100%',
            height: '700px',
          }}
        ></div>
      </section>

      {/* Footer */}
      <section className="text-center text-xs sm:text-sm text-white/60 mt-6 sm:mt-8 px-2">
        <p>
          The call is commitment-free. You’ll leave with greater clarity either way.
        </p>
      </section>
    </main>
  );
}

export default Appointment;
