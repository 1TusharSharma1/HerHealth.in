import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        {/* <!-- Section 1: About Us --> */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are committed to providing high-quality healthcare services and
            promoting wellness in our community.
          </p>
        </div>
        {/* <!-- Section 2: Services --> */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>
              <a href=" " className="footer-link">
                Primary Care
              </a>
            </li>
            <li>
              <a href=" " className="footer-link">
                Specialty Care
              </a>
            </li>
            <li>
              <a href=" " className="footer-link">
                Emergency Care
              </a>
            </li>
            <li>
              <a href=" " className="footer-link">
                Preventive Care
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- Section 3: Resources --> */}
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href=" " className="footer-link">
                Health Articles
              </a>
            </li>
            <li>
              <a href=" " className="footer-link">
                Health Tips
              </a>
            </li>
            <li>
              <a href=" " className="footer-link">
                FAQs
              </a>
            </li>
            <li>
              <a href=" " className="footer-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- Section 4: Privacy Policy --> */}
        <div className="footer-section">
          <h3>Privacy Policy</h3>
          <p>
            Read our privacy policy to understand how we handle your personal
            information and ensure its security.
          </p>
        </div>{" "}
        {/* <!-- Section 5: Contact Information --> */}
        <div className="footer-section">
          <h3>Mannat Building</h3>
          <p>123 Healthcare Street, Delhi, India</p>
          <p>Phone: +91 8358491062</p>
          <p>Email: PRR@herhealth.in</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
