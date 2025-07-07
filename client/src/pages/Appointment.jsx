function Appointment() {
  return (
    <main className="bg-[#011D40] min-h-screen text-white px-6 py-12 font-montserrat">
      <section className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.2] mb-4 text-teal-400">
          Book Your Free Clarity Call
        </h1>
        <p className="text-[16px] font-normal leading-[1.6] text-gray-300">
          Let’s talk about your technical challenges, project ideas, or how to move to the next stage with clarity and confidence.
        </p>
      </section>

      <section className="max-w-3xl mx-auto bg-white p-4 sm:p-6 rounded-xl shadow-xl">

        <div className="calendly-inline-widget" 
data-url="https://calendly.com/pheniiixankhtechnologies-info/30min?hide_event_type_details=1" style={{ minWidth: '320px', height: '700px' }}></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </section>

      <section className="text-center text-sm text-white/60 mt-8">
        <p>The call is commitment-free. You’ll leave with greater clarity either way.</p>
      </section>
    </main>
  );
}

export default Appointment;
