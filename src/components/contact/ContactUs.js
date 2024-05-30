import React from 'react';
import map from '../../assets/map_2_white.webp';

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="row justify-content-center my-5">
            <div className="col-md-8 text-center">
              <h2>Get in touch with us</h2>
              <p>Send your enquiry now!</p>
              <form>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email address"
                    aria-label="Email"
                  />
                  <button className="btn btn-primary" type="button">
                    Request Demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="map-container" style={{ position: 'relative', height: '400px' }}>
            <img
              src={map}
              alt="World Map"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
