import React from "react";
import { FaComments, FaPhoneAlt } from "react-icons/fa";

const HelpingSection = () => {
  // Replace these values with your own
  const whatsappNumber = "919392932943"; // ✅ without '+' sign
  const phoneNumber = "+919392932943";

  // WhatsApp & Call Links
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section
      className="relative bg-gray-900 text-white text-center py-24 px-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/izqq5ffwt/graduation-bg.jpg?updatedAt=1762254589000')", // replace with your image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-lg font-light mb-3">Helping</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
          1 Million Students Like <span className="text-blue-400">You.</span>
        </h2>
        <p className="text-lg font-light mb-8">Go to Study Abroad.</p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition"
          >
            <FaComments /> LIVE CHAT
          </button>

          <button
            onClick={handleCall}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition"
          >
            <FaPhoneAlt /> CALL NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HelpingSection;
