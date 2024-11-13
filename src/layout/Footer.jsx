import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // استيراد مكتبة Font Awesome

export const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'rgba(255, 255, 255, 0.7)', // خلفية شفافة بيضاء
      color: '#000000', // نص أسود
      padding: '20px',
      marginTop: 'auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: '10',
    }}>
      <div>
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p>Follow us on social media:</p>
        <div className="social-icons" style={{ fontSize: '24px' }}>
          {/* روابط مواقع التواصل الاجتماعي مع أيقونات */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: '0 15px', color: '#3b5998', textDecoration: 'none' }}
            aria-label="Visit Facebook"
          >
            <i className="fa fa-facebook"></i>
            <span className="sr-only">Facebook</span> {/* نص مخفي */}
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: '0 15px', color: '#1da1f2', textDecoration: 'none' }}
            aria-label="Visit Twitter"
          >
            <i className="fa fa-twitter"></i>
            <span className="sr-only">Twitter</span> {/* نص مخفي */}
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: '0 15px', color: '#e1306c', textDecoration: 'none' }}
            aria-label="Visit Instagram"
          >
            <i className="fa fa-instagram"></i>
            <span className="sr-only">Instagram</span> {/* نص مخفي */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
