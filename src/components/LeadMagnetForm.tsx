import React, { useState } from 'react';

function LeadMagnetForm() {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const validateEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

  const handleDownload = async () => {
    setError(null);
    setSuccess(null);

    if (!validateEmail(email)) {
      setError("Veuillez entrer une adresse email valide.");
      return;
    }

    // Si le téléchargement est déjà en cours, on affiche un message
    if (loading) {
      error ? setError("Un téléchargement est déjà en cours, veuillez patienter.") : setLoading(true);
      return;
    }
    setLoading(true);

    try {
      const response = await fetch('/api/leads/email-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l’envoi');
      }


      success ? setSuccess("Merci ! Le téléchargement va commencer.") : setLoading(false);

      // Téléchargement direct du fichier sans ouvrir nouvel onglet
      const fileUrl = '/lead-magnet.pdf';
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'lead-magnet.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setEmail('');
    } catch (err) {
      setError("Une erreur est survenue, veuillez réessayer.");
      console.error(err);
    } finally {
      setLoading(false);
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
