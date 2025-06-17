import React, { useState } from 'react';

function LeadMagnetForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleDownload = async () => {
    if (!email) return alert('Please enter your email.');

    // Appel à l'API GHL
    try {
      const response = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_GHL_API_KEY}`
        },
        body: JSON.stringify({
          email,
          locationId: import.meta.env.VITE_GHL_LOCATION_ID,
          firstName: "Lead Magnet",
          customField: "Lead Magnet Download"
        })
      });

      if (response.ok) {
        setSubmitted(true);
        window.open('/lead-magnet.pdf', '_blank'); // Téléchargement
      } else {
        alert("Erreur lors de l'envoi à GoHighLevel");
      }
    } catch (err) {
      console.error(err);
      alert("Une erreur est survenue");
    }
  };

  return (
    <div className="bg-gray-100 text-black p-6 rounded-lg space-y-4">
      <h3 className="text-xl font-semibold">Want a head start?</h3>
      <p>Download “The 5 Step Digital Roadmap for startups” and get a free clarity call.</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Email address"
          className="p-3 rounded border border-gray-300 flex-grow"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleDownload}
          className="bg-teal-400 text-[#0A1E3F] font-bold py-3 px-6 rounded hover:bg-teal-300 transition"
        >
          Download Now
        </button>
      </div>
    </div>
  );
}

export default LeadMagnetForm;
