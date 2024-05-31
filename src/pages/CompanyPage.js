import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import e1 from '../assets/e1.webp';
import e2 from '../assets/e2.webp';
import e3 from '../assets/e3.webp';
import AboutUs from '../components/about/AboutUs';
import Services from '../components/services/Services';
import Footer from '../components/footer/Footer';
const researchers = [
  { id: 1, name: 'Debayan Deb', title:"Chief Executive Officer" ,imgSrc: e1 },
  { id: 2, name: 'Aishvary Pratap ', title:"Chief Operating Officer", imgSrc: e2 },
  { id: 3, name: 'Suvidha Tripathi',title:"Sr. Computer Vision Researcher", imgSrc: e3 },
];

const CompanyPage = () => {
  const Researchers = () => {
    return (
      <section id="researchers" className="bg-dark text-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
            <p className="section-title">TEAM</p>
              <h2 className="section-subtitle">Meet Our Researchers</h2>
             
            </div>
          </div>
          <div className="row">
            {researchers.map(researcher => (
              <div key={researcher.id} className="col-md-4 mb-4">
                <div className="card bg-dark text-light border-0 h-100">
                  <div className="card-img-wrapper">
                    <img src={researcher.imgSrc} className="card-img-top" alt={researcher.name} />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{researcher.name}</h5>
                    <h7 className="card-title">{researcher.title}</h7>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div>
      <AboutUs />
      <Services />
      <Researchers />
      <Footer/>
    </div>
  );
};

export default CompanyPage;