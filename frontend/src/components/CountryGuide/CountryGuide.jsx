const countries = [
  { name: "USA", img: "https://flagcdn.com/us.svg" },
  { name: "UK", img: "https://flagcdn.com/gb.svg" },
  { name: "Canada", img: "https://flagcdn.com/ca.svg" },
  { name: "Australia", img: "https://flagcdn.com/au.svg" },
  { name: "Germany", img: "https://flagcdn.com/de.svg" },
];

const CountryGuide = () => {
  return (
    <section id="country" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Country Guide</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {countries.map((c, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-4 hover:scale-105 transition">
              <img src={c.img} alt={c.name} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="font-semibold">{c.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryGuide;
