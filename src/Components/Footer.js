import "./Footer.css";

const Footer = () => {
  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className="footer-section">
        <h3>About Us</h3>
        <p style={{ marginBottom: '40px' }}>
          We are committed to providing <br/> high-quality healthcare services <br/> and promoting wellness in our community.
        </p>
      </div>

      <div className="footer-section">
        <h3>Our Services</h3>
        <ul>
          <li style={{ marginBottom: '20px' }}>
            <a href="#" className="footer-link">Primary Care</a>
          </li>  
          <li style={{ marginBottom: '40px' }}>
            <a href="#" className="footer-link">Specialty Care</a>
          </li>
          <li style={{ marginBottom: '40px' }}>
            <a href="#" className="footer-link">Emergency Care</a>
          </li>
          <li  style={{ marginBottom: '40px' }}>
            <a href="#" className="footer-link">Preventive Care</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Resources</h3>
        <ul>
          <li  style={{ marginBottom: '40px' }}>
            <a href="#" className="footer-link">Health Articles</a>
          </li>
          <li  style={{ marginBottom: '20px' }}>
            <a href="#" className="footer-link">Health Tips</a>
          </li>
          <li  style={{ marginBottom: '20px' }}>
            <a href="#" className="footer-link">FAQs</a>
          </li>
          <li style={{ marginBottom: '40px' }}>
            <a href="#" className="footer-link">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Privacy Policy</h3>
        <p>
          Read our privacy policy to understand <br/> how we handle your personal information <br/> and ensure its security.
        </p>
      </div>

      <div className="footer-section">
        <h3>Mannat Building</h3>
        <p>123 Healthcare Street, Delhi, India</p>
        <p>Phone: +91 8358491062</p>
        <p>Email: PRR@herhealth.in</p>
      </div>
    </footer>
  );
};
export default Footer;
