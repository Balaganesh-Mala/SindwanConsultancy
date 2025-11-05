import { FaGraduationCap, FaUniversity, FaMoneyBillWave } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaGraduationCap size={40} className="text-orange-600" />,
      title: "Admission Guidance",
      desc: "Personalized admission counseling to get into your dream university.",
    },
    {
      icon: <FaMoneyBillWave size={40} className="text-orange-600" />,
      title: "Education Loans",
      desc: "Affordable education financing and assistance with loan applications.",
    },
    {
      icon: <FaUniversity size={40} className="text-orange-600" />,
      title: "University Finder",
      desc: "Explore top universities and programs tailored to your career goals.",
    },
  ];
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
              <div className="flex justify-center mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
