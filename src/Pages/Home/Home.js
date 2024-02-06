import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Card/Card";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <div className="about-us">
        <div className="content">
          <h1>About Us</h1>
          <br />
          <p>
            Established in 2011 by Kirit Vakharia, Gita Vakharia, and Shrinath
            Vakharia, SKY Inclusive initially operated as an investment firm,
            strategically navigating opportunities in Ireland and the UK. The
            company underwent a transformative expansion in 2019, entering the
            Indian market and diversifying its portfolio.
          </p>
          <p>
            In 2021, SKY Inclusive welcomed Ami Vakharia, enriching the
            leadership team with her extensive experience. Ami's addition aligns
            seamlessly with the founders' vision, reinforcing the company's
            commitment to diversity and innovation.
          </p>
          <p>
            Guided by a steadfast commitment to excellence and innovation, SKY
            Inclusive's evolution reflects adaptability and strategic foresight.
            The expansion into India and diversification into additional
            segments underscore the company's ability to capitalise on emerging
            opportunities.
          </p>
          <p>
            From its foundational role as an investment-centric entity, SKY
            Inclusive, now led by its founders and augmented by Ami Vakharia,
            has matured into a multifaceted corporate entity. Positioned for
            sustained success, the company remains dedicated to exploring new
            avenues and contributing to the growth and development of industries
            beyond the financial sector.
          </p>
        </div>
      </div>

      <div className="card-logo">
        <div className="logo-1">
          <img src="https://picsum.photos/500/400" alt="logo1" />
          <Card className="first-card">
            <h1>
              <span>SKY Educo</span>
            </h1>
            <p>
              At SKY Educo, we're dedicated to empowering all individuals on
              their journey to educational excellence. We recognize the profound
              impact education has on individuals and society as a whole.
              Whether you're a student, a counsellor guiding students, or a
              school looking to enhance your educational offerings, we are here
              to assist you.
              <br />
              <br />
              With a diverse range of programs, exceptional faculty, and a
              passion for learning, SKY Educo strives to unlock your potential
              and ignite a lifelong curiosity for knowledge.
            </p>

            <div className="btn-container">
              <button id="card-btn">
                <a href="#about">About US</a>
              </button>
              {/* <button id="card-nbtn">READ MORE</button> */}
            </div>
          </Card>
        </div>

        <div className="logo-2">
          <Card className="first-card">
            <h1>
              <span>Applywise</span>
            </h1>
            <p>
              Applywise, a distinguished B2B service provider, specialises in
              the seamless generation and management of offer letters. Our
              comprehensive services extend to supporting clients with
              documentation, guiding them through the intricacies of the process
              while ensuring the utmost privacy. Committed to excellence,
              Applywise tailors solutions to meet the unique needs of B2B
              clients, offering a trusted platform for efficient and offer
              letters distribution.
              <br />
              <br />
              Embracing innovation and reliability, we prioritise client
              satisfaction by providing guidance, document support, and
              maintaining the highest standards of privacy. Join Applywise in
              optimising your B2B operations, where our dedicated services
              redefine the standards of offer letter management with a focus on
              client support and privacy.
            </p>

            <div className="btn-container">
              <button id="card-btn">
                <a href="#about">About US</a>
              </button>
              {/* <button id="card-nbtn">READ MORE</button> */}
            </div>
          </Card>
          <img src="https://picsum.photos/500/400" alt="logo1" />
        </div>

        <div className="logo-3">
          <img src="https://picsum.photos/500/400" alt="logo1" />
          <Card className="first-card">
            <h1>
              <span>SKY Eduserve</span>
            </h1>
            <p>
              At SKY Eduserve, we redefine the landscape of education with a
              focus on language proficiency and academic support. Our Language
              Center stands as a beacon for those aspiring to master IELTS,
              TOEFL, PTE, and GRE examinations, providing rigorous training to
              ensure success. Complementing this, our Institution division
              offers comprehensive academic support for grades 9 through 12,
              fostering an environment where students thrive intellectually and
              personally.
              <br />
              <br />
              We offer an AI-based system that empowers students to
              independently practise and enhance their writing skills. The
              system provides comprehensive reporting, enabling students to
              receive detailed insights into their performance. This feature not
              only facilitates individualised practice but also cultivates the
              confidence needed to excel in the examination.
            </p>

            <div className="btn-container">
              <button id="card-btn">
                <a href="#about">About US</a>
              </button>
              {/* <button id="card-nbtn">READ MORE</button> */}
            </div>
          </Card>
        </div>

        <div className="logo-4">
          <Card className="first-card">
            <h1>
              <span>SKY Finserve</span>
            </h1>
            <p>
              SKY Finserve stands as a comprehensive financial services
              provider, offering a range of solutions to meet diverse needs. Our
              services encompass student loans, facilitating educational
              pursuits; forex exchange, simplifying global transactions; and
              insurance coverage for comprehensive protection. Additionally, our
              wealth management services are tailored to align with individual
              financial goals, ensuring a secure and prosperous future.
              <br />
              <br />
              At SKY Finserve, we are dedicated to being your financial partner
              in progress, providing expertise and support to navigate the
              intricacies of the financial landscape.
            </p>

            <div className="btn-container">
              <button id="card-btn">
                <a href="#about">About US</a>
              </button>
              {/* <button id="card-nbtn">READ MORE</button> */}
            </div>
          </Card>
          <img src="https://picsum.photos/500/400" alt="logo1" />
        </div>

        <div className="logo-5">
          <img src="https://picsum.photos/500/400" alt="logo1" />
          <Card className="first-card">
            <h1>
              <span>SKY Technolabs</span>
            </h1>
            <p>
              SKY Technolabs is a pioneering force in the technological realm,
              specialising in cutting-edge solutions. Our expertise extends to
              website development, where we craft engaging and innovative
              digital experiences. Embracing the forefront of technological
              advancements, we lead the charge in AI and machine learning,
              ushering in a new era of innovation.
              <br />
              <br />
              At SKY Technolabs, we are committed to shaping the digital future,
              offering bespoke solutions that redefine industry standards. Join
              us on this journey where innovation knows no bounds, and together,
              we'll navigate the ever-evolving landscape of technology.
            </p>

            <div className="btn-container">
              <button id="card-btn">
                <a href="#about">About US</a>
              </button>
              {/* <button id="card-nbtn">READ MORE</button> */}
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
