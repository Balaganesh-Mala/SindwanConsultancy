import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
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
import Advising from "./pages/Advising/Advising.jsx";
import SOPServices from "./pages/SOPServices/SOPServices.jsx";

import Bachelor from "./pages/Bachelor/Bachelor.jsx";
import Master from "./pages/Master/Master.jsx";
import Phd from "./pages/Phd/Phd.jsx";

import RoadmapSection from "./pages/RoadmapSection/RoadmapSection.jsx";

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
        <Route path="/bachelors" element={<Bachelor/>}/>
        <Route path="/masters" element={<Master/>}/>
        <Route path="/phd" element={<Phd/>}/>
        <Route path="/advising" element={<Advising />} />
        <Route path="/sop-services" element={<SOPServices />} />
        <Route path="/roadmap" element={<RoadmapSection />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
