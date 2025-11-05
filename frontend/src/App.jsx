import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import CountryGuide from "./components/CountryGuide/CountryGuide.jsx";
import Footer from "./components/Footer/Footer.jsx";
import WhatsAppButton from "./components/WhatsappButoon/WhatsappButton.jsx";
import AdvancedTools from "./components/AdvancedTools/AdvancedTools.jsx";
import HelpingSection from "./components/HelpingSection/HelpingSection.jsx";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre.jsx";

import Mentor from "./pages/Mentor/Mentor.jsx";
import Partner from "./pages/Partner/Partner.jsx";
import Counsellor from "./pages/Counsellor/Counsellor.jsx";

import UsaUniversities from "./pages/UsaUniversities/UsaUniversities.jsx";
import UniversityAustralia from "./pages/UniversityAustralia/UniversityAustralia.jsx";
import CanadaUniversities from "./pages/CanadaUniversities/CanadaUniversities.jsx";
import UniversityGermany from "./pages/UniversityGermany/UniversityGermany.jsx";
import UniversityUK from "./pages/UniversityUK/UniversityUK.jsx";
import UniversityZealand from "./pages/UniversityZealand/UniversityZealand.jsx";
import UniversityFrance from "./pages/UniversityFrance/UniversityFrance.jsx";
import UniversitySweden from "./pages/UniversitySweden/UniversitySweden.jsx";
import UniversityIreland from "./pages/UniversityIreland/UniversityIreland.jsx";

import HowItWorks from "./pages/HowItWorks/HowItWorks.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AdvancedTools />
      <HelpingSection />
      <WhoWeAre />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/counsellor" element={<Counsellor />} />
        <Route path="/usa" element={<UsaUniversities />} />
        <Route path="/australia" element={<UniversityAustralia />} />
        <Route path="/canada" element={<CanadaUniversities />} />
        <Route path="/germany" element={<UniversityGermany />} />
        <Route path="/uk" element={<UniversityUK />} />
        <Route path="/new-zealand" element={<UniversityZealand />} />
        <Route path="/france" element={<UniversityFrance />} />
        <Route path="/sweden" element={<UniversitySweden />} />
        <Route path="/ireland" element={<UniversityIreland />} />
        <Route path="/how" element={<HowItWorks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
