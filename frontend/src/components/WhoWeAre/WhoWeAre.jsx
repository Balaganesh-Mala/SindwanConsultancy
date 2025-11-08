import React from "react";
import { useNavigate } from "react-router-dom";
import become_a_mentor from "../../assets/become_a_mentor.png"
import become_a_patner from "../../assets/become_a_patner.jpg"
import become_a_counsellor from "../../assets/become_a_counsellor.jpg"


const cards = [
  {
    title: "BECOME A MENTOR",
    image:
      `${become_a_mentor}`,
    path: "/mentor",
  },
  {
    title: "BECOME A PARTNER",
    image:
      `${become_a_patner}`,
    path: "/partner",
  },
  {
    title: "BECOME A COUNSELLOR",
    image:
      `${become_a_counsellor}`,
    path: "/counsellor",
  },
];

const WhoWeAre = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f7f6f2] py-16 text-center px-6 font-poppins">
      <div className="max-w-6xl mx-auto">
        <img
          src="https://ik.imagekit.io/izqq5ffwt/ChatGPT%20Image%20Nov%204,%202025,%2003_31_41%20PM.png"
          alt="Logo Icon"
          className="w-10 h-10 mx-auto mb-4"
        />
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Who We Are
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
          We are a network acting as a bridge to connect universities and
          students for overseas education through our AI-enabled advanced
          matching algorithm — helping students get the highest amount of
          scholarships and helping universities find special talent.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition mb-12">
          ABOUT US
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.path)}
              className="cursor-pointer bg-white shadow-md hover:shadow-xl rounded-md transition transform hover:scale-[1.03] overflow-hidden"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-56 object-contain bg-white p-4"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 uppercase tracking-wide">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
