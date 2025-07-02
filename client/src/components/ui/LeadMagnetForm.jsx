import React, { useState } from 'react';

function LeadMagnetForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  const handleDownload = async () => {
    setError(null);
    setSuccess(null);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // If a download is already in progress, show a message
    if (loading) {
      setError("Download already in progress, please wait.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/leads/email-download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) { throw new Error('Failed to send email'); }

      setSuccess("Thanks! Your download will start shortly.");
      setLoading(false);

      // Téléchargement direct du fichier sans ouvrir nouvel onglet
      const fileUrl = await fetch(`${import.meta.env.VITE_API_BASE_URL}/leads/lead-magnet.pdf`);

      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'lead-magnet.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setEmail('');
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[var(--color-bg-alt)] p-8 rounded-xl max-w-6xl shadow-md mx-auto mt-10">
      <h3 className="text-2xl font-bold mb-2">Want a head start?</h3>
      <p className='mb-4'>Download “The 5 Step Digital Roadmap for startups” and get a free clarity call.</p>

      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Email address"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleDownload}
          disabled={loading}
          className={`btn btn-primary w-full sm:w-auto ${loading ? 'loading' : ''}`}
        >
          {loading ? 'Loading…' : 'Download Now'}
        </button>
      </div>

      {error && (
        <div className="mt-4 text-error text-sm">{error}</div>
      )}
      {success && (
        <div className="mt-4 text-success text-sm">{success}</div>
      )}

    </section>

  );
}

export default LeadMagnetForm;
