import '../styles/Footer.css';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer>
      <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', color: '#fff' }}>
        <h2>Contact Me</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <MdOutlineEmail size={24} style={{ color: '#fff' }} />
            <span><a href="mailto:raynaldy.willy@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>raynaldy.willy@gmail.com</a></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaWhatsapp size={24} style={{ color: '#fff' }} />
            <span><a href="https://wa.me/087875484946" style={{ color: '#fff', textDecoration: 'none' }}>087875484946</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;