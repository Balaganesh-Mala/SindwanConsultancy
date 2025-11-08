import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroCountry from "../../components/HeroCountry/HeroCountry";
import australiaBanner from "../../assets/educationBanner.jpg";
import "./UniversityAustralia.css";

const UniversityAustralia = () => {
  return (
    <>
      <Navbar />
      <HeroCountry countryName="Australia" bannerImage={australiaBanner} />

      <div className="australia-container">
        <section className="section">
          <h2>Why Study in Australia</h2>
          <p>
            Australia promotes innovation, creativity and independent thoughts for students who study at their universities. International students’ study center is designed to keep students informed on the programs and updates from universities in Australia. There are thousands of courses offered throughout the universities in the country. International students who study in Australia universities and colleges find education challenging, fun and rewarding. The country is full of opportunities to live, grow and learn. An increasing number of Indian students are opting for Australia to study abroad for its world-class education, post study work opportunities in Australia and it’s excellent quality of living.
          </p>
        </section>

        <section className="section">
          <h2>Facts about Australia</h2>
          <p>
            Whatever course you choose to undertake, you’ll be assured of unbeatable academic excellence and support system for international students. All available intakes for Australia.
          </p>
        </section>

        <section className="section">
          <h2>Intake</h2>
          <p>
            Australia generally has two intakes, i.e., February and July, with few Universities offering multiple intakes in September & November. You should start your admission process around six months before the application deadline. Typically most universities have three deadlines during one intake.
          </p>
        </section>

        <section className="section">
          <h2>Universities in Australia</h2>
          <p>
            Australia is recognized among the world’s top study destinations with eight of its universities in the top universities in the QS world ranking. Studying in Australia’s best universities is a dream come true for many Indian and International students. Universities in Australia offer its students a high class education which is recognized globally. Along with the variety of programs, you can choose to study at Australia’s top universities as well as colleges in Australia.
          </p>
          <p>
            Australia is a home to 43 universities. 37 universities of Australia rank among the top 1000 universities in the world as per Times Higher Education. Australian universities are a blend of academic and teaching excellence and ground breaking research opportunities. Universities in Australia are so distributed that there is at least one main campus of university in each state.
          </p>
        </section>

        <section className="section">
          <h2>Top 10 Universities in Australia</h2>
          <table>
            <thead>
              <tr>
                <th>University Name</th>
                <th>National Ranking</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>University of Melbourne</td><td>1</td></tr>
              <tr><td>University of Sydney</td><td>2</td></tr>
              <tr><td>Australian National University</td><td>3</td></tr>
              <tr><td>University of Queensland</td><td>4</td></tr>
              <tr><td>Monash University</td><td>5</td></tr>
              <tr><td>University of New South Wales</td><td>6</td></tr>
              <tr><td>University of Adelaide</td><td>7</td></tr>
              <tr><td>University of Western Australia</td><td>8</td></tr>
              <tr><td>University of Technology Sydney</td><td>9</td></tr>
              <tr><td>University of Canberra</td><td>10</td></tr>
            </tbody>
          </table>
        </section>

        <section className="section">
          <h2>Top Ranked Universities by International Student Percentage</h2>
          <table>
            <thead>
              <tr>
                <th>University Name</th>
                <th>Global Rank</th>
                <th>International Students</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>University of Melbourne</td><td>31</td><td>48%</td></tr>
              <tr><td>University of Sydney</td><td>51</td><td>43%</td></tr>
              <tr><td>Australian National University</td><td>59</td><td>47%</td></tr>
              <tr><td>University of Queensland</td><td>62</td><td>38%</td></tr>
              <tr><td>Monash University</td><td>64</td><td>43%</td></tr>
              <tr><td>University of New South Wales</td><td>67</td><td>44%</td></tr>
              <tr><td>University of Adelaide</td><td>118</td><td>29%</td></tr>
              <tr><td>University of Western Australia</td><td>139</td><td>29%</td></tr>
              <tr><td>University of Technology Sydney</td><td>160</td><td>36%</td></tr>
              <tr><td>University of Canberra</td><td>184</td><td>35%</td></tr>
            </tbody>
          </table>
        </section>

        <section className="section">
          <h2>Top Universities in Australia for MBA</h2>
          <table>
            <thead>
              <tr>
                <th>University</th>
                <th>Global Rank</th>
                <th>National Rank</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Melbourne Business School</td><td>26</td><td>1</td><td>Melbourne</td></tr>
              <tr><td>UNSW</td><td>42</td><td>2</td><td>Sydney</td></tr>
              <tr><td>Monash Business School</td><td>90</td><td>3</td><td>Melbourne</td></tr>
              <tr><td>The University of Queensland</td><td>111-120</td><td>4</td><td>Brisbane</td></tr>
              <tr><td>Macquarie Business School</td><td>131-140</td><td>5</td><td>Sydney</td></tr>
            </tbody>
          </table>
        </section>

        <section className="section">
          <h2>Top Universities in Australia for MS</h2>
          <table>
            <thead>
              <tr>
                <th>University Name</th>
                <th>National Ranking</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>University of Melbourne</td><td>1</td></tr>
              <tr><td>University of Sydney</td><td>2</td></tr>
              <tr><td>University of Queensland</td><td>3</td></tr>
              <tr><td>Monash University</td><td>4</td></tr>
              <tr><td>University of New South Wales</td><td>5</td></tr>
              <tr><td>Australian National University</td><td>6</td></tr>
              <tr><td>University of Adelaide</td><td>7</td></tr>
              <tr><td>University of Western Australia</td><td>8</td></tr>
              <tr><td>University Technology Sydney</td><td>10</td></tr>
              <tr><td>Curtin University</td><td>11</td></tr>
            </tbody>
          </table>
        </section>

        <section className="section">
          <h2>What to Study in Australia</h2>
          <p>
            Australia offers three main types of degrees — Bachelor, Master, and Doctoral degrees. Below is a table showing their duration:
          </p>
          <table>
            <thead>
              <tr>
                <th>Degree Type</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Bachelors Degree - General</td><td>3 Years</td></tr>
              <tr><td>Bachelors Degree - Professional</td><td>4 Years</td></tr>
              <tr><td>Bachelor Degree + Honors</td><td>3 to 4 + 1 Year</td></tr>
              <tr><td>Masters by Coursework</td><td>1-2 Years</td></tr>
              <tr><td>Masters Extended</td><td>3-4 Years</td></tr>
              <tr><td>Masters by Research</td><td>1-2 Years</td></tr>
              <tr><td>Doctoral Degree</td><td>3-5 Years</td></tr>
              <tr><td>Doctoral Degree (Professional)</td><td>3-5 Years</td></tr>
            </tbody>
          </table>
        </section>

        <section className="section">
          <h2>Cost of Studying in Australia</h2>
          <table>
            <thead>
              <tr>
                <th>Level of Program</th>
                <th>Fees (AUD)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>School</td><td>7,800 - 30,000</td></tr>
              <tr><td>ELICOS</td><td>300 per week</td></tr>
              <tr><td>Undergraduate Program</td><td>20,000 - 40,000</td></tr>
              <tr><td>Postgraduate Program</td><td>20,000 - 50,000</td></tr>
              <tr><td>Doctoral Programs</td><td>18,000 - 42,000</td></tr>
            </tbody>
          </table>
        </section>

        <section className="section">
          <h2>Jobs in Australia</h2>
          <p>
            Australia is a hub of research and technology. The universities offer great research work in arts, humanities, education and sciences. Some crucial inventions and research from Australia include penicillin, IVF, and Wi-Fi. Graduates from Australian universities are valued globally with abundant job opportunities and high-paying positions.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default UniversityAustralia;
